import { Link, useParams } from 'react-router-dom';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { CASES } from '../data/aigramma/cases';
import { PERSONS } from '../data/aigramma/persons';
import { getWordById } from '../data/aigramma/vocabulary';
import { useLanguage } from '../i18n/LanguageContext';
import { buildNoun, buildVerb } from '../utils/morphology';
import { describeHarmony } from '../utils/vowelHarmony';

export function WordDetail() {
  const { id } = useParams();
  const word = id ? getWordById(id) : undefined;
  const { lang, t, pick } = useLanguage();

  if (!word) {
    return (
      <article>
        <h1>{t('vocab.notFound')}</h1>
        <Link to="/vocabulary">{t('vocab.back')}</Link>
      </article>
    );
  }

  const isNounLike =
    word.partOfSpeech === 'noun' || word.partOfSpeech === 'adjective';
  const isVerb = word.partOfSpeech === 'verb';

  return (
    <article>
      <p className="lead">
        <Link to="/vocabulary">{t('vocab.back')}</Link>
      </p>
      <h1>{word.word}</h1>
      <p className="lead">
        {lang === 'hu' ? word.meaningHu : word.meaning}
        {' · '}
        {lang === 'hu' ? word.meaning : word.meaningHu}
      </p>
      <p>
        {t('vocab.pos')}: <strong>{word.partOfSpeech}</strong> ·{' '}
        {t('vocab.category')}: <strong>{word.category}</strong> ·{' '}
        {t('vocab.harmony')}: <strong>{describeHarmony(word.word)}</strong>
      </p>
      {word.notes ? <p>{word.notes}</p> : null}

      {isNounLike ? (
        <section className="section">
          <h2 className="section-title">
            {pick('Case patterns', 'Esetminták')}
          </h2>
          <GrammarTable
            rows={CASES.slice(0, 8)}
            columns={[
              {
                key: 'c',
                header: pick('Case', 'Eset'),
                render: (c) => (lang === 'hu' ? c.nameHu : c.name),
              },
              {
                key: 'f',
                header: pick('Form', 'Alak'),
                render: (c) => buildNoun({ stem: word.word, caseId: c.id }),
              },
            ]}
          />
          <h3>{pick('Possessive forms', 'Birtokos alakok')}</h3>
          <GrammarTable
            rows={PERSONS}
            columns={[
              {
                key: 'p',
                header: pick('Person', 'Személy'),
                render: (p) => (lang === 'hu' ? p.labelHu : p.label),
              },
              {
                key: 'f',
                header: pick('Form', 'Alak'),
                render: (p) => buildNoun({ stem: word.word, person: p.id }),
              },
            ]}
          />
        </section>
      ) : null}

      {isVerb ? (
        <section className="section">
          <h2 className="section-title">
            {pick('Conjugation patterns', 'Ragozási minták')}
          </h2>
          <GrammarTable
            rows={PERSONS}
            columns={[
              {
                key: 'p',
                header: pick('Person', 'Személy'),
                render: (p) => (lang === 'hu' ? p.labelHu : p.label),
              },
              {
                key: 'pr',
                header: pick('Present', 'Jelen'),
                render: (p) => buildVerb({ stem: word.word, person: p.id }),
              },
              {
                key: 'pa',
                header: pick('Past', 'Múlt'),
                render: (p) =>
                  buildVerb({ stem: word.word, tense: 'past', person: p.id }),
              },
              {
                key: 'fu',
                header: pick('Future', 'Jövő'),
                render: (p) =>
                  buildVerb({
                    stem: word.word,
                    tense: 'future',
                    person: p.id,
                  }),
              },
            ]}
          />
        </section>
      ) : null}
    </article>
  );
}
