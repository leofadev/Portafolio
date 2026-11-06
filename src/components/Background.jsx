import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { animate, stagger, utils } from 'animejs';
import { prefersReducedMotion } from '../lib/motion';

const CELL = 56;
const IDLE_RIPPLE_MS = 7000;
const RIPPLE_DELAY_MS = 600;

const measure = () => ({
  cols: Math.ceil(window.innerWidth / CELL),
  rows: Math.ceil(window.innerHeight / CELL),
});

// Fondo: rejilla de puntos que ondula (anime.js stagger grid) y orbes de color flotando.
export default function Background({ pulseKey }) {
  const [grid, setGrid] = useState(measure);
  const gridRef = useRef(null);

  const ripple = useCallback(
    (from) => {
      if (prefersReducedMotion() || !gridRef.current) return;
      animate(gridRef.current.children, {
        scale: [
          { to: 2.4, duration: 260, ease: 'outSine' },
          { to: 1, duration: 900, ease: 'inOutQuad' },
        ],
        opacity: [
          { to: 1, duration: 260 },
          { to: 0.35, duration: 900 },
        ],
        delay: stagger(38, { grid: [grid.cols, grid.rows], from }),
      });
    },
    [grid]
  );

  // Redimensionar
  useEffect(() => {
    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setGrid(measure()), 200);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Onda desde el punto donde se hace clic
  useEffect(() => {
    const onPointerDown = (e) => {
      const col = Math.min(grid.cols - 1, Math.floor(e.clientX / CELL));
      const row = Math.min(grid.rows - 1, Math.floor(e.clientY / CELL));
      ripple(row * grid.cols + col);
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [grid, ripple]);

  // Onda al cambiar de sección (con un leve retraso para no competir con la entrada del contenido)
  // y, en reposo, cada cierto tiempo
  useEffect(() => {
    const first = setTimeout(() => ripple('center'), RIPPLE_DELAY_MS);
    const id = setInterval(() => {
      if (!document.hidden) ripple(utils.random(0, grid.cols * grid.rows - 1));
    }, IDLE_RIPPLE_MS);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [pulseKey, grid, ripple]);

  return (
    <div className="background" aria-hidden="true">
      <div className="orbs">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <div
        className="dot-grid"
        ref={gridRef}
        style={{ gridTemplateColumns: `repeat(${grid.cols}, ${CELL}px)` }}
      >
        {Array.from({ length: grid.cols * grid.rows }, (_, i) => (
          <span key={i} className="dot" />
        ))}
      </div>
    </div>
  );
}

Background.propTypes = {
  pulseKey: PropTypes.string.isRequired,
};
