import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchAll } from '../../utils/search';

const KIND_LABEL: Record<string, string> = {
  grammar: 'Nyelvtan',
  vocabulary: 'Szókincs',
  case: 'Eset',
  suffix: 'Toldalék',
  example: 'Példa',
  mode: 'Mód',
  tense: 'Idő',
};

export function SearchBox() {
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
        placeholder="Keresés: nyelvtan, szó, eset…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        aria-label="Keresés"
      />
      {open && query.trim() && (
        <div className="search-results">
          {results.length === 0 ? (
            <div style={{ padding: '0.9rem 1rem' }}>Nincs találat.</div>
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
                <div className="search-kind">{KIND_LABEL[item.kind] ?? item.kind}</div>
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
