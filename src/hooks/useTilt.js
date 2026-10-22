import { useEffect, useRef } from 'react';
import { createAnimatable } from 'animejs';
import { isTouchDevice, prefersReducedMotion } from '../lib/motion';

const MAX_TILT = 7;
const FLAT_ZONE = 'a, button, [data-tilt-flat]';
const FLATTEN_MS = 120;

// Inclina la tarjeta en 3D siguiendo el puntero y mueve un brillo (--mx / --my).
// El puntero se escucha en el contenedor (que no gira) para que el área de hover sea estable,
// y sobre zonas interactivas (enlaces, botones o [data-tilt-flat]) la tarjeta vuelve a plano
// rápidamente para que los botones no se muevan al hacer clic.
export function useTilt() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card || prefersReducedMotion() || isTouchDevice()) return;

    const tilt = createAnimatable(card, { rotateX: 400, rotateY: 400, ease: 'out(3)' });
    const reset = (duration) => {
      tilt.rotateX(0, duration);
      tilt.rotateY(0, duration);
    };

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);

      if (e.target.closest(FLAT_ZONE)) {
        reset(FLATTEN_MS);
        return;
      }
      tilt.rotateY((px - 0.5) * MAX_TILT * 2);
      tilt.rotateX((0.5 - py) * MAX_TILT * 2);
    };

    wrap.addEventListener('pointermove', onMove);
    const onLeave = () => reset();
    wrap.addEventListener('pointerleave', onLeave);
    return () => {
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
      tilt.revert();
    };
  }, []);

  return { wrapRef, cardRef };
}
