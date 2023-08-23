/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutralOne': '#f4f1ed',
        'neutralTwo': '#efebe5',
        'neutralBrown': '#623e2a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'cocogothic': ['coco_gothiclight, sans-serif'],
        'amsterdamone': ['amsterdamone, sans-serif'],
        'catchymager': ['catchy_magerregular, sans-serif'],
      }
      
    },
  },
  plugins: [],
}
