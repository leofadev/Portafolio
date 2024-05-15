import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Button({ textButton, onClick }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <button onClick={onClick} data-aos="zoom-in" data-aos-duration="800">
            {textButton}
        </button>
    );
}

Button.propTypes = {
    textButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
