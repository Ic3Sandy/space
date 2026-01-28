/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Colors
        'space-black': '#000000',
        'void-deep': '#0a0a0f',
        'void-medium': '#121218',
        'cosmic-blue': '#1a1a3e',
        'cosmic-blue-light': '#2d3561',

        // Accent Colors
        'gold': '#d4af37',
        'amber': '#ffa500',
        'amber-glow': 'rgba(255, 165, 0, 0.3)',

        // Nebula Colors
        'nebula-purple': '#8b5cf6',
        'nebula-pink': '#ec4899',
        'nebula-blue': '#3b82f6',

        // Grays
        'gray-light': '#e5e7eb',
        'gray-medium': '#9ca3af',
        'gray-dark': '#4b5563',
      },
      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 20px rgba(255, 165, 0, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
      backdropBlur: {
        '10': '10px',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
      borderRadius: {
        '12': '12px',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        twinkle: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.3',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(255, 165, 0, 0.3)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(255, 165, 0, 0.3), 0 0 30px rgba(255, 165, 0, 0.3)',
          },
        },
        'float-particle': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -30px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(-15px, -60px) scale(0.9)',
          },
          '75%': {
            transform: 'translate(25px, -40px) scale(1.05)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s infinite',
        'float-particle': 'float-particle infinite ease-in-out',
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(to bottom, #000000 0%, #0a0a0f 50%, #1a1a3e 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #ffa500 50%, #8b5cf6 100%)',
        'gradient-amber': 'linear-gradient(135deg, #ffa500, #d4af37)',
      },
    },
  },
  plugins: [],
}
