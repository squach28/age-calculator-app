/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#854dff',
      'lightred': '#ff5757',
      'offwhite': '#f0f0f0',
      'lightgrey': '#dbdbdb',
      'smokeygrey': '#716f6f',
      'offblack': '#141414'
    },
    extend: {},
  },
  plugins: [],
}

