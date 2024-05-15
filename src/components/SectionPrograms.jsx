import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionPrograms({ children }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="nuestros-programas" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="container">
                <h2>Proyectos Realizados</h2>
                {children}
            </div>
        </section>
    );
}

SectionPrograms.propTypes = {
    children: PropTypes.node
};
