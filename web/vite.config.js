import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, '../dist-web'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/style.css',
        chunkFileNames: "chunk.js",
        manualChunks: undefined,
      }
    }
    // lib: {
    //   // Could also be a dictionary or array of multiple entry points
    //   entry: path.resolve(__dirname, 'src/main.js'),
    //   name: 'Main',
    //   // the proper extensions will be added
    //   fileName: 'main',
    // },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
  }
})
