import { RememberBox } from '../components/RememberBox/RememberBox';
import { VerbBuilder } from '../components/WordBuilder/VerbBuilder';
import { WordBuilder } from '../components/WordBuilder/WordBuilder';

export function Tools() {
  return (
    <article>
      <h1>Interaktív eszközök</h1>
      <p className="lead">
        Nem kvíz — vizuális nyelvtan. Válaszd ki az elemeket, és figyeld, hogyan
        épül a szó.
      </p>

      <section className="section">
        <h2 className="section-title">Névszói szóépítő</h2>
        <WordBuilder />
      </section>

      <section className="section">
        <h2 className="section-title">Igeragozó</h2>
        <VerbBuilder />
      </section>

      <RememberBox>
        A generált alakok ugyanabból a morphológiai motorbol jönnek, mint a
        tankönyv példái.
      </RememberBox>
    </article>
  );
}
