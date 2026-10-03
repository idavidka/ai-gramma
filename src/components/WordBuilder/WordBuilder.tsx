import { useState } from 'react';
import { CASES } from '../../data/aigramma/cases';
import { PERSONS } from '../../data/aigramma/persons';
import type { CaseId, Person } from '../../types/aigramma';
import { buildNoun, nounBreakdown } from '../../utils/morphology';
import { describeHarmony } from '../../utils/vowelHarmony';

const STEM_OPTIONS = [
  { stem: 'tomo', label: 'tomo (ház)' },
  { stem: 'kere', label: 'kere (kert)' },
  { stem: 'kita', label: 'kita (könyv)' },
  { stem: 'amiko', label: 'amiko (barát)' },
  { stem: 'skole', label: 'skole (iskola)' },
  { stem: 'lüme', label: 'lüme (fény)' },
];

export function WordBuilder() {
  const [stem, setStem] = useState('tomo');
  const [caseId, setCaseId] = useState<CaseId>('inessive');
  const [plural, setPlural] = useState(true);
  const [person, setPerson] = useState<Person | ''>('1sg');

  const personValue = person || null;
  const result = buildNoun({
    stem,
    caseId,
    plural,
    person: personValue,
  });
  const parts = nounBreakdown({
    stem,
    caseId,
    plural,
    person: personValue,
  });

  return (
    <section className="builder">
      <h3>Szóépítő</h3>
      <p className="lead">
        TŐ + ESET + TÖBBES + BIRTOKOS — a sorrend soha nem változik. Harmónia:{' '}
        <strong>{describeHarmony(stem)}</strong>
      </p>
      <div className="builder-grid">
        <label>
          Tő
          <select value={stem} onChange={(e) => setStem(e.target.value)}>
            {STEM_OPTIONS.map((o) => (
              <option key={o.stem} value={o.stem}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Eset
          <select
            value={caseId}
            onChange={(e) => setCaseId(e.target.value as CaseId)}
          >
            {CASES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nameHu} ({c.suffix.back || '∅'}/{c.suffix.front || '∅'})
              </option>
            ))}
          </select>
        </label>
        <label>
          Többes szám
          <select
            value={plural ? 'yes' : 'no'}
            onChange={(e) => setPlural(e.target.value === 'yes')}
          >
            <option value="no">Egyes</option>
            <option value="yes">Többes (-ak/-ek)</option>
          </select>
        </label>
        <label>
          Birtokos
          <select
            value={person}
            onChange={(e) => setPerson(e.target.value as Person | '')}
          >
            <option value="">Nincs</option>
            {PERSONS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.labelHu} (-{p.possessiveSuffix.back}/-{p.possessiveSuffix.front})
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="builder-flow">
        {parts.map((part, index) => (
          <span key={part.label} style={{ display: 'contents' }}>
            {index > 0 ? <span className="arrow">→</span> : null}
            <span className="chip">
              <small>{part.label}</small> {part.value}
            </span>
          </span>
        ))}
        <span className="arrow">=</span>
      </div>
      <p className="final-word">{result}</p>
    </section>
  );
}
