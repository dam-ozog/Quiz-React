import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Folder wyjściowy builda
    assetsDir: "assets", // Folder na statyczne pliki
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Proxy dla backendu lokalnie
    },
  },
  base: "/", // Ważne dla Vercel, ustawia podstawową ścieżkę plików
});
