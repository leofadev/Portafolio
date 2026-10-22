import { useLayoutEffect, useRef } from 'react';
import { createScope } from 'animejs';
import { prefersReducedMotion } from '../lib/motion';

// Ejecuta animaciones de anime.js limitadas al elemento raíz y las revierte al desmontar.
// Con "reducir movimiento" activo en el sistema, no se anima nada.
export function useAnimeScope(setup, deps = []) {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const scope = createScope({ root }).add(setup);
    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return root;
}
