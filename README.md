# Portafolio

Portafolio personal de **Leonardo Pinto (LeofaDev)**, analista y desarrollador de software. Presenta quién soy y los proyectos que he realizado.

🔗 **Demo:** [leofadev.github.io/Portafolio](https://leofadev.github.io/Portafolio/)

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (con SWC)
- [React Router](https://reactrouter.com/) para la navegación entre secciones
- [Bootstrap 5](https://getbootstrap.com/) para el diseño responsive
- [AOS](https://michalsnik.github.io/aos/) para animaciones al hacer scroll
- [React Icons](https://react-icons.github.io/react-icons/)

## Secciones

| Ruta | Contenido |
|---|---|
| `/` | Quién soy: presentación y redes |
| `/programs` | Proyectos realizados *(en desarrollo)* |
| `/characteristics` | Tecnologías y habilidades *(en desarrollo)* |

## Estructura

```
src/
├── components/   # Header, Nav, Footer, Card, Button y secciones
├── App.jsx       # Definición de rutas
└── main.jsx      # Punto de entrada (BrowserRouter)
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
