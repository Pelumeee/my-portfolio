/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                fd: [{ max: "320px" }],
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1445px",
            },
            colors: {
                purple: "#9747FF",
            },
        },
    },
    plugins: [],
};
