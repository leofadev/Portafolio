import { animate, scrambleText, stagger } from 'animejs';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/profile';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements } from '../lib/motion';
import CvButton from './CvButton';
import SocialLinks from './SocialLinks';
import TechCube from './TechCube';

export default function Hero() {
  const root = useAnimeScope(() => {
    // Nombre: cada letra cae girando en 3D
    animate('.char', {
      opacity: { from: 0 },
      translateY: { from: 80 },
      rotateX: { from: 90 },
      duration: 1100,
      delay: stagger(45, { start: 150 }),
      ease: 'outExpo',
    });
    // Rol: texto que se "descifra"
    animate('.hero-role', {
      opacity: { from: 0, duration: 200, delay: 700 },
      innerHTML: scrambleText({ chars: 'A-Z!%#_', cursor: true, override: '', delay: 700 }),
    });
    introElements('[data-anim]', 500);

    // Rebote de cada letra al pasar el puntero
    const bounce = (e) =>
      animate(e.currentTarget, {
        translateY: [
          { to: -18, duration: 180, ease: 'outQuad' },
          { to: 0, duration: 700, ease: 'outBounce' },
        ],
        rotateZ: [{ to: 12, duration: 180 }, { to: 0, duration: 500 }],
      });
    const chars = root.current.querySelectorAll('.char');
    chars.forEach((char) => char.addEventListener('pointerenter', bounce));
    return () => chars.forEach((char) => char.removeEventListener('pointerenter', bounce));
  });

  return (
    <section className="hero" aria-label="Inicio" ref={root}>
      <div className="hero-content">
        <p className="eyebrow" data-anim>
          <span className="pulse-dot" /> Hola, soy
        </p>
        <h1 className="hero-title" aria-label={profile.name}>
          {profile.name.split(' ').map((word) => (
            <span key={word} className="word" aria-hidden="true">
              {[...word].map((char, i) => (
                <span key={i} className="char">{char}</span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-role gradient-text">{profile.role}</p>
        <p className="hero-text" data-anim>{profile.headline}</p>
        <p className="hero-location" data-anim>
          <FiMapPin aria-hidden="true" /> {profile.location}
        </p>
        <div className="hero-actions" data-anim>
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos <FiArrowRight aria-hidden="true" />
          </a>
          <a href="#contacto" className="btn btn-ghost">Contactarme</a>
          <CvButton />
        </div>
        <div data-anim>
          <SocialLinks />
        </div>
      </div>
      <div className="hero-visual" data-anim>
        <TechCube />
      </div>
    </section>
  );
}
