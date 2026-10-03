import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  APPROXIMATES,
  CARDINALS,
  FRACTIONS,
  NUMBER_EXAMPLES,
  NUMBER_RULES,
  ORDINALS,
  TIME_WORDS,
} from '../data/aigramma/numbers';
import { useLanguage } from '../i18n/LanguageContext';

export function Numbers() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Numbers & time', 'Számok és idő')}</h1>
      <p className="lead">
        {pick(NUMBER_RULES.composition.en, NUMBER_RULES.composition.hu)}
      </p>

      <section className="section">
        <h2 className="section-title">
          {pick('Singular and plural', 'Egyes és többes')}
        </h2>
        <p>{pick(NUMBER_RULES.singular.en, NUMBER_RULES.singular.hu)}</p>
        <p>{pick(NUMBER_RULES.plural.en, NUMBER_RULES.plural.hu)}</p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Cardinals', 'Tőszámok')}</h2>
        <GrammarTable
          rows={CARDINALS}
          columns={[
            { key: 'v', header: pick('Value', 'Érték'), render: (r) => String(r.value) },
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Ordinals', 'Sorszámok')}</h2>
        <p>{pick(NUMBER_RULES.ordinal.en, NUMBER_RULES.ordinal.hu)}</p>
        <GrammarTable
          rows={ORDINALS}
          columns={[
            { key: 'v', header: pick('Value', 'Érték'), render: (r) => `${r.value}.` },
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Fractions & approximates', 'Törtek és ellenőrző mennyiségek')}
        </h2>
        <p>{pick(NUMBER_RULES.fraction.en, NUMBER_RULES.fraction.hu)}</p>
        <GrammarTable
          rows={[...FRACTIONS, ...APPROXIMATES]}
          columns={[
            { key: 'v', header: pick('Value', 'Érték'), render: (r) => String(r.value) },
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Date and time', 'Dátum és idő')}</h2>
        <p>{pick(NUMBER_RULES.date.en, NUMBER_RULES.date.hu)}</p>
        <p>{pick(NUMBER_RULES.time.en, NUMBER_RULES.time.hu)}</p>
        <GrammarTable
          rows={TIME_WORDS}
          columns={[
            { key: 'w', header: 'Aigramma', render: (r) => r.word },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
      </section>

      <ExampleList examples={NUMBER_EXAMPLES} />

      <RememberBox>
        {pick(
          'The number system is compositional: dek + uni = dekuni. No irregular teens.',
          'A számrendszer összetételes: dek + uni = dekuni. Nincs rendhagyó „tizenegy” típus.',
        )}
      </RememberBox>
    </article>
  );
}
