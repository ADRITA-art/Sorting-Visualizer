import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-purple': '#EBD3F8',
        'dark-purple': '#2E073F',
        'custom-light-purple': '#D0B8A8',
        'custom-light-blue': '#7A1CAC',
        'bar-color': '#674188',
        'generate-array': '#00712D',
        'bubble':'#FF9874',
        'insertion':'#A28B55',
        'selection':'#F05A7E',
        'merge':'#8EACCD',
        'border-color':'#49243E'
      },
    },
  },
  plugins: [],
};
export default config;
