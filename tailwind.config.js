/** @type {import('tailwindcss').Config} */
const cmpreset = require('cmds-tailwind-styles');

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/cmds-component-*/*.{html,js,svelte,ts}'
  ],
  presets: [cmpreset],
  theme: {
    screens: {
		'sm': '640px',
		'md': '768px',
		'lg': '1024px',
		'xl': '1280px',
      'custom-768': '768px', // New custom breakpoint at 768px width
    },
  },
};