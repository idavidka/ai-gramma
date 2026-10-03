import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { VerbBuilder } from '../components/WordBuilder/VerbBuilder';
import { MODE_VS_OPTATIVE_NOTE_HU, MODES } from '../data/aigramma/modes';
import { INTERROGATIVE_WORDS } from '../data/aigramma/pronouns';

export function Modes() {
  return (
    <article>
      <h1>Módok</h1>
      <p className="lead">
        Pontosan öt mód: kijelentő, kérdő, tagadó, óhajtó, feltételes.
      </p>

      <GrammarTable
        rows={MODES}
        columns={[
          { key: 'n', header: 'Mód', render: (r) => r.nameHu },
          {
            key: 's',
            header: 'Toldalék',
            render: (r) => `-${r.suffix.back || '∅'}/${r.suffix.front || '∅'}`,
          },
          { key: 'f', header: 'Képzés', render: (r) => r.formationHu },
        ]}
      />

      {MODES.map((m) => (
        <section className="section" key={m.id} id={m.id}>
          <h2 className="section-title">{m.nameHu}</h2>
          <p>
            <strong>Mi ez?</strong> {m.explanationHu}
          </p>
          <div className="rule-block">{m.formationHu}</div>
          <ExampleList examples={m.examples} />
        </section>
      ))}

      <section className="section">
        <h2 className="section-title">Kérdőszavak</h2>
        <GrammarTable
          rows={INTERROGATIVE_WORDS}
          columns={[
            { key: 'f', header: 'Aigramma', render: (r) => r.form },
            { key: 'h', header: 'Magyar', render: (r) => r.meaningHu },
            { key: 'e', header: 'English', render: (r) => r.meaningEn },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Óhajtó vs. feltételes</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{MODE_VS_OPTATIVE_NOTE_HU}</p>
      </section>

      <VerbBuilder />

      <RememberBox>
        Egyszerű tagadás: módjel -la/-le. Más mód tagadásához tedd az{' '}
        <em>ala</em> partikulát az ige elé.
      </RememberBox>
    </article>
  );
}
