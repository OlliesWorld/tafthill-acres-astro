import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { createClient } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: "production",
  apiVersion: '2021-03-25',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
export function urlForImage(image: SanityImageSource) {
  return builder.image(image);
}