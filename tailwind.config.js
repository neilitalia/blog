const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

delete colors["lightBlue"]
delete colors["trueGray"]
delete colors["coolGray"]
delete colors["blueGray"]
delete colors["warmGray"]

const extendedColors = {
  ...colors,
  ...{
    darkestBlue: "#00040D",
    darkTeal: "#05272D",
  },
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: extendedColors,
      textColor: ["visited"],
      backgroundColor: ["active"],
      backgroundImage: () => ({
        "gradient-radial-c": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-cr":
          "radial-gradient(100% 50% at 0% 50%, var(--tw-gradient-stops))",
        "gradient-radial-to-cl":
          "radial-gradient(115% 90% at 50% 0%, var(--tw-gradient-stops))",
      }),
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
