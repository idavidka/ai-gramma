import { Link } from 'react-router-dom';
import { PRONUNCIATION_NOTES } from '../../data/aigramma/alphabet';
import { SearchBox } from '../Search/SearchBox';

export function Header({
  onToggleNav,
}: {
  onToggleNav: () => void;
}) {
  return (
    <header className="site-header">
      <button className="menu-toggle" type="button" onClick={onToggleNav}>
        Menü
      </button>
      <Link to="/" className="brand-block">
        <span className="brand-name">{PRONUNCIATION_NOTES.languageName}</span>
        <span className="brand-pronunciation">
          [{PRONUNCIATION_NOTES.spelledOut}]
        </span>
        <span className="brand-phonetic">{PRONUNCIATION_NOTES.phonetic}</span>
      </Link>
      <div className="header-actions">
        <SearchBox />
      </div>
    </header>
  );
}
