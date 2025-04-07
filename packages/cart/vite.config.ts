import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: { ...pkg.dependencies },
    }),
  ],
  build: {
    target: "esnext",
  },
});
