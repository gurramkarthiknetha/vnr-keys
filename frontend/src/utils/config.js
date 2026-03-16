/**
 * Environment-based configuration utility
 */

/**
 * Get the current runtime environment.
 * @returns {string} 'production' | 'development'
 */
export const getEnvironment = () => (
  import.meta.env.PROD ? 'production' : 'development'
);

/**
 * Get API URL
 * @returns {string} The API base URL
 */
export const getApiUrl = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error('Missing VITE_API_URL in .env file.');
  }

  return apiUrl;
};

/**
 * Get frontend URL
 * @returns {string} The frontend base URL
 */
export const getFrontendUrl = () => {
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

  if (!frontendUrl) {
    throw new Error('Missing VITE_FRONTEND_URL in .env file.');
  }

  return frontendUrl;
};

/**
 * Get Socket.IO server URL (API URL without /api suffix)
 * @returns {string} The Socket.IO server URL
 */
export const getSocketUrl = () => {
  const apiUrl = getApiUrl();
  return apiUrl.replace('/api', '');
};

/**
 * Configuration object with all URLs
 */
export const config = {
  environment: getEnvironment(),
  api: {
    baseUrl: getApiUrl(),
    authUrl: `${getApiUrl()}/auth`,
    keysUrl: `${getApiUrl()}/keys`,
    dashboardUrl: `${getApiUrl()}/dashboard`
  },
  frontend: {
    baseUrl: getFrontendUrl()
  },
  socket: {
    url: getSocketUrl()
  },
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.VITE_APP_VERSION
  },
  // QR-related configuration
  qr: {
    // Use env override if provided, default to 60 seconds
    validitySeconds: (() => {
      const v = Number(import.meta.env.VITE_QR_VALIDITY_SECONDS);
      return Number.isFinite(v) && v > 0 ? v : 60;
    })()
  }
};

// Log configuration in development
if (config.environment === 'development') {
  console.log('🔧 APP CONFIG:', config);
}

export default config;
