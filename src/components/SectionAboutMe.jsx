import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { BsGithub, BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionAboutMe() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="somos-proya" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="container">
                <div className="img-container">
                    {/* Aquí va el contenido de la imagen si es necesario */}
                </div>
                <div className="texto" data-aos="fade-up" data-aos-duration="1200">
                    <h2 className="text">
                        Developer <br /> &nbsp; &nbsp; &nbsp; &nbsp; ∇{" "}
                        <span className="color-acento">LeofaDev</span>
                    </h2>
                    <p>
                    ¡Bienvenidos a mi portafolio! Soy Leonardo Pinto, analista y desarrollador de software. Aquí compartiré algunos de los proyectos que he realizado. ¡Espero que disfruten explorando!
                    </p>
                    <br /><br />
                    <div className="ico">
                        <a className="icono"
                            href="https://github.com/leofadev"
                            target="_blank"
                            rel="noopener noreferrer">
                            <BsGithub className="App-logo" />
                        </a>
                        <a
                            className="icono"
                            href="https://www.youtube.com/channel/UClTl567SgamM8vMczCZXgtQ"
                            target="_blank"
                            rel="noopener noreferrer">
                            <BsYoutube className="App-logo" />
                        </a>
                        <a
                            className="icono"
                            href="https://www.facebook.com/profile.php?id=100047685077888"
                            target="_blank"
                            rel="noopener noreferrer">
                            <BsFacebook className="App-logo" />
                        </a>
                        <a
                            className="icono"
                            href="https://www.instagram.com/leonardo_pinto04/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <BsInstagram className="App-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

SectionAboutMe.propTypes = {
    // Si tu componente espera recibir props en el futuro,
    // puedes definir y validarlas aquí utilizando PropTypes
};
