import type { GrammarExample } from '../../types/aigramma';
import { useLanguage } from '../../i18n/LanguageContext';

export function ExampleSentence({ example }: { example: GrammarExample }) {
  const { lang } = useLanguage();
  const translation = lang === 'hu' ? example.hungarian : example.english;

  return (
    <figure className="example">
      <div className="example-ai">{example.aigramma}</div>
      <figcaption className="example-hu">{translation}</figcaption>
      {example.gloss ? <div className="example-gloss">{example.gloss}</div> : null}
    </figure>
  );
}

export function ExampleList({ examples }: { examples: GrammarExample[] }) {
  return (
    <div>
      {examples.map((ex) => (
        <ExampleSentence key={ex.id} example={ex} />
      ))}
    </div>
  );
}
