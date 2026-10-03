import { useDeferredValue, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  VOCABULARY,
  VOCABULARY_CATEGORIES,
} from '../data/aigramma/vocabulary';

export function Vocabulary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return VOCABULARY.filter((word) => {
      if (category !== 'all' && word.category !== category) return false;
      if (!q) return true;
      return (
        word.word.toLowerCase().includes(q) ||
        word.meaning.toLowerCase().includes(q) ||
        word.meaningHu.toLowerCase().includes(q) ||
        word.partOfSpeech.toLowerCase().includes(q)
      );
    });
  }, [category, deferredQuery]);

  return (
    <article>
      <h1>Szókincs — 1000 alapszó</h1>
      <p className="lead">
        Gyakorlati alaplexikon kategóriákkal és azonnali kereséssel. Összesen{' '}
        {VOCABULARY.length} szó.
      </p>

      <div className="vocab-toolbar">
        <input
          type="search"
          placeholder="Keresés aigramma / magyar / angol…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Minden kategória</option>
          {VOCABULARY_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p style={{ color: 'var(--ink-soft)' }}>{filtered.length} találat</p>

      <div className="vocab-grid">
        {filtered.slice(0, 200).map((word) => (
          <Link className="vocab-card" to={`/vocabulary/${word.id}`} key={word.id}>
            <div className="vocab-word">{word.word}</div>
            <div>{word.meaningHu}</div>
            <div className="vocab-meta">
              {word.meaning} · {word.partOfSpeech} · {word.category}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length > 200 ? (
        <p className="lead">
          Csak az első 200 találat látszik — szűkítsd a keresést a többihez.
        </p>
      ) : null}

      <RememberBox>
        Minden szótári tő változatlan marad a ragozásban. Ha ismered a tövet és a
        szabályokat, végtelen sok alakot képezhetsz.
      </RememberBox>
    </article>
  );
}
