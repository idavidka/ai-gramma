import { Link } from 'react-router-dom';
import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  ALPHABET,
  CONSONANTS,
  PRONUNCIATION_NOTES,
  VOWELS,
} from '../data/aigramma/alphabet';
import { PHONOLOGY } from '../data/aigramma/phonology';
import { useLanguage } from '../i18n/LanguageContext';

export function Pronunciation() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Pronunciation & alphabet', 'Kiejtés és ábécé')}</h1>
      <p className="lead">
        {pick(PRONUNCIATION_NOTES.note, PRONUNCIATION_NOTES.noteHu)}
      </p>
      <p>
        <Link to="/sounds">
          {pick(
            'Full phonetic guide for every vowel and consonant →',
            'Teljes fonetikus útmutató minden magánhangzóhoz és mássalhangzóhoz →',
          )}
        </Link>
      </p>

      <section className="section">
        <h2 className="section-title">{pick('Principles', 'Alapelvek')}</h2>
        <ul>
          {(lang === 'hu' ? PHONOLOGY.principlesHu : PHONOLOGY.principles).map(
            (p) => (
              <li key={p}>{p}</li>
            ),
          )}
        </ul>
        <p>{pick(PRONUNCIATION_NOTES.stress, PRONUNCIATION_NOTES.stressHu)}</p>
        <p>{pick(PHONOLOGY.orthography, PHONOLOGY.orthographyHu)}</p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Vowels', 'Magánhangzók')}</h2>
        <GrammarTable
          rows={VOWELS}
          columns={[
            { key: 'l', header: pick('Letter', 'Betű'), render: (r) => <strong>{r.letter}</strong> },
            { key: 'ipa', header: 'IPA', render: (r) => r.ipa },
            {
              key: 'ph',
              header: pick('Phonetic', 'Fonetika'),
              render: (r) => (lang === 'hu' ? r.phoneticHu : r.phonetic),
            },
            { key: 'h', header: pick('Harmony', 'Harmónia'), render: (r) => r.harmony ?? '—' },
            {
              key: 'ex',
              header: pick('Example', 'Példa'),
              render: (r) =>
                `${r.example} — ${lang === 'hu' ? r.exampleMeaningHu : r.exampleMeaning}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Consonants', 'Mássalhangzók')}</h2>
        <GrammarTable
          rows={CONSONANTS}
          columns={[
            { key: 'l', header: pick('Letter', 'Betű'), render: (r) => <strong>{r.letter}</strong> },
            { key: 'ipa', header: 'IPA', render: (r) => r.ipa },
            {
              key: 'ph',
              header: pick('Phonetic', 'Fonetika'),
              render: (r) => (lang === 'hu' ? r.phoneticHu : r.phonetic),
            },
            {
              key: 'ex',
              header: pick('Example', 'Példa'),
              render: (r) =>
                `${r.example} — ${lang === 'hu' ? r.exampleMeaningHu : r.exampleMeaning}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Full alphabet', 'Teljes ábécé')}</h2>
        <p className="mono" style={{ fontSize: '1.2rem', letterSpacing: '0.08em' }}>
          {ALPHABET.map((l) => l.letter).join(' · ')}
        </p>
        <ExampleList
          examples={[
            {
              id: 'pr-ex-1',
              aigramma: 'Aigramma',
              english: PRONUNCIATION_NOTES.spelledOut,
              hungarian: PRONUNCIATION_NOTES.spelledOut,
              gloss: PRONUNCIATION_NOTES.phonetic,
            },
          ]}
        />
      </section>

      <RememberBox>
        {pick(
          'No accented letters in Aigramma. Stress is always on the first syllable.',
          'Az Aigrammában nincsenek ékezetes betűk. A hangsúly mindig az első szótagon van.',
        )}
      </RememberBox>
    </article>
  );
}
