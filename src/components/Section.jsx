import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Section = forwardRef(function Section({ id, eyebrow, title, children }, ref) {
  return (
    <section className="section" aria-labelledby={`${id}-title`} ref={ref}>
      <header className="section-head" data-anim>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  );
});

Section.propTypes = {
  id: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
