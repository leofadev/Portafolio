import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header({children}) {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
    <>
        <header>
            <div className="container">
                <a href="#inicio" className="logo" data-aos="fade-down-right" data-aos-duration="1200">
                    LeofaDev
                </a>
            </div>
            {children}
        </header>
        <a name="inicio" className="logo" />
    </>
    )
};
