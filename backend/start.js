#!/usr/bin/env node

// Startup script with environment debugging
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config();

console.log("=== STARTUP ENVIRONMENT CHECK ===");
console.log("NODE_ENV:", process.env.NODE_ENV || "undefined");
console.log("PORT:", process.env.PORT || "undefined");
console.log("CLIENT_URL:", process.env.CLIENT_URL || "undefined");
console.log("BACKEND_URL:", process.env.BACKEND_URL || "undefined");
console.log("MONGO_URI:", process.env.MONGO_URI ? "SET" : "undefined");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "SET" : "undefined");
console.log("Current working directory:", process.cwd());
console.log("__dirname equivalent:", path.resolve());
console.log("=====================================");

// Import and start the main application
import("./index.js").catch(error => {
    console.error("Failed to start application:", error);
    process.exit(1);
});
