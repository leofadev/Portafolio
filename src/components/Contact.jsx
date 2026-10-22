import { FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';
import SocialLinks from './SocialLinks';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contacto" title="Contacto">
      <div className="card contact">
        <p>
          ¿Tienes un proyecto o una oportunidad laboral? Escríbeme y con gusto conversamos.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          <FiMail aria-hidden="true" /> {profile.email}
        </a>
        <SocialLinks />
        <p className="copyright">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </Section>
  );
}
