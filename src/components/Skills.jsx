import { skills } from '../data/profile';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid grid-4">
        {skills.map(({ group, items }) => (
          <div key={group} className="card">
            <h3 className="card-title">{group}</h3>
            <ul className="tags">
              {items.map((skill) => (
                <li key={skill} className="tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
