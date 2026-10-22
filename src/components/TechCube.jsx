import { useEffect, useRef } from 'react';
import { animate, createAnimatable } from 'animejs';
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
  const stageRef = useRef(null);
  const cubeRef = useRef(null);
  const ringsRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const spin = animate(cubeRef.current, {
      rotateY: { from: 0, to: 360 },
      rotateX: { from: -25, to: 335 },
      duration: 24000,
      ease: 'linear',
      loop: true,
    });
    const rings = animate(ringsRef.current.children, {
      rotateZ: { from: 0, to: 360 },
      duration: (_, i) => 14000 + i * 6000,
      ease: 'linear',
      loop: true,
      reversed: (_, i) => i % 2 === 1,
    });
    const float = animate(stageRef.current, {
      translateY: { from: -10, to: 10 },
      duration: 3200,
      ease: 'inOutSine',
      loop: true,
      alternate: true,
    });

    let tilt;
    let onMove;
    if (!isTouchDevice()) {
      tilt = createAnimatable(ringsRef.current.parentElement, {
        rotateX: 900,
        rotateY: 900,
        ease: 'out(3)',
      });
      onMove = (e) => {
        tilt.rotateY((e.clientX / window.innerWidth - 0.5) * 40);
        tilt.rotateX((0.5 - e.clientY / window.innerHeight) * 40);
      };
      window.addEventListener('pointermove', onMove);
    }

    return () => {
      [spin, rings, float].forEach((a) => a.revert());
      if (tilt) {
        window.removeEventListener('pointermove', onMove);
        tilt.revert();
      }
    };
  }, []);

  return (
    <div className="cube-stage" ref={stageRef} aria-hidden="true">
      <div className="cube-tilt">
        <div className="cube-rings" ref={ringsRef}>
          <span className="ring ring-1" />
          <span className="ring ring-2" />
        </div>
        <div className="cube" ref={cubeRef}>
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
