import React from 'react';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import SectionHero from './components/SectionHero';
import SectionAboutMe from './components/SectionAboutMe';
import SectionPrograms from './components/SectionPrograms';
import SectionCharacteristics from './components/SectionCharacteristics';
import SectionFinal from './components/SectionFinal';
import Footer from './components/Footer';
import Card from "./components/Card";
import Button from "./components/Button";


export default function App() {
  return (
    <>
      <Header>
        <Nav/>
      </Header>
      
      <SectionHero>
        <Button textButton="Ver ahora!" />
      </SectionHero>

      <SectionAboutMe/>
      
      <SectionPrograms>
        <div className="programas">
          <Card titleCard="Aplicativo CRUD" textCard="Programa que permite: &nbsp; crear, leer, actualizar, eliminar datos procedentes de una base de datos ya existente.">
            <Button textButton="CRUD"/>
          </Card>

          <Card titleCard="Programa JS" textCard="Piano creado con lenguaje JavaScript, con sonido incluido y se puede tocar con algunas teclas del teclado.">
            <Button textButton="Piano"/>
          </Card>

          <Card titleCard="WebSite" textCard="En este sitio web realizaremos el consumo de una API, esta con tematica de Rick And Morty,en React.">
            <Button textButton="WebSite"/>
          </Card>
        </div>
        <div className="programas">
          <Card titleCard="Website" textCard="Pagina web sobre  las pel&iacute;culas de Jurassic Park y Jurassic World, El aplicativo se encuentra en construcci&oacute;n.">
            <Button textButton="WebSite"/>
          </Card>

          <Card titleCard="Programa JS" textCard="Ruleta creada con lenguaje JavaScript, con preguntas al azar y sus respectivas respuestas.">
            <Button textButton="Ruleta"/>
          </Card>

          <Card titleCard="Aplicativo PHP" textCard="Programa que permite: &nbsp; crear, leer, actualizar, eliminar datos procedentes de una base de datos ya existente.">
            <Button textButton="CRUD"/>
          </Card>
        </div>
      </SectionPrograms>

      <SectionCharacteristics/>

      <SectionFinal>
        <Button textButton="Saber m&aacute;s"/>
      </SectionFinal>

      <Footer/>
    </>
  )
}


