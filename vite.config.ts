import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import autoprefixer from "autoprefixer";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
  base: "/Sedona-HTML-Academy/",
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    VitePluginSvgSpritemap("public/img/icons/**/*.svg", {
      output: {
        filename: "sprite/sprite.svg", // путь и имя файла спрайта в папке public
      },
      // дополнительные опции по необходимости
      prefix: "", // префикс для id символов
      svgo: true, // оптимизация SVG через svgo (по умолчанию true)
      injectSVGOnDev: true, // вставлять спрайт в dev режиме в DOM
    }),
  ],
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
