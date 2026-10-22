// Toda la información del portafolio vive aquí: edita este archivo para actualizar el sitio.

export const profile = {
  name: 'Leonardo Pinto',
  alias: 'LeofaDev',
  role: 'Desarrollador de Software',
  headline: 'Construyo aplicaciones web con Laravel, PHP y MySQL, y las acompaño con interfaces en React.',
  location: 'Colombia',
  email: 'pintoleonardo1023@gmail.com',
  about: [
    'Soy desarrollador de software enfocado en el backend con Laravel y PHP. Trabajo a diario construyendo, optimizando y manteniendo aplicaciones web, desde el modelo de datos en MySQL hasta las vistas en Blade y JavaScript.',
    'Actualmente estudio Ingeniería de Sistemas y en mi tiempo libre desarrollo proyectos personales con React, Angular y React Native para seguir ampliando mi stack.',
  ],
};

export const experience = [
  { company: 'RoshPi SAS', role: 'Desarrollador de Software', period: 'Actual' },
  { company: 'Pastas Comarrico · Grupo Nutresa', role: 'Desarrollador de Software', period: 'Anterior' },
];

export const education = [
  { title: 'Ingeniería de Sistemas', period: 'En curso' },
  { title: 'Técnico en Programación de Software', period: 'Finalizado' },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/leofadev', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leonardo-pinto-b72b1a24a', icon: 'linkedin' },
  { name: 'Stack Overflow', url: 'https://es.stackoverflow.com/users/370778/leonardo-pinto', icon: 'stackoverflow' },
];

export const skills = [
  { group: 'Backend', items: ['PHP', 'Laravel', 'MySQL', 'Node.js', 'API REST'] },
  { group: 'Frontend', items: ['JavaScript', 'React', 'Blade', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'jQuery'] },
  { group: 'Herramientas', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Bash'] },
];

const GITHUB = 'https://github.com/leofadev';
const PAGES = 'https://leofadev.github.io';

export const projects = [
  {
    title: 'Pinto Music',
    description: 'App de música con registro e inicio de sesión, catálogo de artistas, álbumes y canciones consumido desde una API, favoritos y modo oscuro.',
    tags: ['Ionic', 'Angular', 'TypeScript', 'API REST'],
    repo: `${GITHUB}/pintoMusic`,
    demo: `${PAGES}/pintoMusic/`,
  },
  {
    title: 'Soccer Project',
    description: 'App móvil para gestionar una liga de fútbol: equipos, jugadores, partidos, tabla de posiciones y goleadores.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    repo: `${GITHUB}/SoccerProject`,
  },
  {
    title: 'Rick and Morty Explorer',
    description: 'Listado paginado de personajes de Rick and Morty consumiendo la API pública oficial.',
    tags: ['React', 'Vite', 'Bootstrap', 'API REST'],
    repo: `${GITHUB}/API-RICK-AND-MORTY`,
    demo: `${PAGES}/API-RICK-AND-MORTY/`,
  },
  {
    title: 'Jurassic App',
    description: 'Catálogo de dinosaurios de la saga Jurassic Park con datos servidos desde Google Sheets mediante Apps Script.',
    tags: ['React', 'Vite', 'Google Apps Script'],
    repo: `${GITHUB}/JurassicApp`,
    demo: `${PAGES}/JurassicApp/`,
  },
  {
    title: 'API REST de libros',
    description: 'API CRUD para administrar libros con Express conectada a una base de datos MySQL.',
    tags: ['Node.js', 'Express', 'MySQL'],
    repo: `${GITHUB}/api_rest`,
  },
  {
    title: 'API REST de actores',
    description: 'Servicio REST con Spring Boot y JPA para gestionar actores.',
    tags: ['Java', 'Spring Boot', 'JPA'],
    repo: `${GITHUB}/ApiRest`,
  },
];
