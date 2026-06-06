/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        redPrimary: "#ED2939",
        redSecondary: "#960018",
        offwhite: "#F0F0F0",
        textPrimary: "#F0F0F0",
        textSecondary: "#555555",
      }
    },
  },
  plugins: [],
};
