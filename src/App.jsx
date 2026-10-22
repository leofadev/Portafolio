import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
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
  const active = useActiveSection(ids, 'inicio');
  const { Component } = sections.find((s) => s.id === active);

  return (
    <div className="app">
      <a href="#contenido" className="skip-link" onClick={focusMain}>
        Saltar al contenido
      </a>
      <Header
        links={sections.filter((s) => s.id !== 'inicio')}
        active={active}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="contenido" className="main" tabIndex={-1}>
        {/* key: reinicia la animación de entrada al cambiar de sección */}
        <div key={active} className="panel container">
          <Component />
        </div>
      </main>
    </div>
  );
}
