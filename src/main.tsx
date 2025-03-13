import { createRoot } from 'react-dom/client';
import { HeroesApp } from './HeroesApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<HeroesApp />);
