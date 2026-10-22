import { useEffect, useRef } from 'react';
import { createAnimatable } from 'animejs';
import { isTouchDevice, prefersReducedMotion } from '../lib/motion';

const SIZE = 520;

// Halo de luz que sigue al puntero con un leve retraso.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || isTouchDevice()) return;
    const el = ref.current;
    el.style.display = 'block';

    const glow = createAnimatable(el, { x: 900, y: 900, ease: 'out(3)' });
    const onMove = (e) => {
      glow.x(e.clientX - SIZE / 2);
      glow.y(e.clientY - SIZE / 2);
    };

    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      glow.revert();
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
