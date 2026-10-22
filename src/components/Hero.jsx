import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/profile';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className="hero" aria-label="Inicio">
      <p className="eyebrow">Hola, soy</p>
      <h1 className="hero-title">{profile.name}</h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-text">{profile.headline}</p>
      <p className="hero-location">
        <FiMapPin aria-hidden="true" /> {profile.location}
      </p>

      <div className="hero-actions">
        <a href="#proyectos" className="btn btn-primary">
          Ver proyectos <FiArrowRight aria-hidden="true" />
        </a>
        <a href="#contacto" className="btn btn-ghost">Contactarme</a>
      </div>

      <SocialLinks />
    </section>
  );
}
