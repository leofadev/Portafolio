import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export default function Button({textButton}) {
    useEffect(()=>{
        Aos.init();
    }, [])

    return(
        <button data-aos="zoom-in" data-aos-duration="800">{textButton}</button>
    )
}