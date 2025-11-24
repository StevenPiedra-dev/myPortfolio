// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si vas a usar usuario.github.io (repo con nombre = username.github.io) usa base: '/'
export default defineConfig({
  base: '/myPortfolio/', 
  plugins: [react()]
})