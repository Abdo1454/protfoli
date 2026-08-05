import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  base: "/portfolio-website/",
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
});