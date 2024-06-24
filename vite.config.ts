import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@pages': resolve(__dirname, 'src/pages/index.ts'),
      '@reducers': resolve(__dirname, 'src/store/reducers'),
      '@selectors': resolve(__dirname, 'src/store/selectors'),
      '@store': resolve(__dirname, 'src/store/store.ts'),
      '@actions': resolve(__dirname, 'src/store/actions'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@layout': resolve(__dirname, 'src/layout'),
    },
  }
})
