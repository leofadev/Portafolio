import PropTypes from 'prop-types';
import { useI18n } from '../i18n/useI18n';
import {
  SiAngular, SiBootstrap, SiExpo, SiExpress, SiGoogleappsscript, SiHibernate, SiIonic,
  SiMysql, SiNodedotjs, SiOpenjdk, SiReact, SiSpringboot, SiTypescript, SiVite,
} from 'react-icons/si';

const icons = {
  angular: SiAngular,
  appsscript: SiGoogleappsscript,
  bootstrap: SiBootstrap,
  expo: SiExpo,
  express: SiExpress,
  hibernate: SiHibernate,
  ionic: SiIonic,
  java: SiOpenjdk,
  mysql: SiMysql,
  node: SiNodedotjs,
  react: SiReact,
  springboot: SiSpringboot,
  typescript: SiTypescript,
  vite: SiVite,
};

// Portada de la tarjeta: captura real si existe (`image`) o ilustración con las tecnologías (`cover`).
export default function ProjectCover({ title, image, cover = [], children }) {
  const { t } = useI18n();
  const [main, ...rest] = cover;
  const Watermark = icons[main];

  return (
    <div className={`project-cover ${image ? 'has-image' : ''}`}>
      {image ? (
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={`${t.projects.screenshot} ${title}`} loading="lazy" />
      ) : (
        <>
          {Watermark && <Watermark className="cover-watermark" aria-hidden="true" />}
          <ul className="cover-icons" aria-hidden="true">
            {[main, ...rest].map((key) => {
              const Icon = icons[key];
              return Icon ? (
                <li key={key}>
                  <Icon />
                </li>
              ) : null;
            })}
          </ul>
        </>
      )}
      {children}
    </div>
  );
}

ProjectCover.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  cover: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(icons))),
  children: PropTypes.node,
};
