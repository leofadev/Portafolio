import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { useTheme } from './hooks/useTheme';
import { useI18n } from './i18n/useI18n';
import { useActiveSection } from './hooks/useActiveSection';
import { prefersReducedMotion } from './lib/motion';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const sections = [
  { id: 'inicio', Component: Hero },
  { id: 'sobre-mi', Component: About },
  { id: 'experiencia', Component: Experience },
  { id: 'habilidades', Component: Skills },
  { id: 'proyectos', Component: Projects },
  { id: 'contacto', Component: Contact },
];

const ids = sections.map((s) => s.id);
const navLinks = ids.filter((id) => id !== 'inicio');

// Evita que el enlace cambie el hash (y con ello la sección activa)
function focusMain(event) {
  event.preventDefault();
  document.getElementById('contenido').focus();
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { t, lang } = useI18n();
  const target = useActiveSection(ids, 'inicio');
  const [shown, setShown] = useState(target);
  const panelRef = useRef(null);
  const { Component } = sections.find((s) => s.id === shown);

  // Salida 3D de la sección actual antes de mostrar la siguiente
  useEffect(() => {
    if (target === shown) return;
    if (prefersReducedMotion()) {
      setShown(target);
      return;
    }
    let cancelled = false;
    const exit = animate(panelRef.current, {
      opacity: 0,
      rotateX: 18,
      translateZ: -320,
      duration: 380,
      ease: 'inQuad',
    });
    exit.then(() => !cancelled && setShown(target));
    return () => {
      cancelled = true;
      exit.cancel();
    };
  }, [target, shown]);

  // Entrada 3D de la nueva sección
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const enter = animate(panelRef.current, {
      opacity: { from: 0 },
      rotateX: { from: -18 },
      translateZ: { from: -320 },
      duration: 700,
      ease: 'outExpo',
    });
    return () => enter.revert();
  }, [shown, lang]);

  return (
    <div className="app">
      <Background pulseKey={shown} />
      <CursorGlow />
      <a href="#contenido" className="skip-link" onClick={focusMain}>
        {t.skipLink}
      </a>
      <Header
        links={navLinks}
        active={target}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="contenido" className="main" tabIndex={-1}>
        {/* key: reinicia la animación de entrada al cambiar de sección o de idioma */}
        <div key={`${shown}-${lang}`} ref={panelRef} className="panel container">
          <Component />
        </div>
      </main>
    </div>
  );
}
