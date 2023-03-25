import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
 base: "/",
 define: {
  APP_VERSION: JSON.stringify(process.env.npm_package_version),
 },
 server: {
  proxy: {
   "/api": {
    // target: "http://localhost:3001/",
    changeOrigin: true,
    secure: false,
   },
  },
 },
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },
});
