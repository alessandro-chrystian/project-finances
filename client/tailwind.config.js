/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
        colors: {
            "primary": "#e9b933",
            "primary-content": "#1a1403",
            "primary-dark": "#d2a117",
            "primary-light": "#eec961",

            "secondary": "#bee933",
            "secondary-content": "#151a03",
            "secondary-dark": "#a6d217",
            "secondary-light": "#cdee61",

            "background-light": "#f1f0ef",
            "foreground-light": "#fbfbfb",
            "border-light": "#e1e0dd",

            "copy": "#292824",
            "copy-light": "#6d695f",
            "copy-lighter": "#949084",

            "background-dark": "#1b1a18",
            "foreground-dark": "#292824",
            "border-dark": "#44423b",

            "copy-dark": "#fbfbfb",
            "copy-dark-light": "#dbdad6",
            "copy-dark-lighter": "#aca99f",

            "success": "#33e933",
            "warning": "#e9e933",
            "error": "#e93333",

            "success-content": "#031a03",
            "warning-content": "#1a1a03",
            "error-content": "#ffffff"
        },
    }
},
  plugins: [],
}

