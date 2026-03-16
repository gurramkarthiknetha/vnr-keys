/**
 * Environment-based configuration utility for backend
 */

/**
 * Get the current runtime environment.
 * @returns {string} 'production' | 'development'
 */
export const getEnvironment = () => (
  process.env.NODE_ENV === 'production' ? 'production' : 'development'
);

/**
 * Get client URL
 * @returns {string} The client/frontend URL
 */
export const getClientUrl = () => {
  const clientUrl = process.env.CLIENT_URL;

  if (!clientUrl) {
    throw new Error('Missing CLIENT_URL in .env file.');
  }

  return clientUrl;
};

/**
 * Get backend URL (for OAuth callbacks)
 * @returns {string} The backend URL
 */
export const getBackendUrl = () => {
  const backendUrl = process.env.BACKEND_URL;

  if (!backendUrl) {
    throw new Error('Missing BACKEND_URL in .env file.');
  }

  return backendUrl;
};

/**
 * Get OAuth callback URL
 * @returns {string} The OAuth callback URL
 */
export const getOAuthCallbackUrl = () => {
  const backendUrl = getBackendUrl();
  return backendUrl.includes('/be')
    ? `${backendUrl}/api/auth/google/callback`
    : `${backendUrl}/be/api/auth/google/callback`;
};

/**
 * Get CORS allowed origins based on environment
 * @returns {string[]} Array of allowed origins
 */
export const getCorsOrigins = () => {
  const env = getEnvironment();
  const baseOrigins = [];

  if (process.env.CLIENT_URL) {
    baseOrigins.push(process.env.CLIENT_URL);
  }

  if (process.env.CORS_ADDITIONAL_ORIGINS) {
    const additionalOrigins = process.env.CORS_ADDITIONAL_ORIGINS.split(',').map(origin => origin.trim());
    baseOrigins.push(...additionalOrigins);
  }

  const envOrigins = {
    development: [
      'http://localhost:3203',
      'http://localhost:3204',
      'http://localhost:3205',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://127.0.0.1:3203',
      'http://127.0.0.1:3204',
      'http://127.0.0.1:3205',
      'http://127.0.0.1:5173',
      'https://vnr-keys.vercel.app',
      'https://vnr-keys-1.onrender.com'
    ],
    production: []
  };

  const allOrigins = [...baseOrigins, ...envOrigins[env]];

  // Remove duplicates
  return [...new Set(allOrigins)];
};

/**
 * Configuration object with all settings
 */
export const config = {
  environment: getEnvironment(),
  server: {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV
  },
  urls: {
    client: getClientUrl(),
    backend: getBackendUrl(),
    oauthCallback: getOAuthCallbackUrl()
  },
  cors: {
    origins: getCorsOrigins()
  },
  database: {
    mongoUri: process.env.MONGO_URI
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET,
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM,
    fromName: process.env.EMAIL_FROM_NAME
  }
};

// Log configuration in development
if (config.environment === 'development') {
  console.log('🔧 BACKEND CONFIG:', {
    environment: config.environment,
    clientUrl: config.urls.client,
    backendUrl: config.urls.backend,
    oauthCallback: config.urls.oauthCallback,
    corsOrigins: config.cors.origins
  });
}

export default config;
