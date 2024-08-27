// import { createClient } from "@sanity/client";
// // import type { PortableTextBlock } from "@portabletext/types";
// import type { ImageAsset, Slug } from "@sanity/types";
// import groq from "groq";

// // Create a Sanity client
// const client = createClient({
//   projectId: import.meta.env.VITE_PUBLIC_SANITY_STUDIO_PROJECT_ID,
//   dataset: "production",
//   useCdn: true,
//   apiVersion: '2024-01-24',
// });

// export async function getThankyou() {
//   return await client.fetch(groq`*[_type == "thankyou"]`);
// }
// export async function getThankyous(slug: any) {
//   return await client.fetch(groq`*[_type == "thankyou"]`, {
//     slug,
//   });
// }
// export interface Thankyou {
//   _type: "thankyou";
//   slug: Slug;
//   title?: string;
//   subTitle?: string;
//   mainImage?: ImageAsset;
// }