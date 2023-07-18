import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: { sourcemap: mode === 'development' },
  plugins: [react(), jsconfigPaths(), svgr()],
  server: {
    open: true,
    port: 8080,
  },
}))
