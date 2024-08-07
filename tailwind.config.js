/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "var(--main-font)",
      },
      fontSize: {
        40: "40px",
      },
      height: {
        "screen-vh": "100svh",
      },
      padding: {
        "block-40": "40px 0px",
      },
    },
  },
  plugins: [],
};
