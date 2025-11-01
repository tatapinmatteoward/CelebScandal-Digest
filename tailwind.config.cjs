/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',
        accent: '#800020',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
