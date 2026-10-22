import PropTypes from 'prop-types';
import { FiDownload } from 'react-icons/fi';
import { profile } from '../data/profile';

export default function CvButton({ className = 'btn btn-ghost' }) {
  return (
    <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download className={className}>
      <FiDownload aria-hidden="true" /> Descargar CV
    </a>
  );
}

CvButton.propTypes = {
  className: PropTypes.string,
};
