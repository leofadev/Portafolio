import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Nav() {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <>
            <nav>
                <a href="#somos-proya" data-aos="zoom-in" data-aos-duration="1200">Quien Soy</a>
                <a href="#nuestros-programas" data-aos="zoom-in" data-aos-duration="1200">Proyectos</a>
                <a href="#caracteristicas" data-aos="zoom-in" data-aos-duration="1200">Caracteristicas</a>
            </nav>
        </>
    )
};
