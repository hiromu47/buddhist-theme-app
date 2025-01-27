import React from 'react';
import BuddhistThemeHierarchy from './BuddhistThemeHierarchy';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">仏教テーマ階層</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <BuddhistThemeHierarchy />
      </main>
    </div>
  );
}

export default App;
