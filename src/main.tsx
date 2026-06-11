import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './generated/tokens.css';
import './styles/dark-mode.css';
import './styles/animations.css';
import Landing from './pages/Landing';
import Showcase from './App';
import Foundations from './pages/foundations/Foundations';
import HowToUse from './pages/how-to-use/HowToUse';
import { useTheme } from './hooks/useTheme';

type View = 'landing' | 'showcase' | 'foundations' | 'how-to-use';

function Root() {
  const { theme, toggle } = useTheme();
  const [view, setView] = useState<View>('landing');

  if (view === 'showcase') {
    return <Showcase onBack={() => setView('landing')} onFoundations={() => setView('foundations')} onHowToUse={() => setView('how-to-use')} theme={theme} onToggleTheme={toggle} />;
  }
  if (view === 'foundations') {
    return <Foundations onBack={() => setView('landing')} onBrowse={() => setView('showcase')} onHowToUse={() => setView('how-to-use')} theme={theme} onToggleTheme={toggle} />;
  }
  if (view === 'how-to-use') {
    return <HowToUse onBack={() => setView('landing')} onBrowse={() => setView('showcase')} onFoundations={() => setView('foundations')} theme={theme} onToggleTheme={toggle} />;
  }

  return (
    <Landing
      theme={theme}
      onToggleTheme={toggle}
      onBrowse={() => setView('showcase')}
      onFoundations={() => setView('foundations')}
      onHowToUse={() => setView('how-to-use')}
    />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
