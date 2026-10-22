import PropTypes from 'prop-types';
import { useReveal } from '../hooks/useReveal';

export default function Section({ id, title, children }) {
  const ref = useReveal();

  return (
    <section id={id} className="section reveal" ref={ref} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
