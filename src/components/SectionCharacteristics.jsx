import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionCharacteristics() {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <section id="caracteristicas" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className="container">
                <ul>
                    <li data-aos="fade-right" data-aos-duration="800">✔️​ 100% Online</li>
                    <li data-aos="fade-right" data-aos-duration="800">✔️ ​Flexibilidad De Horarios</li>
                    <li data-aos="fade-right" data-aos-duration="800">✔️ Servico Tecnico​</li>
                    <li data-aos="fade-right" data-aos-duration="800">✔️ Asistencia Financiera​</li>
                </ul>
            </div>
        </section>

    )
}
