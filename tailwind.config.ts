import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'drweb-green': '#16a34a',
        'drweb-green-dark': '#15803d',
        'drweb-green-light': '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bouncy': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'butter': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-complex': 'float-complex 20s infinite linear',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-up': 'slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'progress': 'progress 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'tech-scan': 'tech-scan 8s infinite linear',
        'stars-twinkle': 'stars-twinkle 10s infinite linear',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'text-pop': 'textPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'holographic': 'holographicShift 4s ease-in-out infinite',
        'particle-float': 'particleFloat 6s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-15px) rotate(5deg)' 
          }
        },
        'float-complex': {
          '0%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)'
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px) rotate(90deg)'
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-10px) rotate(180deg)'
          },
          '75%': {
            transform: 'translateY(-30px) translateX(5px) rotate(270deg)'
          },
          '100%': {
            transform: 'translateY(0px) translateX(0px) rotate(360deg)'
          }
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-60px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(60px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        progress: {
          from: {
            width: '0%'
          },
          to: {
            width: '100%'
          }
        },
        'tech-scan': {
          '0%': {
            'background-position': '-200px 0, 0 -200px'
          },
          '50%': {
            'background-position': '200px 0, 0 200px'
          },
          '100%': {
            'background-position': '400px 0, 0 400px'
          }
        },
        'stars-twinkle': {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)'
          }
        },
        textPop: {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        holographicShift: {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        },
        particleFloat: {
          '0%': {
            transform: 'translateY(100vh) translateX(0) rotate(0deg)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100px) translateX(100px) rotate(360deg)',
            opacity: '0'
          }
        }
      },
      boxShadow: {
        'green': '0 10px 25px rgba(22, 163, 74, 0.15)',
        'green-lg': '0 20px 40px rgba(22, 163, 74, 0.2)',
        'green-xl': '0 25px 50px rgba(22, 163, 74, 0.25)',
        'neon-green': '0 0 5px rgba(22, 163, 74, 0.4), 0 0 10px rgba(22, 163, 74, 0.3), 0 0 15px rgba(22, 163, 74, 0.2), 0 0 20px rgba(22, 163, 74, 0.1)',
        'neon-blue': '0 0 5px rgba(59, 130, 246, 0.4), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '97': '0.97',
        '98': '0.98',
      }
    },
  },
  plugins: [],
}

export default config 