import { useMemo, useState } from 'react';
import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { SENTENCE_EXAMPLES } from '../data/aigramma/examples';
import { useLanguage } from '../i18n/LanguageContext';

export function Examples() {
  const { lang, pick } = useLanguage();
  const [level, setLevel] = useState<'all' | 'basic' | 'intermediate' | 'advanced'>(
    'all',
  );
  const [query, setQuery] = useState('');

  const levels = [
    { id: 'all' as const, label: pick('All', 'Mind') },
    { id: 'basic' as const, label: pick('Basic', 'Alap') },
    {
      id: 'intermediate' as const,
      label: pick('Intermediate', 'Középhaladó'),
    },
    { id: 'advanced' as const, label: pick('Advanced', 'Haladó') },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SENTENCE_EXAMPLES.filter((ex) => {
      if (level !== 'all' && !ex.tags?.includes(level)) return false;
      if (!q) return true;
      return (
        ex.aigramma.toLowerCase().includes(q) ||
        ex.english.toLowerCase().includes(q) ||
        ex.hungarian.toLowerCase().includes(q) ||
        (ex.tags ?? []).some((t) => t.includes(q))
      );
    });
  }, [level, query]);

  return (
    <article>
      <h1>{pick('Example sentences', 'Példamondatok')}</h1>
      <p className="lead">
        {pick(
          'Every example follows the same grammar source — no conflicting forms.',
          'Minden példa ugyanazt a nyelvtani forrást követi — nincsenek ellentmondó alakok.',
        )}
      </p>

      <div className="vocab-toolbar">
        <input
          type="search"
          placeholder={pick(
            'Search examples…',
            'Keresés a példákban…',
          )}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as typeof level)}
        >
          {levels.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      <p style={{ color: 'var(--ink-soft)' }}>
        {filtered.length}{' '}
        {lang === 'hu' ? 'példa' : filtered.length === 1 ? 'example' : 'examples'}
      </p>

      <ExampleList examples={filtered} />

      <RememberBox>
        {pick(
          'If an example feels new, break it down: stem + tense/case + mode/plural + person.',
          'Ha egy példa újnak tűnik, bontsd elemeire: tő + idő/eset + mód/többes + személy.',
        )}
      </RememberBox>
    </article>
  );
}
