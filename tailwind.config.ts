import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";


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
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        futurastd: "var(--font-futurastd)",
        futurastdbook: "var(--font-futurastdbook)",
      },
    },

  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".clip-hexagon": {
          clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
        },
        ".clip-hexagon-2": {
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        },
      };

      // Use `addUtilities` to register the new utility
      addUtilities(newUtilities);
    },
  ],
};
export default config;
