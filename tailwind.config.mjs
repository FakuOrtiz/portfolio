/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F9F9F9",
        textColor: "#3D3D3D",
      },
      fontFamily: {
        montse: ["Montserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
