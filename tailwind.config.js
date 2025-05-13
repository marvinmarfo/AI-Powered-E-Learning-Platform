/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          50: 'rgb(var(--color-primary) / 0.05)',
          100: 'rgb(var(--color-primary) / 0.1)',
          200: 'rgb(var(--color-primary) / 0.2)',
          300: 'rgb(var(--color-primary) / 0.3)',
          400: 'rgb(var(--color-primary) / 0.4)',
          500: 'rgb(var(--color-primary) / 0.5)',
          600: 'rgb(var(--color-primary) / 0.6)',
          700: 'rgb(var(--color-primary) / 0.7)',
          800: 'rgb(var(--color-primary) / 0.8)',
          900: 'rgb(var(--color-primary) / 0.9)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          50: 'rgb(var(--color-secondary) / 0.05)',
          100: 'rgb(var(--color-secondary) / 0.1)',
          200: 'rgb(var(--color-secondary) / 0.2)',
          300: 'rgb(var(--color-secondary) / 0.3)',
          400: 'rgb(var(--color-secondary) / 0.4)',
          500: 'rgb(var(--color-secondary) / 0.5)',
          600: 'rgb(var(--color-secondary) / 0.6)',
          700: 'rgb(var(--color-secondary) / 0.7)',
          800: 'rgb(var(--color-secondary) / 0.8)',
          900: 'rgb(var(--color-secondary) / 0.9)',
        },
        success: {
          DEFAULT: 'rgb(var(--color-success))',
          50: 'rgb(var(--color-success) / 0.05)',
          100: 'rgb(var(--color-success) / 0.1)',
          500: 'rgb(var(--color-success) / 0.5)',
          900: 'rgb(var(--color-success) / 0.9)',
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning))',
          50: 'rgb(var(--color-warning) / 0.05)',
          100: 'rgb(var(--color-warning) / 0.1)',
          500: 'rgb(var(--color-warning) / 0.5)',
          900: 'rgb(var(--color-warning) / 0.9)',
        },
        error: {
          DEFAULT: 'rgb(var(--color-error))',
          50: 'rgb(var(--color-error) / 0.05)',
          100: 'rgb(var(--color-error) / 0.1)',
          500: 'rgb(var(--color-error) / 0.5)',
          900: 'rgb(var(--color-error) / 0.9)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '92': '23rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}