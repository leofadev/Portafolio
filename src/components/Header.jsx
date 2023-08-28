import React from 'react';

export default function Header({children}) {
    return (
    <>
        <header>
            <div className="container">
                <a href="#inicio" className="logo">
                    LeofaDev
                </a>
            </div>
            {children}
        </header>
        <a name="inicio" className="logo" />
    </>
    )
};
