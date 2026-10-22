# Portafolio

Portafolio personal de **Leonardo Pinto (LeofaDev)**, desarrollador Full Stack especializado en Laravel, PHP y MySQL.

🔗 **Demo:** [leofadev.github.io/Portafolio](https://leofadev.github.io/Portafolio/)

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (con SWC)
- CSS propio con tema claro/oscuro (sin frameworks de estilos)
- [React Icons](https://react-icons.github.io/react-icons/)

## Secciones

Landing de una sola pantalla: el menú muestra una sección a la vez (sin scroll entre secciones). Secciones: **Inicio**, **Sobre mí** (educación e idiomas), **Experiencia**, **Habilidades**, **Proyectos** y **Contacto**.

## Editar el contenido

Toda la información (perfil, experiencia, habilidades, proyectos y redes) está en [`src/data/profile.js`](src/data/profile.js). Para agregar un proyecto basta con añadir un objeto al arreglo `projects`; no hace falta tocar los componentes.

## Estructura

```
src/
├── components/   # Header, Hero, About, Experience, Skills, Projects, Contact...
├── data/         # profile.js: todo el contenido del sitio
├── hooks/        # useTheme (tema claro/oscuro) y useActiveSection (sección activa según el hash de la URL)
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
