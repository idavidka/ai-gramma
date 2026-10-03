import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { VerbBuilder } from '../components/WordBuilder/VerbBuilder';
import { PERSONS } from '../data/aigramma/persons';
import { dualLabel } from '../data/aigramma/suffixes';
import { TENSES, TENSE_SCOPE_NOTE } from '../data/aigramma/tenses';
import { useLanguage } from '../i18n/LanguageContext';
import { buildVerb } from '../utils/morphology';

export function Verbs() {
  const { lang, pick } = useLanguage();

  const personRows = PERSONS.map((p) => ({
    label: lang === 'hu' ? p.labelHu : p.label,
    suffix: dualLabel(p.verbSuffix),
    present: buildVerb({ stem: 'kala', person: p.id }),
    past: buildVerb({ stem: 'kala', tense: 'past', person: p.id }),
    future: buildVerb({ stem: 'kala', tense: 'future', person: p.id }),
  }));

  return (
    <article>
      <h1>{pick('Verbs', 'Igék')}</h1>
      <p className="lead">
        {pick(
          'Exactly three tenses. No irregular verbs. Structure: STEM + TENSE + MODE + PERSON.',
          'Pontosan három igeidő. Nincs rendhagyó ige. Szerkezet: TŐ + IDŐ + MÓD + SZEMÉLY.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('Verb structure', 'Igeszerkezet')}</h2>
        <div className="rule-block">STEM + TENSE + MODE + PERSON</div>
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {pick(TENSE_SCOPE_NOTE.en, TENSE_SCOPE_NOTE.hu)}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Person endings', 'Személyragok')}</h2>
        <GrammarTable
          rows={personRows}
          columns={[
            { key: 'l', header: pick('Person', 'Személy'), render: (r) => r.label },
            { key: 's', header: pick('Suffix', 'Rag'), render: (r) => r.suffix },
            { key: 'pr', header: pick('Present', 'Jelen') + ' (kala)', render: (r) => r.present },
            { key: 'pa', header: pick('Past', 'Múlt'), render: (r) => r.past },
            { key: 'fu', header: pick('Future', 'Jövő'), render: (r) => r.future },
          ]}
        />
      </section>

      {TENSES.map((tense) => (
        <section className="section" key={tense.id}>
          <h2 className="section-title">
            {lang === 'hu' ? tense.nameHu : tense.name}
          </h2>
          <div className="rule-block">{dualLabel(tense.suffix)}</div>
          <p>{lang === 'hu' ? tense.explanationHu : tense.explanation}</p>
          <ExampleList examples={tense.examples} />
        </section>
      ))}

      <section className="section">
        <h2 className="section-title">{pick('Comparison', 'Összehasonlítás')}</h2>
        <ExampleList
          examples={[
            {
              id: 'v-cmp-1',
              aigramma: 'Kaladum. / Kalam. / Kalabum.',
              english: 'I walked. / I walk. / I will walk.',
              hungarian: 'Jártam. / Járók. / Járni fogok.',
            },
            {
              id: 'v-cmp-2',
              aigramma: 'Edadum. / Edam. / Edabum.',
              english: 'I ate. / I eat. / I will eat.',
              hungarian: 'Ettem. / Eszem. / Enni fogok.',
            },
            {
              id: 'v-cmp-3',
              aigramma: 'Vidadum. / Vidam. / Vidabum.',
              english: 'I saw. / I see. / I will see.',
              hungarian: 'Láttam. / Látok. / Látni fogok.',
            },
          ]}
        />
      </section>

      <VerbBuilder />

      <RememberBox>
        {pick(
          'No fourth tense. Use adverbs and cases for finer time (hiera, nuna, morga, -k, -m…).',
          'Nincs negyedik igeidő. A finomabb időt határozókkal és esetekkel fejezd ki (hiera, nuna, morga, -k, -m…).',
        )}
      </RememberBox>
    </article>
  );
}
