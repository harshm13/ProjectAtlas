/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#030712',
        cardDark: '#111827',
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.5)'
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          glow: 'rgba(139, 92, 246, 0.5)'
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.5)'
        },
        textLight: '#F9FAFB',
        textMuted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
