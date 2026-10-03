import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export function Layout() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`app-shell${navOpen ? ' nav-open' : ''}`}>
      <Sidebar onNavigate={() => setNavOpen(false)} />
      <div className="main-column">
        <Header onToggleNav={() => setNavOpen((v) => !v)} />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <button
        type="button"
        className="overlay"
        aria-label="Menü bezárása"
        onClick={() => setNavOpen(false)}
      />
    </div>
  );
}
