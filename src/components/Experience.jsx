import { experience } from '../data/profile';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="experience">
        {experience.map(({ role, company, description, period, highlights }) => (
          <li key={company} className="card experience-item">
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
