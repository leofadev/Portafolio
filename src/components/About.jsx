import { animate, stagger } from 'animejs';
import { FiGlobe } from 'react-icons/fi';
import { profile, education, stats } from '../data/profile';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements } from '../lib/motion';
import Section from './Section';
import TiltCard from './TiltCard';

export default function About() {
  const root = useAnimeScope(() => {
    introElements();
    // Contadores que suben desde 0
    animate('.stat-value', {
      innerHTML: { from: 0 },
      modifier: (v) => Math.round(v),
      duration: 1600,
      delay: stagger(150, { start: 400 }),
      ease: 'outExpo',
    });
    animate('.edu-item', {
      opacity: { from: 0 },
      translateX: { from: 40 },
      delay: stagger(90, { start: 500 }),
      ease: 'outExpo',
    });
  });

  return (
    <Section id="sobre-mi" eyebrow="01 · Perfil" title="Sobre mí" ref={root}>
      <div className="about">
        <div className="about-text">
          {profile.about.map((paragraph) => (
            <p key={paragraph} data-anim>{paragraph}</p>
          ))}
          <p className="about-languages" data-anim>
            <FiGlobe aria-hidden="true" /> {profile.languages}
          </p>
          <ul className="stats" data-anim>
            {stats.map(({ value, suffix, label }) => (
              <li key={label} className="stat">
                <span className="stat-number gradient-text">
                  <span className="stat-value">{value}</span>
                  {suffix}
                </span>
                <span className="stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <TiltCard data-anim>
          <h3 className="card-title">Educación</h3>
          <ul className="timeline">
            {education.map(({ title, institution, period }) => (
              <li key={title} className="edu-item">
                <span className="timeline-main">{title}</span>
                <span className="timeline-sub">{institution}</span>
                <span className="badge">{period}</span>
              </li>
            ))}
          </ul>
        </TiltCard>
      </div>
    </Section>
  );
}
