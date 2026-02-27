/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: '#2B9C9C',
        'teal-light': '#3DB8B8',
        'teal-dark': '#238080',
        copper: '#C75B3F',
        charcoal: '#1E2428',
        'charcoal-light': '#2C3338',
        slate: '#8A959E',
        'slate-light': '#B0B8C2',
        'warm-gray': '#F5F3F0',
        'warm-gray-mid': '#E8E6E1',
        'warm-gray-dark': '#D5D2CD',
      },
      fontFamily: {
        serif: ['IBM Plex Serif', 'serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      fontSize: {
        '14px': ['14px', { lineHeight: '1.5' }],
        '16px': ['16px', { lineHeight: '1.5' }],
        '18px': ['18px', { lineHeight: '1.6' }],
        '20px': ['20px', { lineHeight: '1.6' }],
        '30px': ['30px', { lineHeight: '1.4' }],
        '32px': ['32px', { lineHeight: '1.3' }],
        '40px': ['40px', { lineHeight: '1.2' }],
        '48px': ['48px', { lineHeight: '1.2' }],
        '72px': ['72px', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        '1.4px': '1.4px',
        '4.8px': '4.8px',
        '5px': '5px',
      },
      boxShadow: {
        'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        '800px': '800px',
        '1200px': '1200px',
      },
      width: {
        '360px': '360px',
      },
      height: {
        '450px': '450px',
        '80px': '80px',
        '200px': '200px',
      },
      padding: {
        '24px': '24px',
        '32px': '32px',
        '80px': '80px',
        '96px': '96px',
        '120px': '120px',
      },
      margin: {
        '80px': '80px',
      },
    },
  },
  plugins: [],
};
