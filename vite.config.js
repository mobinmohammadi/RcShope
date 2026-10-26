import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'], // این خط را اضافه کنید
  },


  resolve: {
    // این بخش تضمین می‌کند که Vite فایل‌های .mjs را به عنوان ماژول ES کامل بشناسد
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
