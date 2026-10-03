import type { GrammarExample } from '../../types/aigramma';

export function ExampleSentence({ example }: { example: GrammarExample }) {
  return (
    <figure className="example">
      <div className="example-ai">{example.aigramma}</div>
      <figcaption className="example-hu">{example.hungarian}</figcaption>
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
