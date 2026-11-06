import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import LanguageProvider from './i18n/LanguageProvider';
import { initAnalytics } from './lib/analytics';
// Fuentes alojadas en el sitio (subconjunto latino, incluye tildes y ñ): no bloquean la carga como Google Fonts
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-600.css';
import '@fontsource/space-grotesk/latin-700.css';
import './index.css';

initAnalytics();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
