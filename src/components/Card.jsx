import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card ({children, titleCard, textCard}) {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <div className='carta' data-aos="zoom-in" data-aos-duration="900">
            <h3>{titleCard}</h3>
                <p>
                    {textCard}
                </p>
                {children}
        </div>
    )
}