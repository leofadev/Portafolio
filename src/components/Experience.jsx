import { animate, createDrawable, stagger } from 'animejs';
import { experience } from '../data/profile';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements } from '../lib/motion';
import Section from './Section';
import TiltCard from './TiltCard';

export default function Experience() {
  const root = useAnimeScope(() => {
    introElements('.section-head');
    // La línea de tiempo se dibuja y luego aparecen los nodos y las tarjetas
    animate(createDrawable('.rail-line'), {
      draw: ['0 0', '0 1'],
      duration: 1400,
      ease: 'inOutQuart',
    });
    animate('.rail-node', {
      scale: { from: 0 },
      delay: stagger(350, { start: 300 }),
      ease: 'outBack(3)',
      duration: 600,
    });
    animate('.experience-item', {
      opacity: { from: 0 },
      translateX: { from: 80 },
      rotateY: { from: -25 },
      delay: stagger(350, { start: 300 }),
      duration: 1000,
      ease: 'outExpo',
    });
    animate('.experience-list li', {
      opacity: { from: 0 },
      translateY: { from: 12 },
      delay: stagger(60, { start: 700 }),
      ease: 'outQuad',
    });
  });

  return (
    <Section id="experiencia" eyebrow="02 · Trayectoria" title="Experiencia" ref={root}>
      <div className="experience">
        <svg className="rail" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden="true">
          <line className="rail-line" x1="1" y1="0" x2="1" y2="100" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="experience-items">
          {experience.map(({ role, company, description, period, highlights }) => (
            <li key={company} className="experience-row">
              <span className="rail-node" aria-hidden="true" />
              <TiltCard className="experience-item">
                <div className="experience-head">
                  <div>
                    <h3 className="card-title">{role}</h3>
                    <p className="experience-company">
                      {company} <span>· {description}</span>
                    </p>
                  </div>
                  <span className="badge">{period}</span>
                </div>
                <ul className="experience-list">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </TiltCard>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
