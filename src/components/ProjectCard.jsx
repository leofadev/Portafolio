import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ title, description, tags, repo, demo }) {
  return (
    <article className="card project">
      <h3 className="card-title">{title}</h3>
      <p className="project-text">{description}</p>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            <FiExternalLink aria-hidden="true" /> Demo
          </a>
        )}
        <a href={repo} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
          <FaGithub aria-hidden="true" /> Código
        </a>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string,
};
