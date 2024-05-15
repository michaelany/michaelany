import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'assets/logo.svg',
        'assets/safari-pinned-tab.svg',
        'assets/apple-touch-icon.png',
      ],
      manifest: {
        name: 'Michael Any',
        short_name: 'Michael Any',
        description:
          'Personal website of Michael Any, a frontend developer & lead software engineer',
        start_url: '.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'assets/preview.jpg',
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @import 'src/styles/variables.scss';
          @import 'src/styles/mixins.scss';
        `,
      },
    },
  },
})
