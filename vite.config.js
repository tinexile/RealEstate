import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    theme: {
    extend: {
      fontSize: {
        sm: '0.75rem',  // 12px
        base:".875rem",  // 14px
        md: '1rem',   // 16px 
        lg: "1.25rem", // 20px
        xl: "1.5rem",  // 24px
        "2xl":"1.75rem",  // 28px
        "3xl":"2.25rem"  // 36px
      },
    },
    backgroundImage: {
        'blue-gradient': 'linear-gradient(97.65deg, #60bbee 0.33%, #0a72ad 93.35%)',
      },
  },
  plugins: [react(), tailwindcss()],
});
