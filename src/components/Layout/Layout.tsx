import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export function Layout() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

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
        aria-label={t('ui.closeMenu')}
        onClick={() => setNavOpen(false)}
      />
    </div>
  );
}
