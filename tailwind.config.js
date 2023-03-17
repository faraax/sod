/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // adding xs to the rest
      'xs': "320px",
      'sm': "576px",
      'md': "768px",
      'lg': "992px",
      "btn": "1100px",
      'xl': "1372px",
      '2xl': "1820px",
    },
    extend: {
      listStyleType: {
        disc: 'disc',
      },
      textColor: {
        'red-500': '#EF4444',
      },
      colors: {
        "primary": "#B20000",
        "secondary": "#828282",
      },
    },
  },
  plugins: [],
}
