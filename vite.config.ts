import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Michael Any',
        short_name: 'michaelany',
        description:
          'Portfolio project of Michael Any, Frontend Developer & Lead Software Engineer',
        start_url: '.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#61dafb',
        background_color: '#fff',
        icons: [
          {
            src: '/assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/assets/preview.jpg',
            sizes: '1200x630',
            type: 'image/jpg',
          },
        ],
      },
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: Object.fromEntries(
      ['assets', 'components', 'data', 'styles', 'utils', 'translations'].map(
        (item) => [`@${item}`, `/src/${item}`]
      )
    ),
  },
})
