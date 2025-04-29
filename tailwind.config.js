/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#511E84',
        secondary: '#E40046',
      },
      textShadow: {
        DEFAULT: '0.1em 0.1em 0.3em var(--tw-shadow-color, black)',
      },
      animationDelay: {
        0: '0',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(100%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          from: { opacity: 0, transform: 'translateX(100%)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          from: { opacity: 0, transform: 'translateY(-100%)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          from: { opacity: 0, transform: 'translateX(-100%)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: 0.4 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s both',
        fadeInRight: 'fadeInRight 1s both',
        fadeInDown: 'fadeInDown 1s both',
        fadeInLeft: 'fadeInLeft 1s both',
        fadeIn: 'fadeIn 1.5s both',
      },
      backgroundImage: {
        'hero-image': "url('/BG-BANNER-SITE.png')",
        'award-image': "url('/ELEMENTOS-02.png')",
        'hero-image-mobile': "url('/BG-BANNER-SITE-MOBILE.png')",
        'local-image': "url('/banner2.jpg')",
        'local-image-mobile': "url('/banner2-mobile.jpg')",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );

      matchUtilities(
        {
          'animation-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('animationDelay') },
      );
    },
  ],
};
