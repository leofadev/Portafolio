import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import * as data from '../data/profile';
import { LanguageContext } from './context';
import { LANGS, localize } from './localize';
import { ui } from './ui';
import { SITE_URL } from '../lib/seo';

const STORAGE_KEY = 'lang';

// Prioridad: ?lang= en la URL (enlaces compartidos) > elección guardada > idioma del navegador
function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Sin almacenamiento: se usa el idioma del navegador
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  // Contenido y textos de la interfaz ya traducidos
  const content = useMemo(() => localize(data, lang), [lang]);
  const t = ui[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    // La URL canónica sigue a la dirección visitada (no al idioma detectado): sin ?lang es la de detección
    // automática (x-default); con ?lang=es o ?lang=en, la de ese idioma
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', LANGS.includes(urlLang) ? `${SITE_URL}?lang=${lang}` : SITE_URL);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignorar: el idioma simplemente no se recuerda
    }
    // Mantiene ?lang= solo si ya estaba en la URL, para no ensuciar los enlaces normales
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url);
    }
  }, [lang, t]);

  const toggleLang = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), []);

  const value = useMemo(() => ({ lang, t, content, toggleLang }), [lang, t, content, toggleLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
