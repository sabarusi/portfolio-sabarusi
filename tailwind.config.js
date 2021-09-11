module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#121212"
      },
      width:{
        '19/20': "95%",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        raleway:['Raleway', 'sans-serif']
      },
      fontSize:{
        hero:"2.4rem",
      },
      boxShadow:{
        'purple': '0 25px 50px -12px rgba(79, 70, 229, 0.25)',
      },
      dropShadow:{
        'white': '0 0 1rem rgba(255, 255, 255,0.15)',
      },
      animation: {
        marqueeLeft: 'marqueeLeft 11s linear infinite',
        marqueeRight: 'marqueeRight 11s linear infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
