// Envía el formulario a FormSubmit (https://formsubmit.co) en formato JSON
export async function sendMessage(endpoint, { name, email, message, honey }, subject) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name,
      email, // FormSubmit lo usa como dirección de respuesta
      message,
      _subject: `${subject} — ${name}`,
      _template: 'table',
      _captcha: 'false',
      _honey: honey, // Campo trampa: si un bot lo llena, el mensaje se descarta
    }),
  });
  const data = await res.json().catch(() => ({}));
  // FormSubmit responde success "true" (texto) cuando el mensaje se entregó
  if (!res.ok || String(data.success) !== 'true') {
    throw new Error(data.message || `Error ${res.status}`);
  }
}
