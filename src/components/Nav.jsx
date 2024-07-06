import  { useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Nav() {
    useEffect(() => {
        Aos.init();
    }, []);

    const { pathname } = useLocation();

    useEffect(() => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        const closeMenu = () => {
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        };

        // Añadir el evento click a todos los enlaces de navegación
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Limpieza de los eventos al desmontar el componente
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', closeMenu);
            });
        };
    }, [pathname]);

    return (
        // <nav>
        //     <Link  to="/" data-aos="zoom-in" data-aos-duration="1200">Quién Soy</Link>
        //     <Link  to="/programs" data-aos="zoom-in" data-aos-duration="1200">Proyectos</Link>
        //     <Link  to="/characteristics" data-aos="zoom-in" data-aos-duration="1200">Características</Link>
        // </nav>

        // <nav className="d-inline-flex navbar navbar-expand-lg ">
        //     <div className="container-fluid ">
        //             <Link
        //             to="/"
        //             className="logo text-dark font-weight-bold"
        //             data-aos="fade-down-right"
        //             data-aos-duration={1200}
        //             >
        //                 <img className='img-fluid w-25' src="https://lh3.googleusercontent.com/d/1eZcEHorSKKGsoqDw4hPhOSgAxO0saQZX=w250?authuser=0" alt="foto" />
        //             </Link>
        //         <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-bs-toggle="collapse"
        //         data-bs-target="#navbarTogglerDemo01"
        //         aria-controls="navbarTogglerDemo01"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //         >
        //         <span className="navbar-toggler-icon" />
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className='nav-link'  to="/" data-aos="zoom-in" data-aos-duration="1200">Quién Soy</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className='nav-link'  to="/programs" data-aos="zoom-in" data-aos-duration="1200">Proyectos</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className='nav-link'  to="/characteristics" data-aos="zoom-in" data-aos-duration="1200">Características</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>


        <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
            <Link to="/" className="logo text-dark font-weight-bold" data-aos="fade-down-right" data-aos-duration={1200}>
                <img className="img-fluid w-25" src="https://lh3.googleusercontent.com/d/1eZcEHorSKKGsoqDw4hPhOSgAxO0saQZX=w250?authuser=0" alt="foto" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/" data-aos="zoom-in" data-aos-duration="1200">Quién Soy</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/programs" data-aos="zoom-in" data-aos-duration="1200">Proyectos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/characteristics" data-aos="zoom-in" data-aos-duration="1200">Características</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    );
}

Nav.propTypes = {
    // Si tu componente espera recibir props en el futuro,
    // puedes definir y validarlas aquí utilizando PropTypes
};
