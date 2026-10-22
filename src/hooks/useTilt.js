import { useEffect, useRef } from 'react';
import { createAnimatable } from 'animejs';
import { isTouchDevice, prefersReducedMotion } from '../lib/motion';

const MAX_TILT = 10;

// Inclina el elemento en 3D siguiendo el puntero y mueve un brillo (--mx / --my).
export function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || isTouchDevice()) return;

    const tilt = createAnimatable(el, { rotateX: 400, rotateY: 400, ease: 'out(3)' });

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      tilt.rotateY((px - 0.5) * MAX_TILT * 2);
      tilt.rotateX((0.5 - py) * MAX_TILT * 2);
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
    };
    const onLeave = () => {
      tilt.rotateX(0);
      tilt.rotateY(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      tilt.revert();
    };
  }, []);

  return ref;
}
