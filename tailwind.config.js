/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#282828", // Your custom primary color
          secondary: "#f0f0f0", // A secondary color
          "base-100": "#ffffff", // Background color for the body
        },
      },
      {
        light: {
          primary: "#000000", // Primary color for light theme
          secondary: "#f5f5f5", // Secondary color for light theme
          "base-100": "#ffffff", // Background color for light theme
        },
      },
      "dark", // DaisyUI's built-in dark theme
    ],
  },
};
