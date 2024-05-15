import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionCharacteristics() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="caracteristicas" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="container">
            <ol>
                <li data-aos="fade-right" data-aos-duration="800">
                    ✔️ 100% Online
                </li>
                <li data-aos="fade-right" data-aos-duration="800">
                    ✔️ Flexibilidad De Horarios
                </li>
                <li data-aos="fade-right" data-aos-duration="800">
                    ✔️ Servicio Técnico
                </li>
                <li data-aos="fade-right" data-aos-duration="800">
                    ✔️ Asistencia Financiera
                </li>
            </ol>

            </div>
        </section>
    );
}

SectionCharacteristics.propTypes = {
    // Si tu componente espera recibir props en el futuro,
    // puedes definir y validarlas aquí utilizando PropTypes
};
