import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { useTheme } from './hooks/useTheme';
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
  { id: 'inicio', label: 'Inicio', Component: Hero },
  { id: 'sobre-mi', label: 'Sobre mí', Component: About },
  { id: 'experiencia', label: 'Experiencia', Component: Experience },
  { id: 'habilidades', label: 'Habilidades', Component: Skills },
  { id: 'proyectos', label: 'Proyectos', Component: Projects },
  { id: 'contacto', label: 'Contacto', Component: Contact },
];

const ids = sections.map((s) => s.id);

// Evita que el enlace cambie el hash (y con ello la sección activa)
function focusMain(event) {
  event.preventDefault();
  document.getElementById('contenido').focus();
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
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
  }, [shown]);

  return (
    <div className="app">
      <Background pulseKey={shown} />
      <CursorGlow />
      <a href="#contenido" className="skip-link" onClick={focusMain}>
        Saltar al contenido
      </a>
      <Header
        links={sections.filter((s) => s.id !== 'inicio')}
        active={target}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="contenido" className="main" tabIndex={-1}>
        <div key={shown} ref={panelRef} className="panel container">
          <Component />
        </div>
      </main>
    </div>
  );
}
