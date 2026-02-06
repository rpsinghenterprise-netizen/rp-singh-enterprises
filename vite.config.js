import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //isse aap src folder ke andar kisi bhi file ko import kar sakte ho using @, for example: import Component from "@/components/Component.jsx".
    },
  },
});
