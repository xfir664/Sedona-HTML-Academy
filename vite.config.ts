import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/Sedona-HTML-Academy/",
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
