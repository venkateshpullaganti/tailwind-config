module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  presets: [
    require("./customConfig2"),
    require("@ib/nebula-system/tailwind"),
    require("./customConfig"),
  ],
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [],
};
