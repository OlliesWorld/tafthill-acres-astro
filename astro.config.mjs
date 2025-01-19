import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_STUDIO_API_VERSION,
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    netlify(),
    react(),
    tailwind(),
    sanity({
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
      dataset: PUBLIC_SANITY_STUDIO_DATASET,
      apiVersion:  "2024-07-24",
      studioBasePath: '/admin',
      prerender: true,
      useCdn: true
    })
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'sanity-studio': [
              '@sanity/vision',
              '@sanity/desk-tool',
              '@sanity/studio-hints'
            ],
            'sanity-core': [
              '@sanity/client',
              '@sanity/preview-kit',
              '@sanity/image-url'
            ]
          }
        }
      }
    }
  }
});