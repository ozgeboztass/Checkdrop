import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1c4f82",

          secondary: "#7d919b",

          accent: "#eb6b47",

          neutral: "#23282f",

          dark: "#212121",

          info: "#0092d6",

          success: "#6cb288",

          warning: "#daad58",

          error: "#ab3d30",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")]
}
export default config
