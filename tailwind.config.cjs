module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2D8B7A',  // Lighter teal (derived from 256D66)
          DEFAULT: '#104E4A', // Deep teal-green
          dark: '#03202B',   // Darkest blue-black
        },
        secondary: {
          light: '#256D66',   // Muted teal
          DEFAULT: '#124549', // Dark teal-blue
          dark: '#15333A',    // Deep slate blue
        },
        accent: {
          light: '#3AA89E',   // Bright teal
          DEFAULT: '#1D7A6B', // Vibrant teal
          dark: '#0D4D47',    // Dark teal
        },
        background: {
          light: '#F8F9FA',   // Light mode (unchanged)
          DEFAULT: '#FFFFFF', // Light mode (unchanged)
          dark: '#03202B',    // Darkest blue-black (from palette)
        },
        text: {
          light: '#E0F2F1',   // Pale teal-tinged white
          DEFAULT: '#333333',  // Dark gray (unchanged)
          dark: '#C8F0EB',     // Soft teal-white (for readability)
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        state: {
          success: '#2D8B7A',  // Teal (matches primary.light)
          warning: '#FFAB00',  // Amber (unchanged for visibility)
          error: '#EF4444',    // Red (unchanged for alerts)
          info: '#3AA89E',     // Bright teal (accent.light)
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'btn': '0 4px 14px 0 rgba(16, 78, 74, 0.3)',
        'btn-active': '0 4px 18px 0 rgba(16, 78, 74, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-dark': '0 4px 6px -1px rgba(45, 139, 122, 0.15), 0 2px 4px -1px rgba(45, 139, 122, 0.1)',
        'glow': '0 0 15px rgba(45, 139, 122, 0.5)',
        'glow-lg': '0 0 25px rgba(45, 139, 122, 0.7)',
        'inner-glow': 'inset 0 0 10px rgba(45, 139, 122, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'border-pulse': 'borderPulse 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        borderPulse: {
          '0%, 100%': { 'border-color': 'rgba(16, 78, 74, 0.5)' },
          '50%': { 'border-color': 'rgba(45, 139, 122, 0.9)' },
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',

      },
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60H0V0h60zm-1 1H1v58h58V1z' stroke='white' stroke-opacity='0.05' fill='none'/%3E%3C/svg%3E\")",
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'filter': 'filter, backdrop-filter',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover', 'dark', 'disabled', 'even', 'odd'],
      textColor: ['active', 'group-hover', 'dark', 'disabled'],
      opacity: ['disabled', 'group-hover'],
      scale: ['active', 'group-hover', 'hover'],
      animation: ['hover', 'focus', 'group-hover'],
      boxShadow: ['active', 'dark', 'hover', 'focus'],
      borderColor: ['dark', 'active', 'focus', 'hover'],
      backdropBlur: ['hover', 'focus'],
      backdropFilter: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-text-fill'),
  ],
}