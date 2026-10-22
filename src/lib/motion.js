import { animate, stagger } from 'animejs';

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;

// Entrada común de cada sección: los elementos con [data-anim] aparecen en 3D, uno tras otro.
export function introElements(selector = '[data-anim]', delay = 0) {
  return animate(selector, {
    opacity: { from: 0 },
    translateY: { from: 40 },
    rotateX: { from: -35 },
    duration: 900,
    delay: stagger(70, { start: delay }),
    ease: 'outExpo',
  });
}
