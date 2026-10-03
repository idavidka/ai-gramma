import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  APPROXIMATES,
  CARDINALS,
  FRACTIONS,
  NUMBER_EXAMPLES,
  NUMBER_RULES_HU,
  ORDINALS,
  TIME_WORDS,
} from '../data/aigramma/numbers';

export function Numbers() {
  return (
    <article>
      <h1>Számok és idő</h1>
      <p className="lead">{NUMBER_RULES_HU.composition}</p>

      <section className="section">
        <h2 className="section-title">Egyes és többes</h2>
        <p>{NUMBER_RULES_HU.singular}</p>
        <p>{NUMBER_RULES_HU.plural}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Tőszámok</h2>
        <GrammarTable
          rows={CARDINALS}
          columns={[
            { key: 'v', header: 'Érték', render: (r) => String(r.value) },
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            { key: 'h', header: 'Magyar', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Sorszámok</h2>
        <p>{NUMBER_RULES_HU.ordinal}</p>
        <GrammarTable
          rows={ORDINALS}
          columns={[
            { key: 'v', header: 'Érték', render: (r) => `${r.value}.` },
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            { key: 'h', header: 'Magyar', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Törtek és közelítő mennyiségek</h2>
        <p>{NUMBER_RULES_HU.fraction}</p>
        <GrammarTable
          rows={[...FRACTIONS, ...APPROXIMATES]}
          columns={[
            { key: 'v', header: 'Érték', render: (r) => String(r.value) },
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            { key: 'h', header: 'Magyar', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Dátum és idő</h2>
        <p>{NUMBER_RULES_HU.date}</p>
        <p>{NUMBER_RULES_HU.time}</p>
        <GrammarTable
          rows={TIME_WORDS}
          columns={[
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            { key: 'h', header: 'Magyar', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <ExampleList examples={NUMBER_EXAMPLES} />

      <RememberBox>
        A számrendszer összetételes: dek + uni = dekuni. Nincs rendhagyó
        „tizenegy” típusú alak.
      </RememberBox>
    </article>
  );
}
