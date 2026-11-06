import { profile } from '../data/profile';

// Estadísticas con GoatCounter (https://www.goatcounter.com): sin cookies ni datos personales.
// Se cuenta a mano (no_onload) porque cada sección de la landing es una "página" distinta.
const SCRIPT = 'https://gc.zgo.at/count.js';
const queue = [];
let started = false;

function send(data) {
  const gc = window.goatcounter;
  if (gc?.count) gc.count(data);
  else queue.push(data); // El script aún no ha cargado
}

// Abrir /Portafolio/#toggle-goatcounter activa o desactiva el conteo de tus propias visitas.
// count.js solo lo revisa al cargar la página; aquí también funciona si la página ya estaba abierta
// y solo cambia el hash. Se quita el hash para que count.js no lo vuelva a alternar.
const TOGGLE_HASH = '#toggle-goatcounter';
const SKIP_KEY = 'skipgc'; // La misma clave que usa count.js

function handleToggle() {
  if (window.location.hash !== TOGGLE_HASH) return;
  try {
    const wasSkipped = localStorage.getItem(SKIP_KEY) === 't';
    if (wasSkipped) localStorage.removeItem(SKIP_KEY);
    else localStorage.setItem(SKIP_KEY, 't');
    window.alert(
      wasSkipped
        ? 'Estadísticas ACTIVADAS de nuevo: tus visitas en este navegador vuelven a contarse.'
        : 'Listo: tus visitas en este navegador ya NO se cuentan en las estadísticas.'
    );
  } catch {
    window.alert('No se pudo guardar la preferencia: el navegador bloquea el almacenamiento local.');
  }
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}

export function initAnalytics() {
  if (started || !profile.analytics) return;
  started = true;
  handleToggle();
  window.addEventListener('hashchange', handleToggle);
  window.goatcounter = { ...window.goatcounter, no_onload: true };

  const script = document.createElement('script');
  script.async = true;
  script.src = SCRIPT;
  script.dataset.goatcounter = profile.analytics;
  script.onload = () => queue.splice(0).forEach(send);
  document.head.appendChild(script);
}

// Vista de una sección, p. ej. /Portafolio/#proyectos
export function trackSection(id, title) {
  const hash = id === 'inicio' ? '' : `#${id}`;
  send({ path: `${window.location.pathname}${hash}`, title });
}

// Evento puntual: descarga del CV, mensaje enviado, clic en una demo…
export function trackEvent(name, title = name) {
  send({ path: name, title, event: true });
}
