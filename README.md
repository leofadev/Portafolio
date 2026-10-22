# Portafolio

Portafolio personal de **Leonardo Pinto (LeofaDev)**, desarrollador de software especializado en Laravel, PHP y MySQL.

🔗 **Demo:** [leofadev.github.io/Portafolio](https://leofadev.github.io/Portafolio/)

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (con SWC)
- CSS propio con tema claro/oscuro (sin frameworks de estilos)
- [React Icons](https://react-icons.github.io/react-icons/)

## Secciones

Página única con navegación por anclas: **Inicio**, **Sobre mí** (experiencia y educación), **Habilidades**, **Proyectos** y **Contacto**.

## Editar el contenido

Toda la información (perfil, experiencia, habilidades, proyectos y redes) está en [`src/data/profile.js`](src/data/profile.js). Para agregar un proyecto basta con añadir un objeto al arreglo `projects`; no hace falta tocar los componentes.

## Estructura

```
src/
├── components/   # Header, Hero, About, Skills, Projects, Contact, Footer...
├── data/         # profile.js: todo el contenido del sitio
├── hooks/        # useTheme (tema claro/oscuro) y useReveal (animación al hacer scroll)
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
