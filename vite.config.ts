import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import autoprefixer from "autoprefixer";
import path from "path";

export default defineConfig({
  base: "/Sedona-HTML-Academy/",
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
