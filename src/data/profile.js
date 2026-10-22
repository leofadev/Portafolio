// Toda la información del portafolio vive aquí: edita este archivo para actualizar el sitio.

export const profile = {
  name: 'Leonardo Pinto',
  alias: 'LeofaDev',
  role: 'Desarrollador de Software Full Stack',
  headline: 'Especializado en Laravel y PHP. Desarrollo software administrativo y contable para PyMES, enfocado en soluciones funcionales que respondan a necesidades reales.',
  location: 'Barranquilla, Colombia',
  email: 'pintoleonardo1023@gmail.com',
  about: [
    'Soy desarrollador Full Stack con experiencia construyendo software administrativo y contable con Laravel, PHP y MySQL. Me oriento a la mejora continua, la eficiencia operativa y a entregar soluciones que resuelvan problemas reales de los clientes.',
    'Actualmente curso noveno semestre de Ingeniería de Sistemas y en mi tiempo libre desarrollo proyectos personales con React, Angular y React Native.',
  ],
  languages: 'Español (nativo) · Inglés básico (A2)',
  // PDF dentro de /public; para actualizarlo basta con reemplazar el archivo
  cv: 'CV-Leonardo-Pinto.pdf',
};

// Cifras destacadas en "Sobre mí" (se animan con un contador)
export const stats = [
  { value: 2, suffix: '+', label: 'Años de experiencia' },
  { value: 9, suffix: '.º', label: 'Semestre de Ingeniería' },
  { value: 2, suffix: '', label: 'Empresas' },
];

export const experience = [
  {
    role: 'Desarrollador de Software Full Stack',
    company: 'RoshPi',
    description: 'Software administrativo y contable para PyMES',
    period: 'Oct 2024 – Presente',
    highlights: [
      'Reconstruí por completo el módulo de restaurante, mejorando su estructura e integrándolo al ecosistema de la plataforma.',
      'Desarrollé el módulo de remisiones de ventas para registrar y hacer seguimiento de entregas parciales.',
      'Implementé autenticación mediante clave dinámica, reforzando la seguridad de acceso al sistema.',
      'Mejoras continuas de interfaz, rendimiento y nuevos requerimientos de clientes.',
    ],
  },
  {
    role: 'Desarrollador de Software',
    company: 'Grupo Nutresa – Pastas Comarrico',
    description: 'Empresa del sector de alimentos',
    period: 'Oct 2023 – Abr 2024',
    highlights: [
      'Desarrollé un sistema web de alarmas para la fumigación de vehículos con alertas automáticas 4 días antes del vencimiento.',
      'Construí un módulo de control de averías con formularios dinámicos según el código de producto.',
      'Automaticé el reporte de entrega de turno: generación de PDF, envío por Gmail y almacenamiento en Drive.',
      'Digitalicé procesos logísticos manuales, reduciendo reprocesos y mejorando la trazabilidad.',
    ],
  },
];

export const education = [
  { title: 'Ingeniería de Sistemas', institution: 'Politécnico Costa Atlántica (UPCA)', period: 'Noveno semestre' },
  { title: 'Tecnólogo en Desarrollo de Software', institution: 'Politécnico Costa Atlántica (UPCA)', period: '2025' },
  { title: 'Tecnólogo en Análisis y Desarrollo de Software', institution: 'SENA', period: '2022 – 2024' },
  { title: 'Técnico en Programación de Software', institution: 'SENA', period: '2020 – 2021' },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/leofadev', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leonardo-pinto-b72b1a24a', icon: 'linkedin' },
];

export const skills = [
  { group: 'Backend', items: ['PHP', 'Laravel', 'API REST'] },
  { group: 'Frontend', items: ['JavaScript', 'jQuery', 'Blade', 'React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Apps Script'] },
  { group: 'Bases de datos', items: ['MySQL', 'phpMyAdmin', 'MySQL Workbench'] },
  { group: 'Herramientas', items: ['Git', 'Jira', 'Trello', 'Postman', 'VS Code', 'Laragon', 'XAMPP', 'npm', 'Looker Studio'] },
];

const GITHUB = 'https://github.com/leofadev';
const PAGES = 'https://leofadev.github.io';

export const projects = [
  {
    title: 'Pinto Music',
    description: 'App de música con inicio de sesión, catálogo de artistas, álbumes y canciones desde una API, favoritos y modo oscuro.',
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
    description: 'Catálogo de dinosaurios de Jurassic Park con datos servidos desde Google Sheets mediante Apps Script.',
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
