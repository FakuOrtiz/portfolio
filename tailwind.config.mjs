/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F9F9F9",
        textColor: "#9F9F9F",
      },
      fontFamily: {
        neucha: ["Neucha", "sans-serif"],
      },
    },
  },
  plugins: [],
};
