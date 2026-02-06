import React from 'react';

// Aqui definimos as páginas do sistema
export const pagesConfig = {
  // 1. Definição das Páginas
  Pages: {
    dashboard: () => (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">🏫 Painel Escolar</h1>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 inline-block">
          <p className="text-gray-700 text-lg">
            Sistema carregado com sucesso! <br />
            As rotas estão funcionando perfeitamente.
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => alert("O Javascript está vivo!")}
          >
            Testar Botão
          </button>
        </div>
      </div>
    ),
    // Você pode adicionar mais páginas aqui no futuro
    alunos: () => <div>Lista de Alunos</div>,
  },

  // 2. Definição do Layout (Menu, Cabeçalho, etc)
  Layout: ({ children }) => (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-slate-900 text-white p-4 shadow-lg flex justify-between items-center">
        <span className="font-bold text-xl">SISTEMA GESTÃO</span>
        <nav className="text-sm text-gray-300">v1.0.0</nav>
      </header>
      <main className="container mx-auto">
        {children}
      </main>
    </div>
  ),

  // 3. Qual é a página inicial? (Deve bater com o nome na lista Pages)
  mainPage: 'dashboard'
};

export default pagesConfig;
