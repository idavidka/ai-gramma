import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MessageKey } from '../../i18n/messages';
import { searchAll } from '../../utils/search';

const KIND_KEYS: Record<string, MessageKey> = {
  grammar: 'search.grammar',
  vocabulary: 'search.vocabulary',
  case: 'search.case',
  suffix: 'search.suffix',
  example: 'search.example',
  mode: 'search.mode',
  tense: 'search.tense',
};

export function SearchBox() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => searchAll(query, 18), [query]);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className="search-wrap" ref={wrapRef}>
      <span className="search-icon" aria-hidden>
        ⌕
      </span>
      <input
        type="search"
        placeholder={t('ui.search')}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        aria-label={t('ui.search')}
      />
      {open && query.trim() && (
        <div className="search-results">
          {results.length === 0 ? (
            <div style={{ padding: '0.9rem 1rem' }}>{t('ui.noResults')}</div>
          ) : (
            results.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  setOpen(false);
                  setQuery('');
                }}
              >
                <div className="search-kind">
                  {t(KIND_KEYS[item.kind] ?? 'search.grammar')}
                </div>
                <div>
                  <strong>{item.title}</strong>
                </div>
                {item.subtitle ? (
                  <div style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>
                    {item.subtitle}
                  </div>
                ) : null}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
