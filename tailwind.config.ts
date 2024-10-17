import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in": {
          "0%": {
              opacity: "0%",
            },
            "100%": {
                opacity: "100%",
            }
        },
        "fade-out": {
          "100%": {
              opacity: "100%",
            },
            "0%": {
                opacity: "0%",
            }
        }
      },
      animation: {
        "fade-in": "fade-in 1.5s ease-in-out",
        "fade-out": "fade-out 1.5s ease-in-out",
      }
    },
  },
  plugins: [],
};
export default config;
