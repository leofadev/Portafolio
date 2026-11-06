import PropTypes from 'prop-types';
import { FiDownload } from 'react-icons/fi';
import { useI18n } from '../i18n/useI18n';

export default function CvButton({ className = 'btn btn-ghost' }) {
  const { t, content } = useI18n();
  const { profile } = content;
  return (
    <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download className={className}>
      <FiDownload aria-hidden="true" /> {t.downloadCv}
    </a>
  );
}

CvButton.propTypes = {
  className: PropTypes.string,
};
