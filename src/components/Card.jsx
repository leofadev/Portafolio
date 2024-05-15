import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card({ children, titleCard, textCard }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='carta' data-aos="zoom-in" data-aos-duration="900">
            <h3>{titleCard}</h3>
            <p>{textCard}</p>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node,
    titleCard: PropTypes.string.isRequired,
    textCard: PropTypes.string.isRequired,
};

