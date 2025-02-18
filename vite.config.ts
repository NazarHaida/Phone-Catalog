import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Phone-Catalog/', // <--- [NEW] add this line
  resolve: {
    alias: {
      'react-redux': require.resolve('react-redux'),
    },
  },
})
