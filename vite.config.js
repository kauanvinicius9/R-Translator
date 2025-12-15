import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Adiciona o plugin do Tailwind CSS no Vite
      name: 'vite-plugin-tailwindcss',
      transformIndexHtml(html) {
        return html.replace(
          /<\/body>/,
          `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet"></body>`
        )
      }
    }
  ],
})
