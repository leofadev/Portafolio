import PropTypes from 'prop-types';

export default function Section({ id, title, children }) {
  return (
    <section className="section" aria-labelledby={`${id}-title`}>
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
