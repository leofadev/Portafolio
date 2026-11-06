import { useEffect, useRef } from 'react';
import { createAnimatable } from 'animejs';
import { SiJavascript, SiLaravel, SiMysql, SiPhp, SiReact, SiTailwindcss } from 'react-icons/si';
import { isTouchDevice, prefersReducedMotion } from '../lib/motion';

const faces = [
  { name: 'Laravel', Icon: SiLaravel },
  { name: 'PHP', Icon: SiPhp },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Tailwind', Icon: SiTailwindcss },
];

// Cubo 3D con el stack principal: gira solo y se inclina hacia el puntero.
export default function TechCube() {
  const tiltRef = useRef(null);

  // El giro, los anillos y la flotación son animaciones CSS (las mueve la GPU, sin costo para el hilo principal);
  // aquí solo se inclina el conjunto hacia el puntero
  useEffect(() => {
    if (prefersReducedMotion() || isTouchDevice()) return;
    const tilt = createAnimatable(tiltRef.current, { rotateX: 900, rotateY: 900, ease: 'out(3)' });
    const onMove = (e) => {
      tilt.rotateY((e.clientX / window.innerWidth - 0.5) * 40);
      tilt.rotateX((0.5 - e.clientY / window.innerHeight) * 40);
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      tilt.revert();
    };
  }, []);

  return (
    <div className="cube-stage" aria-hidden="true">
      <div className="cube-tilt" ref={tiltRef}>
        <div className="cube-rings">
          <span className="ring ring-1" />
          <span className="ring ring-2" />
        </div>
        <div className="cube">
          {faces.map(({ name, Icon }, i) => (
            <div key={name} className={`cube-face face-${i + 1}`}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
