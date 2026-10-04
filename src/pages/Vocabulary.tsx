import { useDeferredValue, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  VOCABULARY,
  VOCABULARY_CATEGORIES,
} from '../data/aigramma/vocabulary';
import { useLanguage } from '../i18n/LanguageContext';

export function Vocabulary() {
  const { lang, t, pick } = useLanguage();
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
      <h1>{pick('Vocabulary — 1000 stems', 'Szókincs — 1000 alapszó')}</h1>
      <p className="lead">
        {pick(
          `A practical core lexicon with categories and instant search. ${VOCABULARY.length} words total.`,
          `Gyakorlati alaplexikon kategóriákkal és azonnali kereséssel. Összesen ${VOCABULARY.length} szó.`,
        )}
      </p>

      <div className="vocab-toolbar">
        <input
          type="search"
          placeholder={t('vocab.search')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">{t('vocab.allCategories')}</option>
          {VOCABULARY_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p style={{ color: 'var(--ink-soft)' }}>
        {filtered.length} {t('vocab.results')}
      </p>

      <div className="vocab-grid">
        {filtered.slice(0, 200).map((word) => (
          <Link
            className="vocab-card"
            to={`/vocabulary/${word.id}`}
            key={word.id}
          >
            <div className="vocab-word">{word.word}</div>
            <div>{lang === 'hu' ? word.meaningHu : word.meaning}</div>
            <div className="vocab-meta">
              {lang === 'hu' ? word.meaning : word.meaningHu} ·{' '}
              {word.partOfSpeech} · {word.category}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length > 200 ? (
        <p className="lead">{t('vocab.truncated')}</p>
      ) : null}

      <RememberBox>
        {pick(
          'Every dictionary stem stays unchanged in inflection. Know the stem and the rules, and you can form endless shapes.',
          'Minden szótári tő változatlan marad a ragozásban. Ha ismered a tövet és a szabályokat, végtelen sok alakot képezhetsz.',
        )}
      </RememberBox>
    </article>
  );
}
