export const LANGS = ['es', 'en'];

const isTranslation = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value) && 'es' in value && 'en' in value;

// Recorre los datos y reemplaza cada { es, en } por el texto del idioma pedido
export function localize(value, lang) {
  if (isTranslation(value)) return value[lang];
  if (Array.isArray(value)) return value.map((v) => localize(v, lang));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, lang)]));
  }
  return value;
}
