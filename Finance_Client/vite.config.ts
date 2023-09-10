import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";   // To set the path of the imports. 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})
