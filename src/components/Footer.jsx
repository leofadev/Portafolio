import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <footer>
            <div className="container" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
                <p>©LeonardoWebsite</p>
            </div>
        </footer>
    )
}
