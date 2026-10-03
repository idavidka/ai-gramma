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

export function Pronunciation() {
  return (
    <article>
      <h1>Kiejtés és ábécé</h1>
      <p className="lead">{PRONUNCIATION_NOTES.noteHu}</p>

      <section className="section">
        <h2 className="section-title">Alapelvek</h2>
        <ul>
          {PHONOLOGY.principlesHu.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p>{PRONUNCIATION_NOTES.stressHu}</p>
        <p>{PHONOLOGY.orthographyHu}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Magánhangzók</h2>
        <GrammarTable
          rows={VOWELS}
          columns={[
            { key: 'l', header: 'Betű', render: (r) => <strong>{r.letter}</strong> },
            { key: 'ipa', header: 'IPA', render: (r) => r.ipa },
            { key: 'h', header: 'Harmónia', render: (r) => r.harmony ?? '—' },
            {
              key: 'ex',
              header: 'Példa',
              render: (r) => `${r.example} — ${r.exampleMeaningHu}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Mássalhangzók</h2>
        <GrammarTable
          rows={CONSONANTS}
          columns={[
            { key: 'l', header: 'Betű', render: (r) => <strong>{r.letter}</strong> },
            { key: 'ipa', header: 'IPA', render: (r) => r.ipa },
            {
              key: 'ex',
              header: 'Példa',
              render: (r) => `${r.example} — ${r.exampleMeaningHu}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Teljes ábécé</h2>
        <p className="mono" style={{ fontSize: '1.2rem', letterSpacing: '0.08em' }}>
          {ALPHABET.map((l) => l.letter).join(' · ')}
        </p>
        <ExampleList
          examples={[
            {
              id: 'pr-ex-1',
              aigramma: 'Aigramma',
              hungarian: PRONUNCIATION_NOTES.spelledOut,
              gloss: PRONUNCIATION_NOTES.phonetic,
            },
          ]}
        />
      </section>

      <RememberBox>
        A hangsúly mindig az első szótagon van. A toldalékok nem mozgatják el.
      </RememberBox>
    </article>
  );
}
