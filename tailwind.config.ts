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
        "main-yellow": "#FBD125",
        "main-black": "#0F1015",
        "main-red": "#F24B53",
        "main-blue": "#4C7DC3",
        "main-gray": "#A4A6AC",
        "main-orange": "#F89831",
        "icon-background": "#FFFFFF1A",
        "main-black-bg": "#0C121A",
        "body-bg": "#FAFBFB",
        "gradient-yellow": "#FFFEE7",
      },
    },
  },
  plugins: [],
};
export default config;
