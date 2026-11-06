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

export function initAnalytics() {
  if (started || !profile.analytics) return;
  started = true;
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
