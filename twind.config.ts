import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      screens: {
        sm: "576px",
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
        "mobile-title": ["2.8rem", "122.6%"],
        "mobile-sub-title": ["1.8rem", "122.6%"],
      },
      fontWeight: {
        "main-title": "700",
        "heading-1": "500",
        "heading-2": "300",
      },
    },
  },
  plugins: {
    "welcome-container": {
      margin: "auto auto 20%",
      "padding": "1.5rem",
      "padding-bottom": "unset",
      height: "100%",
      width: "83.33333333%",
    },
    "header-navbar": {
      "justify-content": "center",
      "padding-left": "10%",
      "padding-top": "2rem",
      "padding-bottom": "2rem",
      "padding-right": "5rem",
      "position": "relative",
      margin: "50px 0",
    },
    "welcome-container-sm": {
      height: "86vh",
      "max-height": "120vh",
      display: "flex",
      "flex-direction": "column",
    },
    "toggler-icon": {
      "display": "inline-block",
      "background-image":
        `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
      "background-size": "100%",
      "background-repeat": "no-repeat",
      "background-position": "50%",
      "vertical-align": "middle",
      "width": "1.5em",
      "height": "1.5em",
    },
    "btn-navbar-toggler": {
      color: "rgba(255,255,255,.55)",
      "cursor": "pointer",
      "position": "absolute",
      "right": "5%",
      "padding": ".25rem .75rem",
      "line-height": "1",
      "background-color": "transparent",
      "border": "1px solid rgba(255,255,255,.1)",
      "border-radius": ".25rem",
      "transition": "box-shadow .15s ease-in-out",
      "font-size": "1.5rem",
      "outline": "none",
    },
  },
};

export default options;
