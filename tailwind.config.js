/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Light theme */
        "bg-light": "hsl(0, 0%, 98%)", // Gray 50
        "text-light": "hsl(235, 19%, 35%)", // Navy 850
        "text-muted": "hsl(236, 9%, 61%)", // Gray 600
        "border-light": "hsl(233, 11%, 84%)", // Gray 300

        /* Dark theme */
        "bg-dark": "hsl(235, 21%, 11%)", // Navy 950
        "card-dark": "hsl(235, 24%, 19%)", // Navy 900
        "text-dark": "hsl(234, 39%, 85%)", // Purple 300
        "border-dark": "hsl(237, 14%, 26%)", // Purple 800
        "hover-dark": "hsl(236, 33%, 92%)", // Purple 100

        /* Accent */
        accent: "hsl(220, 98%, 61%)", // Blue
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
