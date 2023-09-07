import React, {useEffect} from 'react'
import {BsGithub, BsYoutube, BsFacebook, BsInstagram} from 'react-icons/bs';
import Aos from "aos";
import "aos/dist/aos.css";


export default function SectionAboutMe() {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <section id="somos-proya" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className="container">
                <div className="img-container"/>
                    <div className="texto" data-aos="fade-up" data-aos-duration="1200">
                        <h2 className="text">
                            Developer <br /> &nbsp; &nbsp; &nbsp; &nbsp; ∇{" "}
                            <span className="color-acento">LeofaDev</span>
                        </h2>
                        <p>
                        Este es mi portafolio, en el cual les estaré presentando algunos de los
                        proyectos que he realizado. Mi nombre es Leonardo Fabio Pinto Vega.
                        Tecnico en programacíon de software.
                        </p>{" "}
                        <br /> <br />
                    <div className="ico">
                        <a className="icono" 
                            target="_blank" 
                            href="https://github.com/leofadev">
                            <BsGithub className="App-logo" />
                        </a>
                        <a
                            className="icono"
                            target="_blank"
                            href="https://www.youtube.com/channel/UClTl567SgamM8vMczCZXgtQ">         <BsYoutube className="App-logo" />
                        </a>
                        <a
                            className="icono"
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100047685077888">
                            <BsFacebook className="App-logo" />
                        </a>
                        <a
                            className="icono"
                            target="_blank"
                            href="https://www.instagram.com/leonardo_pinto04/"
                            >
                            <BsInstagram className="App-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

