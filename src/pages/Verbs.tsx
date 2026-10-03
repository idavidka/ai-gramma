import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { VerbBuilder } from '../components/WordBuilder/VerbBuilder';
import { PERSONS } from '../data/aigramma/persons';
import { TENSES, TENSE_SCOPE_NOTE_HU } from '../data/aigramma/tenses';
import { buildVerb } from '../utils/morphology';

const personRows = PERSONS.map((p) => ({
  id: p.id,
  label: p.labelHu,
  suffix: `-${p.verbSuffix.back || '∅'}/${p.verbSuffix.front || '∅'}`,
  present: buildVerb({ stem: 'kala', person: p.id }),
  past: buildVerb({ stem: 'kala', tense: 'past', person: p.id }),
  future: buildVerb({ stem: 'kala', tense: 'future', person: p.id }),
}));

export function Verbs() {
  return (
    <article>
      <h1>Igék</h1>
      <p className="lead">
        Pontosan három igeidő. Nincs rendhagyó ige. A szerkezet: TŐ + IDŐ + MÓD +
        SZEMÉLY.
      </p>

      <section className="section">
        <h2 className="section-title">Igeszerkezet</h2>
        <div className="rule-block">STEM + TENSE + MODE + PERSON</div>
        <p style={{ whiteSpace: 'pre-wrap' }}>{TENSE_SCOPE_NOTE_HU}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Személyragok</h2>
        <GrammarTable
          rows={personRows}
          columns={[
            { key: 'l', header: 'Személy', render: (r) => r.label },
            { key: 's', header: 'Rag', render: (r) => r.suffix },
            { key: 'pr', header: 'Jelen (kala)', render: (r) => r.present },
            { key: 'pa', header: 'Múlt', render: (r) => r.past },
            { key: 'fu', header: 'Jövő', render: (r) => r.future },
          ]}
        />
      </section>

      {TENSES.map((t) => (
        <section className="section" key={t.id}>
          <h2 className="section-title">{t.nameHu}</h2>
          <div className="rule-block">
            toldalék: -{t.suffix.back || '∅'} / -{t.suffix.front || '∅'}
          </div>
          <p>{t.explanationHu}</p>
          <ExampleList examples={t.examples} />
        </section>
      ))}

      <section className="section">
        <h2 className="section-title">Összehasonlító példa</h2>
        <ExampleList
          examples={[
            {
              id: 'v-cmp-1',
              aigramma: 'Kaladam. / Kalam. / Kalavam.',
              hungarian: 'Jártam. / Járók. / Járni fogok.',
            },
            {
              id: 'v-cmp-2',
              aigramma: 'Edadam. / Edam. / Edavam.',
              hungarian: 'Ettem. / Eszem. / Enni fogok.',
            },
            {
              id: 'v-cmp-3',
              aigramma: 'Vidadam. / Vidam. / Vidavam.',
              hungarian: 'Láttam. / Látok. / Látni fogok.',
            },
          ]}
        />
      </section>

      <VerbBuilder />

      <RememberBox>
        Nincs negyedik igeidő. A finomabb időt határozókkal és esetekkel fejezd ki
        (hiera, nuna, morga, -ban, -tol…).
      </RememberBox>
    </article>
  );
}
