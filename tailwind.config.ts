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
        boysColor: "#7dd3fc",
        girlsColor: "#d8b4fe",
        amberColor: "#fcd34d",
        cyanColor: "#06b6d4",
      },
    },
  },
  plugins: [],
} satisfies Config;
