'use client';

import React, { useEffect, useState } from 'react';
import PasswordScreen from './PasswordScreen';

const PasswordWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated (i.e., they have entered the password)
    const auth = localStorage.getItem('authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (loading) {
    // Optionally show a loading spinner while checking authentication status
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Show the password screen if not authenticated
    return <PasswordScreen onAuthSuccess={handleAuthSuccess} />;
  }

  return children;
};

export default PasswordWrapper;
