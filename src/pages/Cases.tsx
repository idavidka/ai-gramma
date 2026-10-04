import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { CASE_ORDER_NOTE, CASES } from '../data/aigramma/cases';
import { dualLabel } from '../data/aigramma/suffixes';
import { useLanguage } from '../i18n/LanguageContext';

export function Cases() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Cases', 'Esetek')}</h1>
      <p className="lead">
        {pick(
          'With only three tenses, finer relations often use cases — regular, fictional, dual-shaped endings.',
          'Mivel csak három igeidő van, a pontosabb viszonyokat gyakran az esetek fejezik ki — szabályos, fiktív, kettős alakú ragokkal.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('Overview', 'Áttekintés')}</h2>
        <GrammarTable
          rows={CASES}
          columns={[
            {
              key: 'n',
              header: pick('Case', 'Eset'),
              render: (r) => (lang === 'hu' ? r.nameHu : r.name),
            },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
            {
              key: 's',
              header: pick('Suffix shapes', 'Toldalékalakok'),
              render: (r) => dualLabel(r.suffix),
            },
            {
              key: 'u',
              header: pick('Usage', 'Használat'),
              render: (r) => (lang === 'hu' ? r.usageHu : r.usage),
            },
          ]}
        />
        <p>{pick(CASE_ORDER_NOTE.en, CASE_ORDER_NOTE.hu)}</p>
      </section>

      {CASES.map((c) => (
        <section className="section" key={c.id} id={c.id}>
          <h2 className="section-title">{lang === 'hu' ? c.nameHu : c.name}</h2>
          <p>
            <strong>{pick('Meaning', 'Jelentés')}:</strong>{' '}
            {lang === 'hu' ? c.meaningHu : c.meaning}
          </p>
          <div className="rule-block">{dualLabel(c.suffix)}</div>
          <p>{lang === 'hu' ? c.usageHu : c.usage}</p>
          <ExampleList examples={c.examples} />
        </section>
      ))}

      <WordBuilder />

      <RememberBox>
        {pick(
          'Twelve cases, each with exactly the dual-shape pattern. No irregular case endings.',
          'Tizenkét eset, mindegyik a kettős alak mintáját követi. Nincs rendhagyó esetvégződés.',
        )}
      </RememberBox>
    </article>
  );
}
