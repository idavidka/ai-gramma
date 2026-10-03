import { NavLink } from 'react-router-dom';
import { NAV_SECTIONS } from '../../data/aigramma/grammar';

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="sidebar">
      {NAV_SECTIONS.map((section) => (
        <div className="sidebar-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
}
