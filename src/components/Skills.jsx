import { animate, stagger } from 'animejs';
import { FiDatabase, FiLayout, FiServer, FiTool } from 'react-icons/fi';
import { useI18n } from '../i18n/useI18n';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements } from '../lib/motion';
import Section from './Section';
import TiltCard from './TiltCard';

const icons = {
  server: FiServer,
  layout: FiLayout,
  database: FiDatabase,
  tool: FiTool,
};

export default function Skills() {
  const { t, content } = useI18n();
  const { skills } = content;
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
    <Section id="habilidades" eyebrow={t.skills.eyebrow} title={t.skills.title} ref={root}>
      <div className="grid grid-4">
        {skills.map(({ icon, group, items }) => {
          const Icon = icons[icon];
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
