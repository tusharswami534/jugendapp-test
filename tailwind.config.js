/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'spicy-pink': '#737376',
          'clear-blue': '#007AFF',
          'white-lilac': '#F5F9FC',
        },
      },
    },
    plugins: [],
  }