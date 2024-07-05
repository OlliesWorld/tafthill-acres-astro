import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.VITE_PUBLIC_SANITY_STUDIO_PROJECT_ID': JSON.stringify(process.env.VITE_PUBLIC_SANITY_STUDIO_PROJECT_ID),
    'process.env.VITE_PUBLIC_SANITY_STUDIO_DATASET': JSON.stringify(process.env.VITE_PUBLIC_SANITY_STUDIO_DATASET),
  }
})