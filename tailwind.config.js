/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f5efe5",
        ink: "#21352b",
        sage: "#7ea284",
        moss: "#4f6b57",
        clay: "#cf8c63",
        sand: "#dcc5a2",
        sun: "#f6c973"
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        bloom: "0 24px 80px rgba(33, 53, 43, 0.18)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(33,53,43,0.08) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
};
