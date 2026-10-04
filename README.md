# Aigramma

Interaktív digitális nyelvtankönyv az **Aigramma** mesterséges nyelvhez.

**Aigramma** `[A-I-G-R-A-M-M-A]` — magyarosan olvasandó.

## Stack

- React + Vite + TypeScript
- Nincs backend, adatbázis vagy autentikáció
- Minden nyelvi adat: `src/data/aigramma/`

## Parancsok

```bash
npm install
npm run dev
npm run build
```

## Nyelvtervezés

Egyetlen igazságforrás a grammatika és a szókincs. A UI csak megjeleníti.

Fő szabályok:

- 3 igeidő (múlt / jelen / jövő)
- 5 mód (kijelentő / kérdő / tagadó / óhajtó / feltételes)
- 6 személy
- 12 eset
- kötött toldaléksorrend: TŐ + ESET + TÖBBES + BIRTOKOS
- magánhangzó-harmónia (a toldalék változik, a tő nem)
- 1000 alapszó

## Struktúra

```
src/
  data/aigramma/   # nyelvspecifikáció
  utils/           # morphológia, keresés, harmónia
  components/      # tankönyv UI
  pages/           # fejezetek
```
