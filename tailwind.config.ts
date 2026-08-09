import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F7FC',
        card: '#FFFFFF',
        ink: '#071A40',
        ink2: '#3D5278',
        mut: '#7084A8',
        teal: '#003399',
        'teal-d': '#002980',
        'teal-x': '#E8EEFC',
        coral: '#FF5500',
        'coral-x': '#FFEFE8',
        amber: '#D97706',
        'amber-x': '#FEF3C7',
        ok: '#16A34A',
        'ok-x': '#DCFCE7',
        line: '#E1E7F5',
        line2: '#CCD7F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        disp: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
