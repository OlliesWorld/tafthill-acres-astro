import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_VISUAL_EDITING_ENABLED,
  SANITY_API_READ_TOKEN,
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import netlify from '@astrojs/netlify';

export default defineConfig({
  // Change from 'static' to 'server' to support draft mode
  output: 'server',
  vite: {
    build: {
      chunkSizeWarningLimit: 1000, // Increase from default 500 to 1000 kB
    }
  },
  // Rest of your config...
  integrations: [
    netlify(),
    react(),
    tailwind({
      // If you have custom config, specify your config path
      config: { path: './tailwind.config.js' },
      // Add this if you're using the PostCSS plugin directly
      applyBaseStyles: false,
    }),
    sanity({
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
      dataset: PUBLIC_SANITY_STUDIO_DATASET,
      apiVersion: "2023-12-25", // Update to newer API version
      studioBasePath: '/admin',
      useCdn: process.env.NODE_ENV === 'production',
      token: SANITY_API_READ_TOKEN,
      stega: {
        enabled: PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true',
        studioUrl: '/admin',
      }
    })
  ],
  image: {
    domains: ['cdn.sanity.io'], // Add the domain of your remote images
  },
  adapter: netlify()
});