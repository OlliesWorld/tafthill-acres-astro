// Different environments use different variables
const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID ||
    import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET ||
    import.meta.env.PUBLIC_SANITY_DATASET;
// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
    throw new Error(`Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(import.meta.env, null, 2)}`);
}
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schema";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: projectId,
  dataset: dataset,
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
      locate: (document) => {
        if (!document._id) {
          return null;
        }
        
        // Custom routing based on document type
        if (document._type === 'home') {
          return {
            pathname: '/'
          };
        }
        
        if (document._type === 'about') {
          return {
            pathname: '/about'
          };
        }
        
        if (document._type === 'facility') {
          return {
            pathname: '/facility'
          };
        }
        
        if (document._type === 'training') {
          return {
            pathname: '/training'
          };
        }
        
        return null;
      }
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});