import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Wymagane przez Vercel
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Lokalny backend podczas developmentu
    },
  },
});
