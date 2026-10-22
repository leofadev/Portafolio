import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import TiltCard from './TiltCard';

export default function ProjectCard({ index, title, description, tags, repo, demo }) {
  return (
    <TiltCard as="article" className="project">
      <div className="project-top" data-tilt-flat>
        <span className="project-index">{String(index).padStart(2, '0')}</span>
        <div className="project-links">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" aria-label={`Demo de ${title}`} title="Demo">
              <FiExternalLink />
            </a>
          )}
          <a href={repo} target="_blank" rel="noreferrer" aria-label={`Código de ${title}`} title="Código">
            <FaGithub />
          </a>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="project-text">{description}</p>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>
    </TiltCard>
  );
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string,
};
