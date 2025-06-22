/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom background colors
        bgPrimary: "#2a003f",
        bgRedGradient: "#FF85A2",
        bgSecondary: "#c20eb996",
        bgSidebar: "#170132",
        bgSubMenu: "#410b5b",
        bgHoverSubMenu: "#572b6d",
        bgHoverSubMenuTwo: "#664c73",
        bgYellow: "#f0f326",
        bgPink: "#ef32e6",
        bgAqua: "#00ffb1",
        bgRed: "#FF0000",
        bgGreen: "#032b13",
        bgYellowVisa: "#F79E1B",
        bgBinance: "#F3BA2F",
        bgPaypal: "#009cde",
        bgPayoneer: "#FF4800",
        bgVisa: "#636293",
        // Custom text colors

        textBinance: "#F3BA2F",
        textPaypal: "#003087",
        textPaypalAqua: "#009cde",
        textPayoneer: "#FF4800",
        textVisa: "#1A1F71",
        textActiveMenu: "#ef32e6",
        textRed: "#FF0000",
        textPrimary: "#4B5563",
        textPurple: "#410b5b",
        textPurpleTwo: "#572b6d",
        textSecondary: "#0abab4",
        textYellow: "#f0f326",
        textOrange: "#FF8302",
        textAqua: "#00ffb1",
        dashedBorderOne: "#00ffb1",
        dashedBorderTwo: "#FF85A2",
        dashedBorderThree: "#f0f326",
      },
      backgroundImage: {
        gradientRed: "linear-gradient(to right, #fde68a, #f472b6, #8b5cf6)",
        gradientBlue: "linear-gradient(to right, #9CA3AF, #1E40AF)",
      },
    },
  },
  plugins: [scrollbar],
};
