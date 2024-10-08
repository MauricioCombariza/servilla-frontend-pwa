import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009688",
        secondary: "#8bc34a",
        accent: "#cddc39",
        error: "#4caf50",
        warning: "#00bcd4",
        info: "#03a9f4",
        success: "#3f51b5",
        darkser: "#1a6329",
        // darkser: "#2d3436",
        ser: "#009300",
        // ser: "#1E5128",
        lightser: "#C5EDAC",
        // lightser: "#e53935",
        whiteser: "#DBFEB8",
        // lightser: "#4E9F3D",
        // whiteser: "#D8E9A8",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
