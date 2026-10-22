import { animate, stagger } from 'animejs';
import { FiDatabase, FiLayout, FiServer, FiTool } from 'react-icons/fi';
import { skills } from '../data/profile';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements } from '../lib/motion';
import Section from './Section';
import TiltCard from './TiltCard';

const icons = {
  Backend: FiServer,
  Frontend: FiLayout,
  'Bases de datos': FiDatabase,
  Herramientas: FiTool,
};

export default function Skills() {
  const root = useAnimeScope(() => {
    introElements('.section-head');
    // Las tarjetas giran sobre su eje al entrar
    animate('.skill-card', {
      opacity: { from: 0 },
      rotateY: { from: 90 },
      translateZ: { from: -200 },
      delay: stagger(120),
      duration: 1100,
      ease: 'outExpo',
    });
    animate('.skill-card .tag', {
      opacity: { from: 0 },
      scale: { from: 0 },
      delay: stagger(25, { start: 450, from: 'center' }),
      ease: 'outBack(2)',
      duration: 500,
    });
  });

  return (
    <Section id="habilidades" eyebrow="03 · Stack" title="Habilidades" ref={root}>
      <div className="grid grid-4">
        {skills.map(({ group, items }) => {
          const Icon = icons[group];
          return (
            <TiltCard key={group} className="skill-card">
              <span className="card-icon" aria-hidden="true">
                {Icon && <Icon />}
              </span>
              <h3 className="card-title">{group}</h3>
              <ul className="tags">
                {items.map((skill) => (
                  <li key={skill} className="tag">{skill}</li>
                ))}
              </ul>
            </TiltCard>
          );
        })}
      </div>
    </Section>
  );
}
