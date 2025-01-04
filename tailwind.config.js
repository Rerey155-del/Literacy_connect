import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Untuk mode gelap
  content: ["./src/**/*.{html,js}"], // Tentukan path file yang menggunakan Tailwind
  theme: {
    extend: {
      // Kustomisasi tema
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [daisyui], // Pastikan plugin terdaftar di sini
};
