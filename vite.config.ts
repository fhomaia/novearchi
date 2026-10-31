import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from 'vite-imagetools'

// Static hosts answer 404 for client-side routes on a direct access, so each
// route gets its own copy of the entry HTML.
const spaRoutes = (routes: string[]): Plugin => ({
  name: 'spa-routes',
  apply: 'build',
  closeBundle() {
    for (const route of routes) {
      mkdirSync(resolve('dist', route), { recursive: true })
      copyFileSync(resolve('dist/index.html'), resolve('dist', route, 'index.html'))
    }
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Originals stay in src/assets; only these optimized versions are deployed.
    // An import can override the defaults, e.g. photo.jpg?w=800
    imagetools({
      include: /^[^?]+\.(jpe?g|JPG)(\?.*)?$/,
      defaultDirectives: new URLSearchParams({
        w: '1600',
        withoutEnlargement: 'true',
        format: 'webp',
        quality: '78',
      }),
    }),
    spaRoutes(['about']),
  ],
  base: '/',
});
