import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import markdown from "vite-plugin-markdown";

export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: ["html", "toc", "meta"],
    }),
  ],

  build: {
    chunkSizeWarningLimit: 900,

    // SAFE chunk splitting based on libraries you actually use
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          markdown: ["react-markdown"],
          lucide: ["lucide-react"],
        },
      },
    },

    cssMinify: true, // keep default minifier, avoids breaking your design
  },
});
