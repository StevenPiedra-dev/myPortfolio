// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REEMPLAZA '/repo-name/' por el nombre de tu repo (con slash inicial y final)
// Si vas a usar usuario.github.io (repo con nombre = username.github.io) usa base: '/'
export default defineConfig({
  base: '/MyPortfolio/', 
  plugins: [react()]
})