import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  extend: {
        fontFamily: {
          sans: ['"Open Sans"', 'sans-serif'],
          Merriweather: ['"Merriweather"', 'serif'],
          mono: ['"Courier New"', 'monospace'],
          playfair:['"Playfair Display"', 'serif'],
          lato:['"Lato"', 'sans-serif'],
          EduNSW: ['"Edu NSW ACT Hand Pre"', 'cursive'],
          DancingScript: ['"Dancing Script"', 'cursive'],
          Sevillana:['"Sevillana"', 'cursive'],
          // Alfred:['"Alfredo"', 'cursive'],
          AlfaSlab:['"Alfa Slab One"', 'serif'],
          FiraSANS:['"Fira Sans"', 'sans-serif'],
          Poppinsthin:['"Poppins"', 'sans-serif'],
          Oswald:['"Oswald"', 'sans-serif'],
        },
        colors: {
          primary: ['#1a202c'], // Dark gray
          secondary: ['#2d3748'], // Slightly lighter gray
          accent: ['#4a5568'], // Even lighter gray
          highlight: ['#718096'], // Light gray
          background: ['#f7fafc'], // Very light gray
          TextingCO: ['#2d3748'], // Text color
          link: ['#3182ce'], // Blue for links
          linkHover: ['#63b3ed'], // Lighter blue on hover
          border: ['#e2e8f0'], // Light border color
          error: ['#e53e3e'], // Red for errors
          success: ['#48bb78'], // Green for success messages
          warning: ['#dd6b20'], // Orange for warnings
          info: ['#3182ce'], // Blue for informational messages
          navy: ['#043040'],
          gold: ['#cda274'],
          ashy: ['#555555'],
          orangeWhite: ['#f3e9df'],
          Blackgray : ['#171a22'],
          Greywhite:['#f8f8f8'],
          greyash: ['#dde1e4'],
          Ashy: ['#d6d6d6'],
          ArmyGreen:['#869791'],
          Blackberry:['#1e2529'],
          airforce: ['#41494b'],
        },
     },
});
