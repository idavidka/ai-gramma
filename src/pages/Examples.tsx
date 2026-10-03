import { useMemo, useState } from 'react';
import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { SENTENCE_EXAMPLES } from '../data/aigramma/examples';

const LEVELS = [
  { id: 'all', label: 'Mind' },
  { id: 'basic', label: 'Alap' },
  { id: 'intermediate', label: 'Középhaladó' },
  { id: 'advanced', label: 'Haladó' },
] as const;

export function Examples() {
  const [level, setLevel] = useState<(typeof LEVELS)[number]['id']>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SENTENCE_EXAMPLES.filter((ex) => {
      if (level !== 'all' && !ex.tags?.includes(level)) return false;
      if (!q) return true;
      return (
        ex.aigramma.toLowerCase().includes(q) ||
        ex.hungarian.toLowerCase().includes(q) ||
        (ex.tags ?? []).some((t) => t.includes(q))
      );
    });
  }, [level, query]);

  return (
    <article>
      <h1>Példamondatok</h1>
      <p className="lead">
        Minden példa ugyanazt a nyelvtani forrást követi — nincsenek ellentmondó
        alakok.
      </p>

      <div className="vocab-toolbar">
        <input
          type="search"
          placeholder="Keresés a példákban…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as typeof level)}
        >
          {LEVELS.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      <ExampleList examples={filtered} />

      <RememberBox>
        Ha egy példa újnak tűnik, bontsd elemeire: tő + idő/eset + mód/többes +
        személy.
      </RememberBox>
    </article>
  );
}
