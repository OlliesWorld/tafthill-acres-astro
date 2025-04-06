import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID': JSON.stringify(process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID),
    'process.env.PUBLIC_SANITY_STUDIO_DATASET': JSON.stringify(process.env.PUBLIC_SANITY_STUDIO_DATASET),
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000kB
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'], // Put react and react-dom into a separate vendor chunk
          'lodash': ['lodash'] // Put lodash into its own chunk
        }
      }
    }
  }
})