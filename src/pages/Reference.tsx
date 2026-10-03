import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import { CASES } from '../data/aigramma/cases';
import { MODES } from '../data/aigramma/modes';
import { PERSONS } from '../data/aigramma/persons';
import { PERSONAL_PRONOUNS } from '../data/aigramma/pronouns';
import {
  CORE_SUFFIX_TABLE,
  NOUN_SUFFIX_ORDER,
  VERB_SUFFIX_ORDER,
} from '../data/aigramma/suffixes';
import { TENSES } from '../data/aigramma/tenses';
import {
  BACK_VOWELS,
  FRONT_VOWELS,
  NEUTRAL_VOWELS,
} from '../data/aigramma/vowelHarmony';

export function Reference() {
  return (
    <article>
      <h1>Referencia</h1>
      <p className="lead">
        Gyors áttekintés: esetek, igék, személyek, toldalékok, harmónia.
      </p>

      <section className="section">
        <h2 className="section-title">Toldaléksorrend</h2>
        <p>
          Névszó:{' '}
          {NOUN_SUFFIX_ORDER.map((s) => s.label).join(' → ')}
        </p>
        <p>
          Ige: {VERB_SUFFIX_ORDER.map((s) => s.label).join(' → ')}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Magánhangzó-harmónia</h2>
        <GrammarTable
          rows={[
            { k: 'Hátsó', v: BACK_VOWELS.join(' ') },
            { k: 'Elülső', v: FRONT_VOWELS.join(' ') },
            { k: 'Semleges', v: NEUTRAL_VOWELS.join(' ') },
          ]}
          columns={[
            { key: 'k', header: 'Osztály', render: (r) => r.k },
            { key: 'v', header: 'Magánhangzók', render: (r) => r.v },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Esettáblázat</h2>
        <GrammarTable
          rows={CASES}
          columns={[
            { key: 'n', header: 'Eset', render: (r) => r.nameHu },
            { key: 'm', header: 'Jelentés', render: (r) => r.meaningHu },
            {
              key: 's',
              header: 'Toldalék',
              render: (r) =>
                r.suffix.back || r.suffix.front
                  ? `-${r.suffix.back}/-${r.suffix.front}`
                  : '∅',
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Igeidők</h2>
        <GrammarTable
          rows={TENSES}
          columns={[
            { key: 'n', header: 'Idő', render: (r) => r.nameHu },
            {
              key: 's',
              header: 'Toldalék',
              render: (r) => `-${r.suffix.back || '∅'}/${r.suffix.front || '∅'}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Módok</h2>
        <GrammarTable
          rows={MODES}
          columns={[
            { key: 'n', header: 'Mód', render: (r) => r.nameHu },
            {
              key: 's',
              header: 'Toldalék',
              render: (r) => `-${r.suffix.back || '∅'}/${r.suffix.front || '∅'}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Személyek</h2>
        <GrammarTable
          rows={PERSONS}
          columns={[
            { key: 'l', header: 'Személy', render: (r) => r.label },
            { key: 'pr', header: 'Névmás', render: (r) => r.pronoun },
            {
              key: 'v',
              header: 'Igei rag',
              render: (r) => `-${r.verbSuffix.back || '∅'}`,
            },
            {
              key: 'p',
              header: 'Birtokos',
              render: (r) =>
                `-${r.possessiveSuffix.back}/-${r.possessiveSuffix.front}`,
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Névmások</h2>
        <GrammarTable
          rows={PERSONAL_PRONOUNS}
          columns={[
            { key: 'p', header: 'Személy', render: (r) => r.person },
            { key: 'f', header: 'Alak', render: (r) => r.form },
            { key: 'm', header: 'Jelentés', render: (r) => r.meaningHu },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Toldaléktár</h2>
        <GrammarTable
          rows={CORE_SUFFIX_TABLE}
          columns={[
            { key: 'c', header: 'Kategória', render: (r) => r.category },
            { key: 'n', header: 'Név', render: (r) => r.nameHu },
            {
              key: 's',
              header: 'Alak',
              render: (r) =>
                `-${r.suffix.back || '∅'}/${r.suffix.front || '∅'}`,
            },
          ]}
        />
      </section>

      <RememberBox>
        Egyetlen igazságforrás: a <code>src/data/aigramma/</code> fájlok. A UI
        csak megjeleníti a szabályokat.
      </RememberBox>
    </article>
  );
}
