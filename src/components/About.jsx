import { FiGlobe } from 'react-icons/fi';
import { profile, education } from '../data/profile';
import Section from './Section';

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="about">
        <div className="about-text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-languages">
            <FiGlobe aria-hidden="true" /> {profile.languages}
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Educación</h3>
          <ul className="timeline">
            {education.map(({ title, institution, period }) => (
              <li key={title}>
                <span className="timeline-main">{title}</span>
                <span className="timeline-sub">{institution}</span>
                <span className="badge">{period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
