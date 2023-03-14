module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      'sm': '700px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
