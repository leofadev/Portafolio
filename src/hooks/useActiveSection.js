import { useEffect, useState } from 'react';

const readHash = () => window.location.hash.slice(1);

// Sección activa sincronizada con el hash de la URL (#experiencia, #proyectos...).
// Así funcionan los enlaces directos y los botones atrás/adelante del navegador.
export function useActiveSection(ids, fallback) {
  const resolve = () => (ids.includes(readHash()) ? readHash() : fallback);
  const [active, setActive] = useState(resolve);

  useEffect(() => {
    const onHashChange = () => setActive(resolve());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
