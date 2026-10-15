export default {

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {

    extend: {

      colors: {

        ivory: {

          DEFAULT: '#F2EBDD',

          50: '#FAF6EC',

          100: '#F2EBDD',

          200: '#E7DCC4',

          300: '#D8C9A8',

        },

        plum: {

          DEFAULT: '#241811',

          50: '#A3917B',

          100: '#8A7458',

          200: '#5E4630',

          300: '#3A291B',

          400: '#241811',

          500: '#1C120B',

          600: '#130C07',

        },

        espresso: {

          DEFAULT: '#170E08',

          50: '#6E5A46',

          100: '#4E3C2C',

          200: '#352517',

          300: '#170E08',

          400: '#0D0703',

        },

        mauve: {

          DEFAULT: '#A8977C',

          light: '#C6BAA4',

          dark: '#87735A',

        },

        brass: {

          DEFAULT: '#C4562A',

          light: '#E0794B',

          dark: '#94391A',

        },

        sage: {

          DEFAULT: '#9AA894',

          light: '#C2CDBB',

          dark: '#778A70',

        },

      },

      fontFamily: {

        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],

        sans: ['Manrope', 'system-ui', 'sans-serif'],

      },

      letterSpacing: {

        'wide-2': '0.15em',

        'wide-3': '0.22em',

        'wide-4': '0.32em',

      },

      animation: {

        'fade-up': 'fadeUp 0.8s ease-out forwards',

        'fade-in': 'fadeIn 1s ease-out forwards',

        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',

        marquee: 'marquee 30s linear infinite',

        float: 'floatY 7s ease-in-out infinite',

        'float-slow': 'floatY 11s ease-in-out infinite',

        ember: 'emberPulse 3.2s ease-in-out infinite',

      },

      keyframes: {

        fadeUp: {

          '0%': { opacity: '0', transform: 'translateY(30px)' },

          '100%': { opacity: '1', transform: 'translateY(0)' },

        },

        fadeIn: {

          '0%': { opacity: '0' },

          '100%': { opacity: '1' },

        },

        slowZoom: {

          '0%': { transform: 'scale(1)' },

          '100%': { transform: 'scale(1.06)' },

        },

        marquee: {

          '0%': { transform: 'translateX(0)' },

          '100%': { transform: 'translateX(-50%)' },

        },

        floatY: {

          '0%, 100%': { transform: 'translateY(0) rotate(var(--float-r, 0deg))' },

          '50%': { transform: 'translateY(-16px) rotate(var(--float-r, 0deg))' },

        },

        emberPulse: {

          '0%, 100%': { opacity: '0.55' },

          '50%': { opacity: '1' },

        },

      },

    },

  },

  plugins: [],

};
