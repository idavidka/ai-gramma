import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { PERSONS, PRONOUN_OPTIONALITY_HU } from '../data/aigramma/persons';
import {
  DEMONSTRATIVES,
  PERSONAL_PRONOUNS,
  POSSESSIVE_NOTE_HU,
  PRONOUN_EXAMPLES,
  RELATIVE_PRONOUNS,
} from '../data/aigramma/pronouns';

export function Pronouns() {
  return (
    <article>
      <h1>Névmások</h1>
      <p className="lead">{PRONOUN_OPTIONALITY_HU.title}</p>

      <section className="section">
        <h2 className="section-title">Személyes névmások</h2>
        <GrammarTable
          rows={PERSONAL_PRONOUNS}
          columns={[
            { key: 'p', header: 'Személy', render: (r) => r.person },
            { key: 'f', header: 'Alak', render: (r) => r.form },
            { key: 'm', header: 'Jelentés', render: (r) => r.meaningHu },
          ]}
        />
        <p style={{ whiteSpace: 'pre-wrap' }}>{PRONOUN_OPTIONALITY_HU.body}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Mutató névmások</h2>
        <GrammarTable
          rows={DEMONSTRATIVES}
          columns={[
            { key: 'f', header: 'Alak', render: (r) => r.form },
            { key: 'm', header: 'Jelentés', render: (r) => r.meaningHu },
            { key: 'n', header: 'Megjegyzés', render: (r) => r.note },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Birtoklás</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{POSSESSIVE_NOTE_HU}</p>
        <GrammarTable
          rows={PERSONS}
          columns={[
            { key: 'l', header: 'Személy', render: (r) => r.labelHu },
            {
              key: 's',
              header: 'Birtokos rag',
              render: (r) => `-${r.possessiveSuffix.back}/-${r.possessiveSuffix.front}`,
            },
            { key: 'ex', header: 'Példa', render: (r) => `tomo${r.possessiveSuffix.back}` },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Vonatkozó névmások</h2>
        <GrammarTable
          rows={RELATIVE_PRONOUNS}
          columns={[
            { key: 'f', header: 'Alak', render: (r) => r.form },
            { key: 'm', header: 'Jelentés', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <ExampleList examples={PRONOUN_EXAMPLES} />

      <RememberBox>
        Ha a személyrag egyértelmű, hagyd el a névmást. Tedd ki, ha hangsúlyozni
        akarod.
      </RememberBox>
    </article>
  );
}
