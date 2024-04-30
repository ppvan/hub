import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/mdx-components.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        source: ['var(--font-source)'],
      },
    },
  },
  plugins: [],
};
export default config;
