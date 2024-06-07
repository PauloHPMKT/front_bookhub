/** @type {import('tailwindcss').Config} */

const colors = {
  evergreen: "#2B4341",
  evengreenLight: "#2AA78D"
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: colors.evergreen,
        'evergreen-light': colors.evengreenLight
      },
      backgroundColor: {
        evergreen: colors.evergreen,
        'evergreen-light': colors.evengreenLight
      },
      borderColor: {
        evergreen: colors.evergreen,
        'evergreen-light': colors.evengreenLight
      },
    },
  },
  plugins: [],
}