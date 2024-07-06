import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionCharacteristics() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="caracteristicas">
            <div className="container">
            {/* aqui iran las tecnologias y caracteristicas dev. */}
            </div>
        </section>
    );
}

SectionCharacteristics.propTypes = {
    // Si tu componente espera recibir props en el futuro,
    // puedes definir y validarlas aquí utilizando PropTypes
};
