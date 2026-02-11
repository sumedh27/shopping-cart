import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  base: "/shopping-cart/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/__tests__/setup.js",
  },
});
