import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from "aos";
// import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

export default function Header({ children }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <header className="container-fluid p-0">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-4">
                            <Link
                            to="/"
                            className="logo text-dark font-weight-bold"
                            data-aos="fade-down-right"
                            data-aos-duration={1200}
                            >
                            <img className='img-fluid w-25' src="https://lh3.googleusercontent.com/d/1eZcEHorSKKGsoqDw4hPhOSgAxO0saQZX=w250?authuser=0" alt="foto" />
                            </Link>
                        </div> */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            {children}
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

Header.propTypes = {
    children: PropTypes.node
};

            {/* <header className="container-fluid p-3 bg-warning d-flex align-items-center justify-content-between">
                <div className="row">
                    <div className="col-4">
                    <Link to="/" className="logo" data-aos="fade-down-right" data-aos-duration="1200">
                        LeofaDev
                    </Link>
                    </div>
                    <div className="col-8">
                    {children}
                    </div>
                </div>
            </header> */}