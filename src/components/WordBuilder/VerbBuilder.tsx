import { useState } from 'react';
import { MODES } from '../../data/aigramma/modes';
import { PERSONS } from '../../data/aigramma/persons';
import { TENSES } from '../../data/aigramma/tenses';
import type { Mode, Person, Tense } from '../../types/aigramma';
import { buildVerb, verbBreakdown } from '../../utils/morphology';
import { describeHarmony } from '../../utils/vowelHarmony';

const STEMS = [
  { stem: 'kala', label: 'kala (jár) — hátsó' },
  { stem: 'eda', label: 'eda (eszik) — hátsó' },
  { stem: 'vida', label: 'vida (lát) — hátsó' },
  { stem: 'labora', label: 'labora (dolgozik) — hátsó' },
  { stem: 'möte', label: 'möte (találkozik) — elülső' },
  { stem: 'sente', label: 'sente (érez) — elülső' },
];

export function VerbBuilder() {
  const [stem, setStem] = useState('kala');
  const [tense, setTense] = useState<Tense>('present');
  const [mode, setMode] = useState<Mode>('indicative');
  const [person, setPerson] = useState<Person>('1sg');

  const result = buildVerb({ stem, tense, mode, person });
  const parts = verbBreakdown({ stem, tense, mode, person });

  return (
    <section className="builder">
      <h3>Igeragozó</h3>
      <p className="lead">
        TŐ + IDŐ + MÓD + SZEMÉLY. Harmónia: <strong>{describeHarmony(stem)}</strong>
      </p>
      <div className="builder-grid">
        <label>
          Igei tő
          <select value={stem} onChange={(e) => setStem(e.target.value)}>
            {STEMS.map((s) => (
              <option key={s.stem} value={s.stem}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Idő
          <select
            value={tense}
            onChange={(e) => setTense(e.target.value as Tense)}
          >
            {TENSES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nameHu}
              </option>
            ))}
          </select>
        </label>
        <label>
          Mód
          <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
            {MODES.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nameHu}
              </option>
            ))}
          </select>
        </label>
        <label>
          Személy
          <select
            value={person}
            onChange={(e) => setPerson(e.target.value as Person)}
          >
            {PERSONS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label} — {p.labelHu}
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
