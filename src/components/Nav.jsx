import  { useEffect } from 'react';
// import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Nav() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <nav>
            <a href="#somos-proya" data-aos="zoom-in" data-aos-duration="1200">Quién Soy</a>
            <a href="#nuestros-programas" data-aos="zoom-in" data-aos-duration="1200">Proyectos</a>
            <a href="#caracteristicas" data-aos="zoom-in" data-aos-duration="1200">Características</a>
        </nav>
    );
}

Nav.propTypes = {
    // Si tu componente espera recibir props en el futuro,
    // puedes definir y validarlas aquí utilizando PropTypes
};
