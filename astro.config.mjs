import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import { defineConfig } from "astro/config";

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// Change this depending on your hosting provider (Vercel, Netlify etc)
// https://docs.astro.build/en/guides/server-side-rendering/#adding-an-adapter
// import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Hybrid+adapter is required to support embedded Sanity Studio
  output: 'hybrid',
  adapter: vercel(),
  integrations: [sanity({
    projectId,
    dataset,
    useCdn: false,
    // `false` if you want to ensure fresh data
    apiVersion: "2024-07-24", // Set to date of setup to use the latest API version
    studioBasePath: '/studio',
    stega: {
      studioUrl: "/studio",
    },
  }), react() // Required for Sanity Studio
  , tailwind()]
});