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
    extend: {
      colors: {
        primary: "#0096FB",
        secondary: "#000811",
        // primary: "#ff5200",
        // secondary: "#EEF0F7",
      },
      backgroundImage: {
        banner_bg: "url('/banner-top-bg.png')",
        circle_bg: "url('/image_circle_shape.png')",
        project_bg: "url('/project-bg.png')",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
