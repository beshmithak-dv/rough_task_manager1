import { useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';

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
        <Dashboard onNavigate={handleNavigate} />
      )}
    </>
  );
}

export default App;
