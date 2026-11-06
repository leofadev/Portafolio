import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { animate, spring, stagger } from 'animejs';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useI18n } from '../i18n/useI18n';
import { prefersReducedMotion } from '../lib/motion';

export default function Header({ links, active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const { t, content, lang, toggleLang } = useI18n();
  const listRef = useRef(null);
  const indicatorRef = useRef(null);
  const close = () => setOpen(false);

  // Píldora que se desliza con efecto resorte hasta el enlace activo
  useLayoutEffect(() => {
    const moveIndicator = () => {
      const item = listRef.current.querySelector('[aria-current="page"]')?.parentElement;
      const reduced = prefersReducedMotion();
      animate(indicatorRef.current, {
        opacity: { to: item ? 1 : 0, duration: reduced ? 0 : 250 },
        ...(item && {
          translateX: item.offsetLeft,
          width: item.offsetWidth,
          ...(reduced ? { duration: 0 } : { ease: spring({ stiffness: 140, damping: 14 }) }),
        }),
      });
    };
    moveIndicator();
    window.addEventListener('resize', moveIndicator);
    return () => window.removeEventListener('resize', moveIndicator);
  }, [active, lang]);

  // Menú móvil: los enlaces entran en cascada
  useEffect(() => {
    if (!open || prefersReducedMotion()) return;
    const anim = animate(listRef.current.querySelectorAll('li'), {
      opacity: { from: 0 },
      translateX: { from: -40 },
      rotateY: { from: -30 },
      delay: stagger(60),
      duration: 600,
      ease: 'outExpo',
    });
    return () => anim.revert();
  }, [open]);

  return (
    <header className="header">
      <nav className="nav container" aria-label={t.navLabel}>
        <a href="#inicio" className="logo" onClick={close}>
          <span className="logo-mark">{'<'}</span>
          {content.profile.alias}
          <span className="logo-mark">{' />'}</span>
        </a>

        <ul id="menu" ref={listRef} className={`nav-links ${open ? 'is-open' : ''}`}>
          <span ref={indicatorRef} className="nav-indicator" aria-hidden="true" />
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                aria-current={active === id ? 'page' : undefined}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn lang-btn"
            onClick={toggleLang}
            aria-label={t.switchLang}
            title={t.switchLang}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? t.closeMenu : t.openMenu}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};
