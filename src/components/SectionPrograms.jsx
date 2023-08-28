import React from 'react';

export default function SectionPrograms({children}) {
  return (
    <section id="nuestros-programas">
      <div className="container">
        <h2>Proyectos Realizados</h2>
          {children}
      </div>
    </section>
  )
}
