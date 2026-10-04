import { Link } from 'react-router-dom';
import { PRONUNCIATION_NOTES } from '../../data/aigramma/alphabet';
import { useLanguage } from '../../i18n/LanguageContext';
import type { AppLanguage } from '../../types/aigramma';
import { SearchBox } from '../Search/SearchBox';

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="site-header">
      <button className="menu-toggle" type="button" onClick={onToggleNav}>
        {t('ui.menu')}
      </button>
      <Link to="/" className="brand-block">
        <span className="brand-name">{PRONUNCIATION_NOTES.languageName}</span>
        <span className="brand-pronunciation">
          [{PRONUNCIATION_NOTES.spelledOut}]
        </span>
        <span className="brand-phonetic">{PRONUNCIATION_NOTES.phonetic}</span>
      </Link>
      <div className="header-actions">
        <label className="lang-switch" title={t('ui.language')}>
          <span className="lang-switch-label">{t('ui.language')}</span>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as AppLanguage)}
            aria-label={t('ui.language')}
          >
            <option value="en">English</option>
            <option value="hu">Magyar</option>
          </select>
        </label>
        <SearchBox />
      </div>
    </header>
  );
}
