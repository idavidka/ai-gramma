import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  COMPOUND_EXAMPLES,
  COMPOUND_RULE,
  DERIVATIONAL_AFFIXES,
  WORD_FAMILY_EXAMPLE,
} from '../data/aigramma/wordFormation';
import { dualLabel } from '../data/aigramma/suffixes';
import { useLanguage } from '../i18n/LanguageContext';
import type { DualSuffix } from '../types/aigramma';

function formLabel(form: DualSuffix | string): string {
  return typeof form === 'string' ? form : dualLabel(form);
}

export function WordFormation() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Word formation', 'Szóképzés')}</h1>
      <p className="lead">
        {pick(
          'Related words share a predictable root with regular fictional affixes.',
          'A rokon szavak közös tőből épülnek szabályos, fiktív képzőkkel.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('Affixes', 'Képzők')}</h2>
        <GrammarTable
          rows={DERIVATIONAL_AFFIXES}
          columns={[
            {
              key: 'n',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
            {
              key: 'f',
              header: pick('Form', 'Alak'),
              render: (r) => formLabel(r.form),
            },
            { key: 't', header: pick('Type', 'Típus'), render: (r) => r.type },
            {
              key: 'p',
              header: pick('Produces', 'Eredmény'),
              render: (r) => r.produces,
            },
          ]}
        />
      </section>

      {DERIVATIONAL_AFFIXES.map((affix) => (
        <section className="section" key={affix.id}>
          <h2 className="section-title">
            {lang === 'hu' ? affix.meaningHu : affix.meaning}
          </h2>
          <ExampleList examples={affix.examples} />
        </section>
      ))}

      <section className="section">
        <h2 className="section-title">
          {pick('Word family: instru-', 'Szócsalád: instru-')}
        </h2>
        <ExampleList examples={WORD_FAMILY_EXAMPLE} />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Compounds', 'Összetételek')}</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {pick(COMPOUND_RULE.en, COMPOUND_RULE.hu)}
        </p>
        <ExampleList examples={COMPOUND_EXAMPLES} />
      </section>

      <RememberBox>
        {pick(
          'teach → teacher → teaching → student: instru → instruro → instrudo → instruto.',
          'tanít → tanár → tanítás → tanítvány: instru → instruro → instrudo → instruto.',
        )}
      </RememberBox>
    </article>
  );
}
