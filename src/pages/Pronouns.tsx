import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { PERSONS, PRONOUN_OPTIONALITY } from '../data/aigramma/persons';
import {
  DEMONSTRATIVES,
  PERSONAL_PRONOUNS,
  POSSESSIVE_NOTE,
  PRONOUN_EXAMPLES,
  RELATIVE_PRONOUNS,
} from '../data/aigramma/pronouns';
import { dualLabel } from '../data/aigramma/suffixes';
import { useLanguage } from '../i18n/LanguageContext';
import { buildNoun } from '../utils/morphology';

export function Pronouns() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Pronouns', 'Névmások')}</h1>
      <p className="lead">
        {pick(PRONOUN_OPTIONALITY.title, PRONOUN_OPTIONALITY.titleHu)}
      </p>

      <section className="section">
        <h2 className="section-title">
          {pick('Personal pronouns', 'Személyes névmások')}
        </h2>
        <GrammarTable
          rows={PERSONAL_PRONOUNS}
          columns={[
            { key: 'p', header: pick('Person', 'Személy'), render: (r) => r.person },
            { key: 'f', header: pick('Form', 'Alak'), render: (r) => r.form },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {pick(PRONOUN_OPTIONALITY.body, PRONOUN_OPTIONALITY.bodyHu)}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Demonstratives', 'Mutató névmások')}
        </h2>
        <GrammarTable
          rows={DEMONSTRATIVES}
          columns={[
            { key: 'f', header: pick('Form', 'Alak'), render: (r) => r.form },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
            { key: 'n', header: pick('Note', 'Megjegyzés'), render: (r) => r.note },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Possession', 'Birtoklás')}</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {pick(POSSESSIVE_NOTE.en, POSSESSIVE_NOTE.hu)}
        </p>
        <GrammarTable
          rows={PERSONS}
          columns={[
            {
              key: 'l',
              header: pick('Person', 'Személy'),
              render: (r) => (lang === 'hu' ? r.labelHu : r.label),
            },
            {
              key: 's',
              header: pick('Possessive', 'Birtokos rag'),
              render: (r) => dualLabel(r.possessiveSuffix),
            },
            {
              key: 'ex',
              header: pick('Example', 'Példa'),
              render: (r) => buildNoun({ stem: 'tomo', person: r.id }),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Relative pronouns', 'Vonatkozó névmások')}
        </h2>
        <GrammarTable
          rows={RELATIVE_PRONOUNS}
          columns={[
            { key: 'f', header: pick('Form', 'Alak'), render: (r) => r.form },
            {
              key: 'm',
              header: pick('Meaning', 'Jelentés'),
              render: (r) => (lang === 'hu' ? r.meaningHu : r.meaning),
            },
          ]}
        />
      </section>

      <ExampleList examples={PRONOUN_EXAMPLES} />

      <RememberBox>
        {pick(
          'If the person ending is clear, drop the pronoun. Add it for emphasis.',
          'Ha a személyrag egyértelmű, hagyd el a névmást. Tedd ki, ha hangsúlyozni akarod.',
        )}
      </RememberBox>
    </article>
  );
}
