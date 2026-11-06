# Portafolio

Portafolio personal de **Leonardo Pinto (LeofaDev)**, desarrollador Full Stack especializado en Laravel, PHP y MySQL.

🔗 **Demo:** [leofadev.github.io/Portafolio](https://leofadev.github.io/Portafolio/)

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (con SWC)
- [anime.js 4](https://animejs.com/) para todas las animaciones
- CSS propio con efectos 3D, glassmorphism y tema claro/oscuro
- [React Icons](https://react-icons.github.io/react-icons/)

## Animaciones

- Transición 3D entre secciones (la actual se aleja y la nueva entra girando)
- Fondo de puntos que ondula al hacer clic y al cambiar de sección (`stagger` en rejilla)
- Cubo 3D con el stack que gira y se inclina hacia el puntero
- Nombre que aparece letra por letra y rol con efecto *scramble*
- Tarjetas con inclinación 3D y brillo que sigue al puntero
- Línea de tiempo de experiencia que se dibuja (SVG), contadores animados y botón magnético

Si el sistema tiene activado *reducir movimiento*, las animaciones se desactivan.

## Secciones

Landing de una sola pantalla: el menú muestra una sección a la vez (sin scroll entre secciones). Secciones: **Inicio**, **Sobre mí** (educación e idiomas), **Experiencia**, **Habilidades**, **Proyectos** y **Contacto**.

## Idiomas

El sitio está en **español e inglés**. El idioma inicial es el del navegador del visitante; el botón ES/EN lo cambia y la elección se recuerda. Para compartir directamente la versión en inglés: [`?lang=en`](https://leofadev.github.io/Portafolio/?lang=en).

## Formulario de contacto

Los mensajes se envían con [FormSubmit](https://formsubmit.co) (sin backend propio) a la dirección configurada en `contactEndpoint` de `profile.js`. Incluye validación, campo trampa contra bots y estados de envío, éxito y error. La primera vez FormSubmit envía un correo de activación que hay que confirmar.

## Estadísticas

Las visitas se miden con [GoatCounter](https://www.goatcounter.com) (sin cookies ni datos personales), configurado en `analytics` de `profile.js`. Cada sección cuenta como una página (`/Portafolio/#proyectos`) y se registran eventos: `descarga-cv`, `formulario-enviado`, `demo-<repo>`, `codigo-<repo>`, `idioma-en`/`idioma-es` y `red-<red>`.

Para no contar tus propias visitas, abre una vez [`/Portafolio/#toggle-goatcounter`](https://leofadev.github.io/Portafolio/#toggle-goatcounter) en tu navegador.

## SEO

Al compilar, un plugin de Vite (`vite.config.js` + `src/lib/seo.js`) inserta en `index.html`, a partir de `profile.js`:

- Datos estructurados **JSON-LD** (`Person` y `WebSite`): nombre, cargo, empresa, estudios, habilidades y perfiles
- URL canónica y versiones por idioma (`hreflang` es / en con `?lang=en`)
- Un resumen en `<noscript>` para buscadores que no ejecutan JavaScript

El mapa del sitio está en [`public/sitemap.xml`](public/sitemap.xml).

## Rendimiento

Lighthouse (móvil): **98** en rendimiento y 100 en accesibilidad, buenas prácticas y SEO.

- Fuentes alojadas en el sitio con [Fontsource](https://fontsource.org) (sin peticiones a Google Fonts que bloqueen la carga)
- Las animaciones infinitas (cubo, anillos, flotación y orbes) son CSS, así las mueve la GPU sin ocupar el hilo principal; anime.js se usa para las entradas y las interacciones
- La onda del fondo empieza tras la entrada del contenido y se pausa cuando la pestaña no está visible

## Editar el contenido

Toda la información (perfil, experiencia, habilidades, proyectos y redes) está en [`src/data/profile.js`](src/data/profile.js). Los textos traducibles se escriben como `{ es: '…', en: '…' }`; los textos de la interfaz (botones, títulos) están en [`src/i18n/ui.js`](src/i18n/ui.js). Para agregar un proyecto basta con añadir un objeto al arreglo `projects`; no hace falta tocar los componentes.

El CV descargable está en [`public/CV-Leonardo-Pinto.pdf`](public/CV-Leonardo-Pinto.pdf): para actualizarlo, reemplaza ese archivo manteniendo el nombre (o cambia `cv` en `profile.js`).

## Estructura

```
src/
├── components/   # Header, Hero, About, Experience, Skills, Projects, Contact...
├── data/         # profile.js: todo el contenido del sitio
├── hooks/        # useTheme, useActiveSection, useAnimeScope (anime.js + React) y useTilt
├── i18n/         # Idiomas: textos de la interfaz, proveedor y useI18n
├── lib/          # motion.js: utilidades de animación compartidas
├── App.jsx
└── main.jsx
```

## Ejecutar en local

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173/Portafolio/
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build
```

## Despliegue

Cada push a `main` compila y publica el sitio en GitHub Pages mediante el workflow [`deploy-pages.yml`](.github/workflows/deploy-pages.yml).
