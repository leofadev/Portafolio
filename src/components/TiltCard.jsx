import PropTypes from 'prop-types';
import { useTilt } from '../hooks/useTilt';

// El contenedor externo recibe las animaciones de entrada y el puntero; la tarjeta interna, la inclinación 3D.
export default function TiltCard({ as: Tag = 'div', className = '', children, ...props }) {
  const { wrapRef, cardRef } = useTilt();

  return (
    <Tag ref={wrapRef} className={`tilt-wrap ${className}`} {...props}>
      <div ref={cardRef} className="card tilt">
        <span className="card-glare" aria-hidden="true" />
        {children}
      </div>
    </Tag>
  );
}

TiltCard.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
