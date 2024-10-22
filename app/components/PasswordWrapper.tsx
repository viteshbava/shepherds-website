'use client';

import React, { useEffect, useState } from 'react';
import PasswordScreen from './PasswordScreen';

interface PasswordWrapperProps {
  children: React.ReactNode;
  password: string;
}

const PasswordWrapper = ({ children, password }: PasswordWrapperProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated (i.e., they have previously entered the correct/current password)
    const auth = localStorage.getItem('authenticated');
    if (auth === password) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [password]);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (loading) {
    // Optionally show a loading spinner while checking authentication status
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Show the password screen if not authenticated
    return <PasswordScreen onAuthSuccess={handleAuthSuccess} password={password} />;
  }

  return children;
};

export default PasswordWrapper;
