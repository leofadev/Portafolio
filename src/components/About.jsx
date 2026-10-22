import PropTypes from 'prop-types';
import { profile, experience, education } from '../data/profile';
import Section from './Section';

function Timeline({ title, items }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <ul className="timeline">
        {items.map((item) => (
          <li key={item.company ?? item.title}>
            <span className="timeline-main">{item.company ?? item.title}</span>
            {item.role && <span className="timeline-sub">{item.role}</span>}
            <span className="badge">{item.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Timeline.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      title: PropTypes.string,
      role: PropTypes.string,
      period: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="about">
        <div className="about-text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-cards">
          <Timeline title="Experiencia" items={experience} />
          <Timeline title="Educación" items={education} />
        </div>
      </div>
    </Section>
  );
}
