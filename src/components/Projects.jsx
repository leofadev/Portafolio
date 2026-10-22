import { projects } from '../data/profile';
import Section from './Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos">
      <div className="grid grid-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
