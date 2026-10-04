import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  DUAL_SUFFIX_RULE,
  NO_ASSIMILATION,
  NO_STEM_CHANGE,
  NOUN_SUFFIX_ORDER,
  VERB_SUFFIX_ORDER,
} from '../data/aigramma/suffixes';
import { useLanguage } from '../i18n/LanguageContext';

export function WordStructure() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Word structure', 'Szószerkezet')}</h1>
      <p className="lead">
        {pick(
          'Aigramma words are transparent building blocks. Order is fixed; each suffix has two shapes.',
          'Az Aigramma szavai átlátható építőkockákból állnak. A sorrend kötött; minden toldaléknak két alakja van.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('Noun order', 'Névszói sorrend')}</h2>
        <div className="builder-flow" style={{ marginBottom: '1rem' }}>
          {NOUN_SUFFIX_ORDER.map((slot, i) => (
            <span key={slot.slot} style={{ display: 'contents' }}>
              {i > 0 ? <span className="arrow">↓</span> : null}
              <span className="chip">
                <small>{slot.label}</small> {lang === 'hu' ? slot.labelHu : slot.label}
              </span>
            </span>
          ))}
        </div>
        <div className="rule-block">
          STEM + CASE + PLURAL + POSSESSIVE
          <br />
          tomo → tomok → tomokun → tomokunum
        </div>
        <p>{pick(DUAL_SUFFIX_RULE.en, DUAL_SUFFIX_RULE.hu)}</p>
        <p>
          {pick(
            'Plural: -n after vowels; -un/-in after consonants. tomo→tomon, kiv→kivin, hop→hopun.',
            'Többes: magánhangzó után -n; mássalhangzó után -un/-in. tomo→tomon, kiv→kivin, hop→hopun.',
          )}
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Verb order', 'Igei sorrend')}</h2>
        <div className="builder-flow" style={{ marginBottom: '1rem' }}>
          {VERB_SUFFIX_ORDER.map((slot, i) => (
            <span key={slot.slot} style={{ display: 'contents' }}>
              {i > 0 ? <span className="arrow">↓</span> : null}
              <span className="chip">
                <small>{slot.label}</small> {lang === 'hu' ? slot.labelHu : slot.label}
              </span>
            </span>
          ))}
        </div>
        <div className="rule-block">
          STEM + TENSE + MODE + PERSON
          <br />
          kala → kalad → kaladuh → kaladuhum
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('No stem changes', 'Nincs tőváltakozás')}</h2>
        <p>{pick(NO_STEM_CHANGE.en, NO_STEM_CHANGE.hu)}</p>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('No assimilation', 'Nincs hasonulás')}</h2>
        <p>{pick(NO_ASSIMILATION.en, NO_ASSIMILATION.hu)}</p>
      </section>

      <WordBuilder />

      <RememberBox>
        {pick(
          'Suffixes always follow the same order. If you know the order and the dual shapes, every new word is readable.',
          'A toldalékok mindig ugyanabban a sorrendben jelennek meg. Ha ismered a sorrendet és a kettős alakokat, minden új szó olvasható.',
        )}
      </RememberBox>
    </article>
  );
}
