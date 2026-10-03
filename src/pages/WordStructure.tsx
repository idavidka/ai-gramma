import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  NO_ASSIMILATION_HU,
  NO_STEM_CHANGE_HU,
  NOUN_SUFFIX_ORDER,
  PLURAL_RULE_HU,
  VERB_SUFFIX_ORDER,
} from '../data/aigramma/suffixes';

export function WordStructure() {
  return (
    <article>
      <h1>Szószerkezet</h1>
      <p className="lead">
        Az Aigramma szavai átlátható építőkockákból állnak. A sorrend kötött.
      </p>

      <section className="section">
        <h2 className="section-title">Névszói sorrend</h2>
        <div className="builder-flow" style={{ marginBottom: '1rem' }}>
          {NOUN_SUFFIX_ORDER.map((slot, i) => (
            <span key={slot.slot} style={{ display: 'contents' }}>
              {i > 0 ? <span className="arrow">↓</span> : null}
              <span className="chip">
                <small>{slot.labelEn}</small> {slot.label}
              </span>
            </span>
          ))}
        </div>
        <div className="rule-block">
          STEM + CASE + PLURAL + POSSESSIVE
          <br />
          tomo → tomoban → tomobanak → tomobanakom
        </div>
        <p style={{ whiteSpace: 'pre-wrap' }}>{PLURAL_RULE_HU}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Igei sorrend</h2>
        <div className="builder-flow" style={{ marginBottom: '1rem' }}>
          {VERB_SUFFIX_ORDER.map((slot, i) => (
            <span key={slot.slot} style={{ display: 'contents' }}>
              {i > 0 ? <span className="arrow">↓</span> : null}
              <span className="chip">
                <small>{slot.labelEn}</small> {slot.label}
              </span>
            </span>
          ))}
        </div>
        <div className="rule-block">
          STEM + TENSE + MODE + PERSON
          <br />
          kala → kalada → kaladako → kaladakom
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Nincs tőváltakozás</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{NO_STEM_CHANGE_HU}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Nincs hasonulás</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{NO_ASSIMILATION_HU}</p>
      </section>

      <WordBuilder />

      <RememberBox>
        A toldalékok mindig ugyanabban a sorrendben jelennek meg. Ha felismered a
        sorrendet, minden új szó átláthatóvá válik.
      </RememberBox>
    </article>
  );
}
