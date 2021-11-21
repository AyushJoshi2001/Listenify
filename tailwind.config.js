module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "main-background":
          "url('https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg')",
        "admin-background":
          "url('https://cdn.pixabay.com/photo/2016/03/30/05/41/music-1290087_960_720.jpg')",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        "nav-primary": "#F656B6",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
