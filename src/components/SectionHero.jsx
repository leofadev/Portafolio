import React from 'react'

export default function SectionHero({children}) {
    return (
        <>
            <section id="hero">
                <h1>
                    Puede interesaerte mi contenido <br /> te invito a observarlo
                </h1>
                {children}
            </section>

        </>
    )
}
