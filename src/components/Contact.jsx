import { useEffect, useRef } from 'react';
import { animate, createAnimatable, stagger } from 'animejs';
import { FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements, isTouchDevice, prefersReducedMotion } from '../lib/motion';
import CvButton from './CvButton';
import SocialLinks from './SocialLinks';

const TITLE = '¿Trabajamos juntos?';

export default function Contact() {
  const buttonRef = useRef(null);

  const root = useAnimeScope(() => {
    introElements();
    let wave;
    const intro = animate('.contact-title .char', {
      opacity: { from: 0 },
      translateY: { from: 60 },
      rotateY: { from: 90 },
      delay: stagger(35),
      duration: 900,
      ease: 'outExpo',
    });
    // Al terminar la entrada, una ola recorre el título cada pocos segundos
    intro.then(() => {
      wave = animate('.contact-title .char', {
        translateY: [{ to: -10 }, { to: 0 }],
        duration: 900,
        delay: stagger(60),
        loopDelay: 2200,
        loop: true,
        ease: 'inOutSine',
      });
    });
    return () => wave?.revert();
  });

  // Botón magnético: se desplaza levemente hacia el puntero
  useEffect(() => {
    const btn = buttonRef.current;
    if (prefersReducedMotion() || isTouchDevice()) return;
    const magnet = createAnimatable(btn, { x: 500, y: 500, ease: 'out(3)' });
    const onMove = (e) => {
      const r = btn.getBoundingClientRect();
      magnet.x((e.clientX - (r.left + r.width / 2)) * 0.35);
      magnet.y((e.clientY - (r.top + r.height / 2)) * 0.35);
    };
    const onLeave = () => {
      magnet.x(0);
      magnet.y(0);
    };
    btn.addEventListener('pointermove', onMove);
    btn.addEventListener('pointerleave', onLeave);
    return () => {
      btn.removeEventListener('pointermove', onMove);
      btn.removeEventListener('pointerleave', onLeave);
      magnet.revert();
    };
  }, []);

  return (
    <section className="contact" aria-labelledby="contacto-title" ref={root}>
      <p className="section-eyebrow" data-anim>05 · Contacto</p>
      <h2 id="contacto-title" className="contact-title" aria-label={TITLE}>
        {[...TITLE].map((char, i) => (
          <span key={i} className="char" aria-hidden="true">
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </h2>
      <p className="contact-text" data-anim>
        ¿Tienes un proyecto o una oportunidad laboral? Escríbeme y con gusto conversamos.
      </p>
      <div className="contact-actions" data-anim>
        <a ref={buttonRef} href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
          <FiMail aria-hidden="true" /> {profile.email}
        </a>
        <CvButton className="btn btn-ghost btn-lg" />
      </div>
      <div data-anim>
        <SocialLinks />
      </div>
      <p className="copyright" data-anim>© {new Date().getFullYear()} {profile.name}</p>
    </section>
  );
}
