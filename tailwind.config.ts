import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#016789",
        "light-blue": "#38a5d2",
        "white-bg": "#e6e6e6"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #016789, #38a5d2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
