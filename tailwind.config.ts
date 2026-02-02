import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        warm: {
          DEFAULT: 'hsl(var(--warm))',
          light: 'hsl(var(--warm-light))',
        },
        coral: {
          DEFAULT: 'hsl(var(--coral))',
          light: 'hsl(var(--coral-light))',
        },
        lavender: {
          DEFAULT: 'hsl(var(--lavender))',
          light: 'hsl(var(--lavender-light))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'warm': '0 10px 40px -10px hsl(var(--coral) / 0.3)',
        'glow': '0 0 30px hsl(var(--coral) / 0.2)',
        'card': '0 4px 20px -4px hsl(var(--foreground) / 0.1)',
        'float': '0 20px 50px -15px hsl(var(--coral) / 0.25)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, hsl(var(--coral)), hsl(var(--lavender)))',
        'gradient-card': 'linear-gradient(180deg, hsl(var(--card)), hsl(var(--warm-light)))',
        'gradient-soft': 'linear-gradient(135deg, hsl(var(--coral-light)), hsl(var(--lavender-light)))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'magic-reveal': 'magic-reveal 0.8s ease-out',
        'card-flip': 'card-flip 0.6s ease-in-out',
        'tada': 'tada 1s ease-in-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'magic-reveal': {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        'card-flip': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        'tada': {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-5deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(5deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-5deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
