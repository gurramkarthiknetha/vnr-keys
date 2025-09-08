// Configure environment variables FIRST before any other imports
import "./config/env.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import passport from "./config/passport.js";

import { connectDB } from "./db/connectDB.js";
import { verifyTransporter } from "./nodemailer/nodemailer.config.js";
import { globalErrorHandler } from "./utils/errorHandler.js";
import { config } from "./utils/config.js";
import { initializeScheduledJobs } from "./services/scheduledJobs.js";
import {
	helmetConfig,
	sanitizeRequest,
	requestLogger
} from "./middleware/security.js";

import authRoutes from "./routes/auth.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";
import keyRoutes from "./routes/key.route.js";
import apiKeyRoutes from "./routes/apiKey.route.js";
import auditRoutes from "./routes/audit.route.js";
import notificationRoutes from "./routes/notification.route.js";
import about from "./routes/about.js"

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Trust proxy for Render deployment
app.set('trust proxy', 1);

// Security middleware
app.use(helmetConfig);
app.use(requestLogger);

app.use(sanitizeRequest);

// CORS configuration - UPDATED
const corsOptions = {
	origin: function (origin, callback) {
		// Only log CORS details in development mode
		if (process.env.NODE_ENV === 'development') {
			console.log('CORS check - Origin:', origin);
		}

		// Allow requests with no origin (like mobile apps, curl requests, or server-to-server)
		if (!origin) return callback(null, true);

		// Get allowed origins from config
		const allowedOrigins = config.cors.origins;

		// Add vercel.app domain dynamically if not already included
		const vercelOrigin = 'https://vnr-keys.vercel.app';
		if (!allowedOrigins.includes(vercelOrigin)) {
			allowedOrigins.push(vercelOrigin);
		}

		// Allow all subdomains of vercel.app for flexibility
		if (origin.endsWith('.vercel.app')) {
			if (process.env.NODE_ENV === 'development') {
				console.log('CORS: ALLOWED vercel.app subdomain', origin);
			}
			return callback(null, true);
		}

		if (allowedOrigins.includes(origin)) {
			if (process.env.NODE_ENV === 'development') {
				console.log('CORS: ALLOWED for', origin);
			}
			callback(null, true);
		} else {
			console.warn('CORS: BLOCKED for', origin);
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true, // This is crucial for cookies to work cross-origin
	optionsSuccessStatus: 200,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: [
		'Content-Type',
		'Authorization',
		'X-Requested-With',
		'Accept',
		'Origin',
		'Access-Control-Request-Method',
		'Access-Control-Request-Headers'
	],
	exposedHeaders: ['Set-Cookie'], // Expose Set-Cookie header
};

// Handle preflight requests
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' })); // Limit request size
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Session middleware for Passport (only needed for OAuth flow)
app.use(session({
	secret: process.env.JWT_SECRET || 'your-session-secret',
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: process.env.NODE_ENV === 'production',
		maxAge: 24 * 60 * 60 * 1000 // 24 hours
	}
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Health check endpoint with CORS headers
app.get("/api/health", cors(corsOptions), (req, res) => {
	res.json({
		success: true,
		message: "Server is running",
		timestamp: new Date().toISOString(),
		env: process.env.NODE_ENV,
		cors: {
			origin: req.headers.origin,
			allowedOrigins: config.cors.origins
		}
	});
});

// Root endpoint
app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "VNR Keys API Server",
		version: "1.0.0",
		endpoints: {
			about : "/api/about",
			health: "/api/health",
			auth: "/api/auth",
			dashboard: "/api/dashboard",
			keys: "/api/keys",
			apiKeys: "/api/api-keys",
			audit: "/api/audit"
		}
	});
});

app.use("/api/auth", cors(corsOptions), authRoutes);
app.use("/api/dashboard", cors(corsOptions), dashboardRoutes);
app.use("/api/keys", cors(corsOptions), keyRoutes);
app.use("/api/api-keys", cors(corsOptions), apiKeyRoutes);
app.use("/api/audit", cors(corsOptions), auditRoutes);
app.use("/api/notifications", cors(corsOptions), notificationRoutes);
app.use("/api/about", cors(corsOptions), about);

// For local development - handle /be prefix routes to match Google OAuth redirect URIs
if (process.env.NODE_ENV === 'development' || process.env.ENVIRONMENT === 'local') {
	app.use("/be/api/auth", cors(corsOptions), authRoutes);
	app.use("/be/api/dashboard", cors(corsOptions), dashboardRoutes);
	app.use("/be/api/keys", cors(corsOptions), keyRoutes);
	app.use("/be/api/api-keys", cors(corsOptions), apiKeyRoutes);
	app.use("/be/api/notifications", cors(corsOptions), notificationRoutes);
	app.use("/be/api/about", cors(corsOptions), about);
}

// Global error handler (must be after all routes)
app.use(globalErrorHandler);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Configure Socket.IO with CORS
const io = new Server(server, {
	cors: {
		origin: function(origin, callback) {
			// Allow all vercel.app subdomains and configured origins
			if (!origin || origin.endsWith('.vercel.app')) {
				return callback(null, true);
			}
			
			const allowedOrigins = config.cors.origins;
			if (allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		methods: ["GET", "POST"],
		credentials: true
	}
});

// Socket.IO connection handling
io.on('connection', (socket) => {
	if (process.env.NODE_ENV === 'development') {
		console.log(`🔌 User connected: ${socket.id}`);
	}

	// Join user to their own room for personalized updates
	socket.on('join-user-room', (userId) => {
		socket.join(`user-${userId}`);
		if (process.env.NODE_ENV === 'development') {
			console.log(`👤 User ${userId} joined their room`);
		}
	});

	// Join user to role-based room for role-specific notifications
	socket.on('join-role-room', (role) => {
		if (['faculty', 'security', 'admin'].includes(role)) {
			socket.join(`${role}-room`);
			if (process.env.NODE_ENV === 'development') {
				console.log(`👥 User joined ${role} room`);
			}
		}
	});

	// Join all users to a general keys room for global updates
	socket.join('keys-updates');

	socket.on('disconnect', () => {
		if (process.env.NODE_ENV === 'development') {
			console.log(`🔌 User disconnected: ${socket.id}`);
		}
	});
});

// Make io available globally for other modules
global.io = io;

server.listen(PORT, async () => {
	await connectDB();
	await verifyTransporter();

	// Initialize scheduled jobs
	initializeScheduledJobs();

	console.log(`🚀 VNR Keys Server running on port ${PORT}`);
	console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
	console.log("🔌 Socket.IO server ready for real-time updates");

	if (config.server.nodeEnv === 'development' || config.environment === 'local') {
		console.log(`📱 Frontend URL: ${config.urls.client}`);
		console.log(`🔗 API Health: ${config.urls.backend}/api/health`);
	}
});
