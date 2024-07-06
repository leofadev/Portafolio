import {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    useEffect(()=>{
        Aos.init();
    }, [])

    return (
    <footer className="container-fluid bg-dark text-light  fixed-bottom">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <p>© Portafolio</p>
                    <p>© LeonardoWebsite</p>
                </div>
            </div>
        </div>
    </footer>
    )
}
