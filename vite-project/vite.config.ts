import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
console.log("__dirname", __dirname);
export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
      },
    },
  },
});
