import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Clock, 
  AlertTriangle, 
  Settings, 
  Save
} from 'lucide-react';
import axios from 'axios';
import { handleError, handleSuccess } from '../../utils/errorHandler';

const SecuritySettingsPage = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('password');

  const API_URL = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/dashboard`
    : import.meta.env.MODE === "dev"
      ? "https://keys.staysync.io/be/api/dashboard"
      : "/api/dashboard";

  useEffect(() => {
    fetchSecuritySettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSecuritySettings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/security-settings`);
      setSettings(response.data.data);
    } catch (error) {
      handleError(error, 'Failed to fetch security settings');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    try {
      setSaving(true);
      await axios.put(`${API_URL}/security-settings`, settings);
      handleSuccess('Security settings updated successfully');
    } catch (error) {
      handleError(error, 'Failed to update security settings');
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const tabs = [
    { id: 'password', label: 'Password Policy', icon: Lock },
    { id: 'session', label: 'Session Management', icon: Clock },
    { id: 'rate', label: 'Rate Limiting', icon: AlertTriangle },
    { id: 'audit', label: 'Audit Logging', icon: Settings }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-white mt-4">Loading security settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-green-400 mr-4" />
            <h1 className="text-3xl font-bold text-white">Security Settings</h1>
          </div>
          <button
            onClick={handleSaveSettings}
            disabled={saving}
            className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white rounded-lg transition-colors"
          >
            <Save className="h-5 w-5 mr-2" />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-xl p-6">
              {activeTab === 'password' && (
                <PasswordPolicySettings
                  settings={settings?.passwordPolicy}
                  onUpdate={(field, value) => updateSetting('passwordPolicy', field, value)}
                />
              )}
              {activeTab === 'session' && (
                <SessionSettings
                  settings={settings?.sessionSettings}
                  onUpdate={(field, value) => updateSetting('sessionSettings', field, value)}
                />
              )}
              {activeTab === 'rate' && (
                <RateLimitingSettings
                  settings={settings?.rateLimiting}
                  onUpdate={(field, value) => updateSetting('rateLimiting', field, value)}
                />
              )}
              {activeTab === 'audit' && (
                <AuditLoggingSettings
                  settings={settings?.auditLogging}
                  onUpdate={(field, value) => updateSetting('auditLogging', field, value)}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Password Policy Settings Component
const PasswordPolicySettings = ({ settings, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Password Policy</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Minimum Length
        </label>
        <input
          type="number"
          value={settings?.minLength || 8}
          onChange={(e) => onUpdate('minLength', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="6"
          max="32"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password Max Age (days)
        </label>
        <input
          type="number"
          value={settings?.maxAge || 90}
          onChange={(e) => onUpdate('maxAge', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="30"
          max="365"
        />
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="requireUppercase"
          checked={settings?.requireUppercase || false}
          onChange={(e) => onUpdate('requireUppercase', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="requireUppercase" className="ml-2 text-sm text-gray-300">
          Require uppercase letters
        </label>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="requireLowercase"
          checked={settings?.requireLowercase || false}
          onChange={(e) => onUpdate('requireLowercase', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="requireLowercase" className="ml-2 text-sm text-gray-300">
          Require lowercase letters
        </label>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="requireNumbers"
          checked={settings?.requireNumbers || false}
          onChange={(e) => onUpdate('requireNumbers', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="requireNumbers" className="ml-2 text-sm text-gray-300">
          Require numbers
        </label>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="requireSpecialChars"
          checked={settings?.requireSpecialChars || false}
          onChange={(e) => onUpdate('requireSpecialChars', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="requireSpecialChars" className="ml-2 text-sm text-gray-300">
          Require special characters
        </label>
      </div>
    </div>
  </div>
);

// Session Settings Component
const SessionSettings = ({ settings, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Session Management</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Max Session Duration (hours)
        </label>
        <input
          type="number"
          value={settings?.maxSessionDuration || 24}
          onChange={(e) => onUpdate('maxSessionDuration', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="1"
          max="168"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Max Concurrent Sessions
        </label>
        <input
          type="number"
          value={settings?.maxConcurrentSessions || 3}
          onChange={(e) => onUpdate('maxConcurrentSessions', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="1"
          max="10"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Session Timeout (minutes)
        </label>
        <input
          type="number"
          value={settings?.sessionTimeout || 30}
          onChange={(e) => onUpdate('sessionTimeout', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="5"
          max="120"
        />
      </div>
    </div>
  </div>
);

// Rate Limiting Settings Component
const RateLimitingSettings = ({ settings, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Rate Limiting</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Max Login Attempts
        </label>
        <input
          type="number"
          value={settings?.loginAttempts || 5}
          onChange={(e) => onUpdate('loginAttempts', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="3"
          max="10"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Lockout Duration (minutes)
        </label>
        <input
          type="number"
          value={settings?.lockoutDuration || 15}
          onChange={(e) => onUpdate('lockoutDuration', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="5"
          max="60"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          API Requests Per Minute
        </label>
        <input
          type="number"
          value={settings?.apiRequestsPerMinute || 100}
          onChange={(e) => onUpdate('apiRequestsPerMinute', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="10"
          max="1000"
        />
      </div>
    </div>
  </div>
);

// Audit Logging Settings Component
const AuditLoggingSettings = ({ settings, onUpdate }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Audit Logging</h3>
    
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="auditEnabled"
          checked={settings?.enabled || false}
          onChange={(e) => onUpdate('enabled', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="auditEnabled" className="ml-2 text-sm text-gray-300">
          Enable audit logging
        </label>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Log Level
        </label>
        <select
          value={settings?.logLevel || 'INFO'}
          onChange={(e) => onUpdate('logLevel', e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
        >
          <option value="DEBUG">Debug</option>
          <option value="INFO">Info</option>
          <option value="WARN">Warning</option>
          <option value="ERROR">Error</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Log Retention (days)
        </label>
        <input
          type="number"
          value={settings?.retentionDays || 30}
          onChange={(e) => onUpdate('retentionDays', parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          min="7"
          max="365"
        />
      </div>
    </div>
  </div>
);

export default SecuritySettingsPage;
