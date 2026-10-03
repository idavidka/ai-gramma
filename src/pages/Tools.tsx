import { RememberBox } from '../components/RememberBox/RememberBox';
import { VerbBuilder } from '../components/WordBuilder/VerbBuilder';
import { WordBuilder } from '../components/WordBuilder/WordBuilder';
import { useLanguage } from '../i18n/LanguageContext';

export function Tools() {
  const { pick } = useLanguage();

  return (
    <article>
      <h1>{pick('Interactive tools', 'Interaktív eszközök')}</h1>
      <p className="lead">
        {pick(
          'Not a quiz — visual grammar. Pick the pieces and watch the word build itself.',
          'Nem kvíz — vizuális nyelvtan. Válaszd ki az elemeket, és figyeld, hogyan épül a szó.',
        )}
      </p>

      <section className="section">
        <h2 className="section-title">
          {pick('Noun word builder', 'Névszói szóépítő')}
        </h2>
        <WordBuilder />
      </section>

      <section className="section">
        <h2 className="section-title">
          {pick('Verb conjugator', 'Igeragozó')}
        </h2>
        <VerbBuilder />
      </section>

      <RememberBox>
        {pick(
          'Generated forms come from the same morphology engine as the textbook examples.',
          'A generált alakok ugyanabból a morphológiai motorból jönnek, mint a tankönyv példái.',
        )}
      </RememberBox>
    </article>
  );
}
