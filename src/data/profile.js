// Toda la información del portafolio vive aquí: edita este archivo para actualizar el sitio.
// Los textos traducibles van como { es, en }; el resto (nombres, enlaces, tecnologías) es igual en ambos idiomas.

export const profile = {
  name: 'Leonardo Pinto',
  alias: 'LeofaDev',
  role: { es: 'Desarrollador de Software Full Stack', en: 'Full Stack Software Developer' },
  headline: {
    es: 'Especializado en Laravel y PHP. Desarrollo software administrativo y contable para PyMES, enfocado en soluciones funcionales que respondan a necesidades reales.',
    en: 'Specialized in Laravel and PHP. I build administrative and accounting software for SMBs, focused on practical solutions that meet real business needs.',
  },
  location: 'Barranquilla, Colombia',
  email: 'pintoleonardo1023@gmail.com',
  about: [
    {
      es: 'Soy desarrollador Full Stack con experiencia construyendo software administrativo y contable con Laravel, PHP y MySQL. Me oriento a la mejora continua, la eficiencia operativa y a entregar soluciones que resuelvan problemas reales de los clientes.',
      en: 'I am a Full Stack developer with experience building administrative and accounting software with Laravel, PHP and MySQL. I focus on continuous improvement, operational efficiency and delivering solutions that solve real problems for clients.',
    },
    {
      es: 'Actualmente curso noveno semestre de Ingeniería de Sistemas y en mi tiempo libre desarrollo proyectos personales con React, Angular y React Native.',
      en: 'I am currently in the ninth semester of Systems Engineering, and in my free time I build personal projects with React, Angular and React Native.',
    },
  ],
  languages: { es: 'Español (nativo) · Inglés básico (A2)', en: 'Spanish (native) · English (basic, A2)' },
  // PDF dentro de /public; para actualizarlo basta con reemplazar el archivo
  cv: 'CV-Leonardo-Pinto.pdf',
  // Formulario de contacto (FormSubmit). Tras activarlo puedes cambiar el correo por el alias que te envían
  contactEndpoint: 'https://formsubmit.co/ajax/pintoleonardo1023@gmail.com',
};

// Cifras destacadas en "Sobre mí" (se animan con un contador)
export const stats = [
  { value: 2, suffix: '+', label: { es: 'Años de experiencia', en: 'Years of experience' } },
  { value: 9, suffix: { es: '.º', en: 'th' }, label: { es: 'Semestre de Ingeniería', en: 'Engineering semester' } },
  { value: 2, suffix: '', label: { es: 'Empresas', en: 'Companies' } },
];

export const experience = [
  {
    role: { es: 'Desarrollador de Software Full Stack', en: 'Full Stack Software Developer' },
    company: 'RoshPi',
    description: {
      es: 'Software administrativo y contable para PyMES',
      en: 'Administrative and accounting software for SMBs',
    },
    period: { es: 'Oct 2024 – Presente', en: 'Oct 2024 – Present' },
    highlights: [
      {
        es: 'Reconstruí por completo el módulo de restaurante, mejorando su estructura e integrándolo al ecosistema de la plataforma.',
        en: 'Fully rebuilt the restaurant module, improving its structure and integrating it into the platform ecosystem.',
      },
      {
        es: 'Desarrollé el módulo de remisiones de ventas para registrar y hacer seguimiento de entregas parciales.',
        en: 'Developed the sales delivery-notes module to record and track partial deliveries.',
      },
      {
        es: 'Implementé autenticación mediante clave dinámica, reforzando la seguridad de acceso al sistema.',
        en: 'Implemented dynamic-key authentication, strengthening access security.',
      },
      {
        es: 'Mejoras continuas de interfaz, rendimiento y nuevos requerimientos de clientes.',
        en: 'Continuous improvements to UI, performance and new client requirements.',
      },
    ],
  },
  {
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    company: 'Grupo Nutresa – Pastas Comarrico',
    description: { es: 'Empresa del sector de alimentos', en: 'Food industry company' },
    period: { es: 'Oct 2023 – Abr 2024', en: 'Oct 2023 – Apr 2024' },
    highlights: [
      {
        es: 'Desarrollé un sistema web de alarmas para la fumigación de vehículos con alertas automáticas 4 días antes del vencimiento.',
        en: 'Built a web alert system for vehicle fumigation with automatic reminders 4 days before expiration.',
      },
      {
        es: 'Construí un módulo de control de averías con formularios dinámicos según el código de producto.',
        en: 'Built a damage-control module with dynamic forms based on the product code.',
      },
      {
        es: 'Automaticé el reporte de entrega de turno: generación de PDF, envío por Gmail y almacenamiento en Drive.',
        en: 'Automated the shift-handover report: PDF generation, delivery via Gmail and storage in Drive.',
      },
      {
        es: 'Digitalicé procesos logísticos manuales, reduciendo reprocesos y mejorando la trazabilidad.',
        en: 'Digitized manual logistics processes, reducing rework and improving traceability.',
      },
    ],
  },
];

export const education = [
  {
    title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
    institution: 'Politécnico Costa Atlántica (UPCA)',
    period: { es: 'Noveno semestre', en: '9th semester' },
  },
  {
    title: { es: 'Tecnólogo en Desarrollo de Software', en: 'Software Development Technologist' },
    institution: 'Politécnico Costa Atlántica (UPCA)',
    period: '2025',
  },
  {
    title: { es: 'Tecnólogo en Análisis y Desarrollo de Software', en: 'Software Analysis and Development Technologist' },
    institution: 'SENA',
    period: '2022 – 2024',
  },
  {
    title: { es: 'Técnico en Programación de Software', en: 'Software Programming Technician' },
    institution: 'SENA',
    period: '2020 – 2021',
  },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/leofadev', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leonardo-pinto-b72b1a24a', icon: 'linkedin' },
];

// `icon`: server | layout | database | tool
export const skills = [
  { icon: 'server', group: 'Backend', items: ['PHP', 'Laravel', { es: 'API REST', en: 'REST API' }] },
  {
    icon: 'layout',
    group: 'Frontend',
    items: ['JavaScript', 'jQuery', 'Blade', 'React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Apps Script'],
  },
  {
    icon: 'database',
    group: { es: 'Bases de datos', en: 'Databases' },
    items: ['MySQL', 'phpMyAdmin', 'MySQL Workbench'],
  },
  {
    icon: 'tool',
    group: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'Jira', 'Trello', 'Postman', 'VS Code', 'Laragon', 'XAMPP', 'npm', 'Looker Studio'],
  },
];

const GITHUB = 'https://github.com/leofadev';
const PAGES = 'https://leofadev.github.io';
const REST = { es: 'API REST', en: 'REST API' };

// Cada proyecto puede tener `image` (captura en /public) o `cover` (iconos para la portada ilustrada)
export const projects = [
  {
    title: 'Pinto Music',
    description: {
      es: 'App de música con inicio de sesión, catálogo de artistas, álbumes y canciones desde una API, favoritos y modo oscuro.',
      en: 'Music app with sign-in, a catalog of artists, albums and songs from an API, favorites and dark mode.',
    },
    tags: ['Ionic', 'Angular', 'TypeScript', REST],
    image: 'projects/pintomusic.webp',
    cover: ['ionic', 'angular', 'typescript'],
    repo: `${GITHUB}/pintoMusic`,
    demo: `${PAGES}/pintoMusic/`,
  },
  {
    title: 'Soccer Project',
    description: {
      es: 'App móvil para gestionar una liga de fútbol: equipos, jugadores, partidos, tabla de posiciones y goleadores.',
      en: 'Mobile app to manage a soccer league: teams, players, matches, standings and top scorers.',
    },
    tags: ['React Native', 'Expo', 'TypeScript'],
    cover: ['react', 'expo', 'typescript'],
    repo: `${GITHUB}/SoccerProject`,
  },
  {
    title: 'Rick and Morty Explorer',
    description: {
      es: 'Explorador de personajes con búsqueda, filtros, paginación, favoritos y ficha con episodios, sobre la API oficial.',
      en: 'Character explorer with search, filters, pagination, favorites and a detail view with episodes, built on the official API.',
    },
    tags: ['React', 'anime.js', REST],
    image: 'projects/rick.webp',
    cover: ['react', 'vite'],
    repo: `${GITHUB}/API-RICK-AND-MORTY`,
    demo: `${PAGES}/API-RICK-AND-MORTY/`,
  },
  {
    title: 'Jurassic Archive',
    description: {
      es: 'Catálogo de 40 especies de la saga con búsqueda, filtros, favoritos y ficha con galería; datos desde Google Sheets.',
      en: 'Catalog of 40 species from the saga with search, filters, favorites and a gallery view; data served from Google Sheets.',
    },
    tags: ['React', 'anime.js', 'Apps Script'],
    image: 'projects/jurassic.webp',
    cover: ['react', 'vite', 'appsscript'],
    repo: `${GITHUB}/JurassicApp`,
    demo: `${PAGES}/JurassicApp/`,
  },
  {
    title: { es: 'API REST de libros', en: 'Books REST API' },
    description: {
      es: 'API CRUD para administrar libros con Express conectada a una base de datos MySQL.',
      en: 'CRUD API to manage books, built with Express and connected to a MySQL database.',
    },
    tags: ['Node.js', 'Express', 'MySQL'],
    cover: ['node', 'express', 'mysql'],
    repo: `${GITHUB}/api_rest`,
  },
  {
    title: { es: 'API REST de actores', en: 'Actors REST API' },
    description: {
      es: 'Servicio REST con Spring Boot y JPA para gestionar actores.',
      en: 'REST service built with Spring Boot and JPA to manage actors.',
    },
    tags: ['Java', 'Spring Boot', 'JPA'],
    cover: ['java', 'springboot', 'hibernate'],
    repo: `${GITHUB}/ApiRest`,
  },
];
