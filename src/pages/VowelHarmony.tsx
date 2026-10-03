import { ExampleList } from '../components/ExampleSentence/ExampleSentence';
import { GrammarTable } from '../components/GrammarTable/GrammarTable';
import { RememberBox } from '../components/RememberBox/RememberBox';
import {
  COMMON_DUAL_PAIRS,
  HARMONY_EXAMPLES,
  HARMONY_RULES,
  dualSuffixDisplay,
} from '../data/aigramma/vowelHarmony';
import { BACK_VOWELS, FRONT_VOWELS } from '../utils/vowelHarmony';
import { useLanguage } from '../i18n/LanguageContext';

export function VowelHarmony() {
  const { lang, pick } = useLanguage();

  return (
    <article>
      <h1>
        {pick('Vowel harmony & dual suffixes', 'Magánhangzó-harmónia és kettős ragok')}
      </h1>
      <p className="lead">
        {pick(HARMONY_RULES.principle, HARMONY_RULES.principleHu)}
      </p>

      <section className="section">
        <h2 className="section-title">{pick('The dual-suffix rule', 'A kettős toldalék szabálya')}</h2>
        <p>{pick(HARMONY_RULES.dualRule, HARMONY_RULES.dualRuleHu)}</p>
        <div className="rule-block">
          vowel-final base → consonant-initial suffix (e.g. tomo + n → tomon)
          <br />
          consonant-final base → vowel-initial suffix (e.g. hop + un → hopun, kiv + in → kivin)
          <br />
          back vowels: {BACK_VOWELS.join(' ')} → u-series
          <br />
          front vowels: {FRONT_VOWELS.join(' ')} → i-series
        </div>
        <ol>
          {(lang === 'hu' ? HARMONY_RULES.stepsHu : HARMONY_RULES.steps).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Suffix pairs', 'Toldalékpárok')}</h2>
        <GrammarTable
          rows={COMMON_DUAL_PAIRS}
          columns={[
            {
              key: 'n',
              header: pick('Role', 'Szerep'),
              render: (r) => (lang === 'hu' ? r.nameHu : r.name),
            },
            {
              key: 's',
              header: pick('Shapes', 'Alakok'),
              render: (r) => dualSuffixDisplay(r.suffix),
            },
          ]}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{pick('Examples', 'Példák')}</h2>
        <ExampleList examples={HARMONY_EXAMPLES} />
      </section>

      <RememberBox>
        {pick(
          'Suffixes are fully fictional and regular. Harmony never changes the stem — only the vowel inside the V-initial suffix shape.',
          'A toldalékok teljesen fiktívek és szabályosak. A harmónia soha nem a tövet változtatja — csak a magánhangzóval kezdődő alak belsejét.',
        )}
      </RememberBox>
    </article>
  );
}
