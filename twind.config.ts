import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        sxl: "1200px",
        xl: "1230px",
        "2xl": "1430px",
        "3xl": "1600px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        "footer": "#323940",
        "hover": "#30c0dc",
        "hoverlogo": "#30c0dc",
        transparent: "transparent",
        "mobile-menu-bg": "rgba(50,57,63,.7)",
        "dots": "hsla(0,0%,100%,.5)",
        "dots-active": "#30c0dc",
        "portfoliosection": "#eee",
      },
      backgroundImage: {
        "gradient-line": "linear-gradient(#9cf9ff 100%, #fff 0)",
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
        "footertablet": ["1.5rem", "1.2"],
        "portfolio-desk": "calc(1.325rem + .9vw)",
        "portfoliosection": ["2rem", "1.2"],
        "portfoliosection-mobile": ["1.5rem", "17px"],
      },
      fontWeight: {
        "main-title": "700",
        "heading-1": "500",
        "heading-2": "300",
      },
      backgroundSize: {
        "welcome": "100vw 260vh",
        "welcome-sm": "100vw 130vh",
      },
      boxShadow: {
        "portfoliosm": "0 2px 4px 0px rgba(0, 0, 0, .15)",
      },
    },
  },
  preflight: (preflight) => ({
    ...preflight,
    "@property --num": {
      "syntax": "<integer>",
      "initial-value": "0",
      "inherits": "false",
    },
    // Prevent scroll when modal is open
    "body.no-scroll": {
      overflow: "hidden",
      height: "100vh",
    },
  }),
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
      width: "100%",
      "max-height": "120vh",
      display: "flex",
      "flex-direction": "column",
      padding: "1.5rem 0 5% 16.66666667%",
      margin: "0",
    },
    "writing-vertical-rl": {
      "-ms-writing-mode": "tb-rl",
      "writing-mode": "vertical-rl",
    },
    "writing-tb-rl": {
      "-ms-writing-mode": "tb-rl",
      "writing-mode": "tb-rl",
    },
    "writing-mode-none": {
      "-ms-writing-mode": "unset",
      "writing-mode": "unset",
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
    "text-webkit-center": {
      "text-align": "-webkit-center",
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
    "x-p-calc": {
      "padding-right": "calc(1.5rem*.5)",
      "padding-left": "calc(1.5rem*.5)",
    },
    "btn-close": {
      background:
        `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") 50%/1em auto no-repeat`,
      width: "1em",
      height: "1em",
      color: "#000",
      opacity: "0.5",
      "box-sizing": "content-box",
      "font-size": "1.5rem",
    },
    "btn-close-white": {
      filter: `invert(1) grayscale(100%) brightness(200%)`,
    },
    "backdrop-blur": {
      "backdrop-filter": "blur(6px)",
      "background": "rgba(50,57,63,.7)",
    },
    "border-socials": {
      "border-bottom": "1.22989px solid #9e9e9e",
    },
    "portfolio-transition": {
      transition: "transform .6s ease-in-out",
    },
    "transition-btn": {
      transition: "all .15s ease-in-out",
    },
  },
};

export default options;
