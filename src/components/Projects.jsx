import { animate, stagger } from 'animejs';
import { projects } from '../data/profile';
import { useAnimeScope } from '../hooks/useAnimeScope';
import { introElements } from '../lib/motion';
import Section from './Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const root = useAnimeScope(() => {
    introElements('.section-head');
    // Las tarjetas se voltean en 3D en diagonal (stagger en rejilla 3x2)
    animate('.project', {
      opacity: { from: 0 },
      rotateX: { from: -70 },
      translateY: { from: 60 },
      translateZ: { from: -150 },
      delay: stagger(110, { grid: [3, 2], from: 'first' }),
      duration: 1100,
      ease: 'outExpo',
    });
  });

  return (
    <Section id="proyectos" eyebrow="04 · Trabajo" title="Proyectos" ref={root}>
      <div className="grid grid-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i + 1} {...project} />
        ))}
      </div>
    </Section>
  );
}
