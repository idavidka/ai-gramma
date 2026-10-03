import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  BACK_VOWELS,
  COMMON_HARMONIC_PAIRS,
  FRONT_VOWELS,
  HARMONY_EXAMPLES,
  HARMONY_RULES,
  NEUTRAL_VOWELS,
} from '../data/aigramma/vowelHarmony';

export function VowelHarmony() {
  return (
    <article>
      <h1>{HARMONY_RULES.titleHu}</h1>
      <p className="lead">{HARMONY_RULES.principleHu}</p>

      <section className="section">
        <h2 className="section-title">Mi ez?</h2>
        <p>
          A magánhangzó-harmónia azt mondja meg, hogy egy toldaléknak a hátsó vagy
          az elülső változatát kell választanod. A tő betűi változatlanok maradnak.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">A szabály</h2>
        <div className="rule-block">
          utolsó nem semleges magánhangzó → toldalékváltozat
          <br />
          hátsó: {BACK_VOWELS.join(' ')} → A-típusú toldalék
          <br />
          elülső: {FRONT_VOWELS.join(' ')} → E-típusú toldalék
          <br />
          semleges: {NEUTRAL_VOWELS.join(' ')} (nem dönt; csak i/í → elülső)
        </div>
        <ol>
          {HARMONY_RULES.stepsHu.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">Toldalékpárok</h2>
        <GrammarTable
          rows={[...COMMON_HARMONIC_PAIRS]}
          columns={[
            { key: 'n', header: 'Szerep', render: (r) => r.name },
            { key: 'b', header: 'Hátsó', render: (r) => `-${r.suffix.back || '∅'}` },
            { key: 'f', header: 'Elülső', render: (r) => `-${r.suffix.front || '∅'}` },
          ]}
        />
        <GrammarTable
          rows={[...HARMONY_RULES.pairs]}
          columns={[
            { key: 'r', header: 'Szerep', render: (r) => r.role },
            { key: 'b', header: 'Hátsó', render: (r) => r.back },
            { key: 'f', header: 'Elülső', render: (r) => r.front },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Példák</h2>
        <ExampleList examples={HARMONY_EXAMPLES} />
      </section>

      <RememberBox>
        A harmónia a toldalékot választja meg — soha nem a tövet. Nincs
        mássalhangzó-hasonulás sem.
      </RememberBox>
    </article>
  );
}
