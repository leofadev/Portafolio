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

## Editar el contenido

Toda la información (perfil, experiencia, habilidades, proyectos y redes) está en [`src/data/profile.js`](src/data/profile.js). Para agregar un proyecto basta con añadir un objeto al arreglo `projects`; no hace falta tocar los componentes.

El CV descargable está en [`public/CV-Leonardo-Pinto.pdf`](public/CV-Leonardo-Pinto.pdf): para actualizarlo, reemplaza ese archivo manteniendo el nombre (o cambia `cv` en `profile.js`).

## Estructura

```
src/
├── components/   # Header, Hero, About, Experience, Skills, Projects, Contact...
├── data/         # profile.js: todo el contenido del sitio
├── hooks/        # useTheme, useActiveSection, useAnimeScope (anime.js + React) y useTilt
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
