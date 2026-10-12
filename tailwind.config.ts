import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15120e", band: "#1d1a15", surface: "#25211b", deep: "#110f0b",
        gold: "#e8c07a", cream: "#f1ece4", muted: "#a8a094",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Times New Roman", "serif"] },
    },
  },
  plugins: [],
};
export default config;
