import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header({ children }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <header>
                <div className="container">
                    <a href="#inicio" className="logo" data-aos="fade-down-right" data-aos-duration="1200">
                        LeofaDev
                    </a>
                </div>
                {children}
            </header>
            <div id="inicio" className="logo" />
        </>
    );
}

Header.propTypes = {
    children: PropTypes.node
};

