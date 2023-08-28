import React from 'react'

export default function Card ({children, titleCard, textCard}) {
    return (
        <div className='carta'>
            <h3>{titleCard}</h3>
                <p>
                    {textCard}
                </p>
                {children}
        </div>
    )
}