/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "12px",
        },
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      boxShadow: {
        "3xl": "3px 3px 0px 0px #0F2440",
      },
      colors: {
        light_black: "#141414",
        red: "#FF1212",
        sky_blue: "#3EBFFF",
      },
      backgroundImage: {
        'header_bg': 'url(./assets/images/webp/header_bg.webp)',
        'btn_bg': 'url(./assets/images/svg/common_BtnBg.svg)',
        'btn_bg_second': 'url(./assets/images/svg/common_BtnBg2.svg)',
        'featured_sliderbg': 'url(./assets/images/webp/featured_SliderBg.webp)',
        'featured_bg': 'url(./assets/images/webp/featured_Bg.webp)',
        'impact_bg': 'url(./assets/images/webp/impact_Bg.webp)',
        'text_gradient': 'linear-gradient(108.48deg, #FF1E2F 8.2%, #3EBFFF 31.38%)',
        'testimonial_bg': 'url(./assets/images/webp/testimonial_Bg.webp)',
        'testimonial_card': 'url(./assets/images/webp/testimonial_card.webp)',
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
    },
  },
  plugins: [],
}

