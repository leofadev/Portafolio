import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { socials } from '../data/profile';

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  stackoverflow: FaStackOverflow,
};

export default function SocialLinks() {
  return (
    <ul className="socials">
      {socials.map(({ name, url, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={name}>
            <a href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
