/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#181818",
                secondary: "#21272a",
                secondary_hover: "#313131",
            },
        },
    },
    plugins: [],
};
