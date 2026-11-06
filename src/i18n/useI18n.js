import { useContext } from 'react';
import { LanguageContext } from './context';

// { lang, t (textos de la interfaz), content (perfil traducido), toggleLang }
export const useI18n = () => useContext(LanguageContext);
