/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Brand Colors - Elite Performance
      colors: {
        brand: {
          deepest: '#0A0A0A',    // Primary background
          deep: '#121212',       // Secondary background
          elevated: '#1C1C1C',   // Cards/Hover
          red: {
            primary: '#D12D30',  // Main accent
            bright: '#E13C3E',   // CTAs
            glow: '#F04C50',     // High-attention
          },
          text: {
            primary: '#FAFAFA',
            secondary: '#B8B8B8',
          }
        }
      },
      
      // Typography
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'Outfit', 'sans-serif'],
        'italic': ['Inter Italic', 'sans-serif'],
      },
      
      // Background Images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'carbon-fiber': "url('/textures/carbon-fiber.png')",
        'grain': "url('/textures/grain-overlay.png')",
      },
      
      // Effects
      boxShadow: {
        'glow': '0 0 20px rgba(240, 76, 80, 0.3)',
        'glow-strong': '0 0 40px rgba(240, 76, 80, 0.5)',
      }
    },
  },
  plugins: [],
}
