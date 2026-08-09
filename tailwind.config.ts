import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F2EA",
        card: "#FFFFFF",
        ink: "#14312B",
        ink2: "#45605A",
        mut: "#84928B",
        teal: {
          DEFAULT: "#0C6B5D",
          dark: "#0A5347",
          light: "#E2EFEA",
        },
        coral: {
          DEFAULT: "#E85D3A",
          light: "#FBE9E2",
        },
        amber: {
          DEFAULT: "#B57514",
          light: "#F9EED8",
        },
        ok: {
          DEFAULT: "#2E7D4F",
          light: "#E3F1E7",
        },
        line: "#E4DECE",
        line2: "#D3CBB5",
      },
    },
  },
  plugins: [],
};
export default config;
