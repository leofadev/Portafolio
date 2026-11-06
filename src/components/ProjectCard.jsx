import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { useI18n } from '../i18n/useI18n';
import ProjectCover from './ProjectCover';
import TiltCard from './TiltCard';

export default function ProjectCard({ title, description, tags, repo, demo, image, cover }) {
  const { t } = useI18n();
  return (
    <TiltCard as="article" className="project">
      <ProjectCover title={title} image={image} cover={cover}>
        <div className="project-top" data-tilt-flat>
          <div className="project-links">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" aria-label={`${t.projects.demo}: ${title}`} title={t.projects.demo}>
                <FiExternalLink />
              </a>
            )}
            <a href={repo} target="_blank" rel="noreferrer" aria-label={`${t.projects.code}: ${title}`} title={t.projects.code}>
              <FaGithub />
            </a>
          </div>
        </div>
      </ProjectCover>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string,
  image: PropTypes.string,
  cover: PropTypes.arrayOf(PropTypes.string),
};
