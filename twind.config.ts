/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        "footer": "#323940",
        "hoverlogo": "#30c0dc",
        transparent: "transparent",
      },
      textColor: {
        "default": "#FFFFFF",
        "default-inverse": "#000000",
        "footer-hover": "#ccc",
      },
      borderColor: {
        "footer": "#A6A6A6",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        ltpro: ["DIN-Next-LT-Pro", "sans-serif"],
        serif: ["serif"],
      },
      fontSize: {
        "footer": ["18px", "1.5"],
      },
      fontWeight: {
        "heading-1": "500",
        "heading-2": "300",
      },
    },
  },
};
