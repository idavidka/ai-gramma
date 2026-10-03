import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { LanguageProvider } from './i18n/LanguageContext';
import { Cases } from './pages/Cases';
import { Examples } from './pages/Examples';
import { Home } from './pages/Home';
import { Introduction } from './pages/Introduction';
import { Modes } from './pages/Modes';
import { Nouns } from './pages/Nouns';
import { Numbers } from './pages/Numbers';
import { Pronouns } from './pages/Pronouns';
import { Pronunciation } from './pages/Pronunciation';
import { Reference } from './pages/Reference';
import { Sentences } from './pages/Sentences';
import { Tools } from './pages/Tools';
import { Verbs } from './pages/Verbs';
import { Vocabulary } from './pages/Vocabulary';
import { VowelHarmony } from './pages/VowelHarmony';
import { WordDetail } from './pages/WordDetail';
import { WordFormation } from './pages/WordFormation';
import { WordStructure } from './pages/WordStructure';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="pronunciation" element={<Pronunciation />} />
            <Route path="vowel-harmony" element={<VowelHarmony />} />
            <Route path="word-structure" element={<WordStructure />} />
            <Route path="cases" element={<Cases />} />
            <Route path="nouns" element={<Nouns />} />
            <Route path="verbs" element={<Verbs />} />
            <Route path="modes" element={<Modes />} />
            <Route path="pronouns" element={<Pronouns />} />
            <Route path="sentences" element={<Sentences />} />
            <Route path="numbers" element={<Numbers />} />
            <Route path="word-formation" element={<WordFormation />} />
            <Route path="vocabulary" element={<Vocabulary />} />
            <Route path="vocabulary/:id" element={<WordDetail />} />
            <Route path="examples" element={<Examples />} />
            <Route path="tools" element={<Tools />} />
            <Route path="reference" element={<Reference />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
