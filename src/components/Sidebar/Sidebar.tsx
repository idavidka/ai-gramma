import { NavLink } from 'react-router-dom';
import { NAV_SECTIONS } from '../../data/aigramma/grammar';
import { useLanguage } from '../../i18n/LanguageContext';

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLanguage();

  return (
    <aside className="sidebar">
      {NAV_SECTIONS.map((section) => (
        <div className="sidebar-section" key={section.titleKey}>
          <h2>{t(section.titleKey)}</h2>
          {section.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={onNavigate}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
}
