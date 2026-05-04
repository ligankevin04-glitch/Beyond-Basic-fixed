import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Set this to your GitHub repo name if deploying to https://username.github.io/repo-name/
// Leave as "Beyond-Basic-fixed" for a custom domain or username.github.io root deployment.
const REPO_NAME = process.env.VITE_BASE_PATH || "Beyond-Basic-fixed";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: REPO_NAME,
});
