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
      keyframes: {
        "fade-out-up": {
          "0%": {
            opacity: "1",
            transform: "translatey(0px)",
          },
          "100%": { opacity: "0", transform: "translatey(-10px)" },
        },
      },
      animation: {
        "fade-out-up": "fade-out-up 1.1s ease-out",
      },
    },
  },

  plugins: [],
} satisfies Config;

export default config;
