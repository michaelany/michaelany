import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
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
