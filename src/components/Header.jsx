import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { profile } from '../data/profile';

export default function Header({ links, active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <nav className="nav container" aria-label="Principal">
        <a href="#inicio" className="logo" onClick={close}>
          {profile.alias}
        </a>

        <ul id="menu" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                aria-current={active === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  active: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};
