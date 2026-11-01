import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#17232E",
        ivory: "#F2F1ED",
        steel: "#A8B6C3",
        gold: "#B49A72",
        ink: "#10171E"
      },
      fontFamily: {
        en: ["var(--font-en)", "sans-serif"],
        ar: ["var(--font-ar)", "sans-serif"]
      },
      maxWidth: {
        content: "1180px"
      }
    }
  },
  plugins: []
};

export default config;
