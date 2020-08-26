module.exports = {
  purge: [],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "8rem",
      "9xl": "12rem",
      "10xl": "16rem",
    },
    extend: {
      animation: {
        "pulse-fast": "pulse-fast 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      keyframes: {
        "pulse-fast": {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
