import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "bg-start": "#17151e",
        "bg-end": "#09080C",
      },
    },
  },

  plugins: [],
} satisfies Config;

export default config;
