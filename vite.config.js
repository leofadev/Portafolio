import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as profileData from './src/data/profile.js'
import { noscriptContent, seoHead } from './src/lib/seo.js'

// Inserta en index.html los datos estructurados y el contenido para buscadores, generados desde profile.js
const seo = () => ({
  name: 'seo',
  transformIndexHtml(html) {
    return html
      .replace('</head>', `    ${seoHead(profileData)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscriptContent(profileData)}`)
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
  base: '/Portafolio/',
})
