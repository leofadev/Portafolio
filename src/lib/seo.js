// Etiquetas SEO que se insertan en index.html al compilar (ver vite.config.js), a partir de profile.js.
// Así los buscadores reciben la información sin depender de ejecutar JavaScript.
import { localize } from '../i18n/localize.js';

export const SITE_URL = 'https://leofadev.github.io/Portafolio/';

const escapeHtml = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Datos estructurados schema.org (Person + WebSite) en JSON-LD
export function structuredData(data) {
  const { profile, experience, education, skills, socials } = localize(data, 'es');
  const current = experience[0];
  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}#persona`,
    name: profile.fullName,
    alternateName: [profile.name, profile.alias],
    jobTitle: profile.role,
    description: profile.headline,
    url: SITE_URL,
    image: `${SITE_URL}og-image.jpg`,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Barranquilla', addressCountry: 'CO' },
    worksFor: { '@type': 'Organization', name: current.company },
    alumniOf: [...new Set(education.map((e) => e.institution))].map((name) => ({
      '@type': 'EducationalOrganization',
      name,
    })),
    knowsAbout: [...new Set(skills.flatMap((s) => s.items))],
    knowsLanguage: ['es', 'en'],
    sameAs: socials.map((s) => s.url),
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}#sitio`,
    url: SITE_URL,
    name: `${profile.alias} · ${profile.name}`,
    inLanguage: ['es', 'en'],
    author: { '@id': person['@id'] },
  };
  return { '@context': 'https://schema.org', '@graph': [person, website] };
}

export function seoHead(data) {
  // `<` escapado para que el JSON no pueda cerrar la etiqueta <script>
  const json = JSON.stringify(structuredData(data)).replace(/</g, '\\u003c');
  return [
    `<link rel="canonical" href="${SITE_URL}" />`,
    `<link rel="alternate" hreflang="es" href="${SITE_URL}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}?lang=en" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}" />`,
    '<meta property="og:locale:alternate" content="en_US" />',
    '<meta name="robots" content="index, follow" />',
    `<meta name="author" content="${escapeHtml(data.profile.fullName)}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join('\n    ');
}

// Resumen en HTML simple para buscadores o navegadores sin JavaScript
export function noscriptContent(data) {
  const { profile, experience, projects, socials } = localize(data, 'es');
  const li = (items) => items.map((i) => `<li>${i}</li>`).join('');
  return `<noscript>
      <h1>${escapeHtml(profile.fullName)} — ${escapeHtml(profile.role)}</h1>
      <p>${escapeHtml(profile.headline)} ${escapeHtml(profile.location)}.</p>
      <h2>Experiencia</h2>
      <ul>${li(experience.map((e) => `${escapeHtml(e.role)} en ${escapeHtml(e.company)} (${escapeHtml(e.period)})`))}</ul>
      <h2>Proyectos</h2>
      <ul>${li(projects.map((p) => `<a href="${p.demo ?? p.repo}">${escapeHtml(p.title)}</a>: ${escapeHtml(p.description)}`))}</ul>
      <p>Contacto: <a href="mailto:${profile.email}">${profile.email}</a> · ${socials.map((s) => `<a href="${s.url}">${s.name}</a>`).join(' · ')}</p>
    </noscript>`;
}
