module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        first: "#ff4d61",
        title: "#353252",
        text: "#5e5c7f",
        body: "#f9f7fd",
      },
      shadow: {
        first: "0 5px 20px 0 rgba(69, 67, 96, 0.1)",
      },
    },
  },
  plugins: [],
};
