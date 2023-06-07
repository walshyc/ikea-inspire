/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        ikea: {
          "primary": "#0058AB",
          "secondary": "#FBD913",
          "accent": "#93c5fd",
          "neutral": "#111111",
          "base-100": "#e0e7ff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  }
}

