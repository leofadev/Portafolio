import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionHero({children}) {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <>
            <section id="hero" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
                <h1>
                    Puede interesaerte mi contenido <br /> te invito a observarlo
                </h1>
                {children}
            </section>

        </>
    )
}
