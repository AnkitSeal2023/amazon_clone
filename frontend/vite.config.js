import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/signup': {
        target: 'http://localhost:5000/',
      },
      '/cart': {
        target: 'http://localhost:5000/',
        changeOrigin: true,  // Ensures that the host header is changed to the target
        secure: false,  // If you're not using HTTPS, set this to false
      },

      '/updatecart': {
        target: 'http://localhost:5000/',
      },
      '/checkEmail': {
        target: 'http://localhost:5000/',
      },
      '/checkPassword': {
        target: 'http://localhost:5000/',
      },
      '/products': {
        target: 'http://localhost:5173',
        rewrite: (path) => '/Product.html',
        changeOrigin: true,
        secure: false,
      },
      '/product': {
        target: 'http://localhost:5000/',
      },
    },
  },
  plugins: [react()],
})
