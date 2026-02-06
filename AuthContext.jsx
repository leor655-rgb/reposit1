import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ id: 1, name: 'Admin' });

  // Valores que o seu App.jsx espera na linha 18 e 31
  const value = {
    user,
    signed: !!user,
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    navigateToLogin: () => console.log('Redirecionar para login')
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);