import type { Config } from "tailwindcss";

const config: Config = {
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
        'coyu-blue': "var(--coyu-blue)",
        'black': "var(--black)",
        'white': "var(--white)",
        'grey': "var(--grey)",
        'blue-background': "var(--blue-background)",
      },
    },
  },
  plugins: [],
};

export default config;