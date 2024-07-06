import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import SectionAboutMe from './components/SectionAboutMe';
import SectionPrograms from './components/SectionPrograms';
import SectionCharacteristics from './components/SectionCharacteristics';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  return (
    <>
      <Header>
        <Nav/>
      </Header>

      <Routes>
            <Route path="/" element={<SectionAboutMe />} />
            <Route path="/characteristics" element={<SectionCharacteristics />} />
            <Route path="/programs" element={<SectionPrograms />} />
      </Routes>

      <Footer/>
    </>
  )
}


