import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variants: {
      display: ["group-hover"],
    },
    extend: {
      fontFamily: {
        display: "General Sans",
        body: "General Sans",
        GeneralSans: "General Sans",
      },
      colors: {
        "primary-1": "#0061ff",
        "primary-2": "#104cca",
        "secondary-1": "#104cca",
        "secondary-2": "#f2f5ff",
        "secondary-3": "#ffde6a",
        "secondary-4": "#fffefa",
        "secondary-5": "#ff6969",
        "neutral-800": "#171728",
        "neutral-700": "#33334e",
        "neutral-600": "#686781",
        "neutral-500": "#8c8c9e",
        "neutral-400": "#aeaec4",
        "neutral-300": "#e4e4ed",
        "neutral-200": "#fafafa",
        "neutral-100": "white",
      },
    },
  },
  plugins: [],
};
export default config;
