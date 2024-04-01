
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
     fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
      },

      flex: {
        '3': '3 3 0%',
        '2': '2 2 0%'
      },

      animation:{
         "loop-scroll": "loop-scroll 50s linear infinite",
      },

     keyframes:{
      "loop-scroll":{
        from:{transform:"translateX(0)"},
        to:{transform:"translateX(-100%)"}
      }

     },

      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
    },
    transitionProperty: {
      'max-height': 'max-height'
    }
  },
  plugins: [
    
  ],
}

