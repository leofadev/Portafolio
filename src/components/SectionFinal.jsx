import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionFinal({ children }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="final" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="container">
                <h2>Listo para programar</h2>
                {children}
            </div>
        </section>
    );
}

SectionFinal.propTypes = {
    children: PropTypes.node
};
