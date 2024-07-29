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
        gray: "#FFFFFF4D",
        blur_black: "#FFFFFF08",
        gray_border: "#FFFFFF45",
        blur_gray: "#FFFFFF21",
      },
      backgroundImage: {
        'header_bg': 'url(./assets/images/webp/header_bg.webp)',
        'btn_bg': 'url(./assets/images/svg/common_BtnBg.svg)',
        'featured_sliderbg': 'url(./assets/images/webp/featured_SliderBg.webp)',
        'featured_bg': 'url(./assets/images/webp/featured_Bg.webp)',
        'impact_bg': 'url(./assets/images/webp/impact_Bg.webp)',
        'text_gradient': 'linear-gradient(108.48deg, #FF1E2F 8.2%, #3EBFFF 31.38%)',
        'accordian_gradient': 'linear-gradient(0deg, #9E0000 -14.1%, #FF1212 123.08%)',
        'testimonial_bg': 'url(./assets/images/webp/testimonial_Bg.webp)',
        'testimonial_card': 'url(./assets/images/webp/testimonial_card.webp)',
        'faq_bg': 'url(./assets/images/webp/faq_Bg.webp)',
        'newsletter_bg': 'url(./assets/images/webp/newsletter_Bg.webp)',
        'footer_bg': 'url(./assets/images/webp/footer_Bg.webp)',
        'ellipse_bg': 'linear-gradient(90deg, #FF1E2F 0%, #3EBFFF 100%)',
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
    },
  },
  plugins: [],
}

