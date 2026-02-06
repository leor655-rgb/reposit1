import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { queryClientInstance } from './lib/query-client.js';
import NavigationTracker from './lib/NavigationTracker.jsx';
import PageNotFound from './lib/PageNotFound.jsx';
import { AuthProvider, useAuth } from './lib/AuthContext.jsx';
import { Toaster } from "./components/ui/toaster";
import * as ConfigModule from './pages.config.js';

// Configurações dinâmicas
const config = ConfigModule.pagesConfig || ConfigModule.default || {};
const Pages = config.Pages || {};
const Layout = config.Layout || (({ children }) => <>{children}</>);
const mainPageKey = config.mainPage || (Object.keys(Pages)[0] || "");
const MainPage = Pages[mainPageKey] || (() => <div>Página não encontrada.</div>);

const AuthenticatedApp = () => {
  const { isLoadingAuth, authError, navigateToLogin } = useAuth();

  if (isLoadingAuth) return <div className="flex h-screen items-center justify-center">Carregando...</div>;
  
  if (authError?.type === 'auth_required') {
    navigateToLogin();
    return null;
  }

  return (
    <Layout currentPageName={mainPageKey}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {Object.entries(Pages).map(([path, Page]) => (
          <Route key={path} path={`/${path}`} element={<Page />} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default function App() {
  return (
    // O Router fica no topo de TUDO
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <NavigationTracker />
          <AuthenticatedApp />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}