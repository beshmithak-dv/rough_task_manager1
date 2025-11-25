import { useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

type Page = 'home' | 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'home' && (
        <Home onNavigate={handleNavigate} />
      )}
      {currentPage === 'login' && (
        <Login onNavigate={handleNavigate} />
      )}
      {currentPage === 'signup' && (
        <Signup onNavigate={handleNavigate} />
      )}
      {currentPage === 'dashboard' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-white drop-shadow-lg">Dashboard</h1>
            <p className="text-xl text-white drop-shadow-md">Coming soon...</p>
            <button
              onClick={() => handleNavigate('home')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
