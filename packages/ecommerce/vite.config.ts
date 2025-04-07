import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        cart: "http://localhost:3001/assets/remoteEntry.js",
        profile: "http://localhost:3002/assets/remoteEntry.js",
        orders: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: { ...pkg.dependencies },
    }),
  ],
  build: {
    target: "esnext", // Ensures compatibility with the latest JavaScript features
  },
});
