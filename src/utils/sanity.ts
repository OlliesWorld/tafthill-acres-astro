import { createClient } from "@sanity/client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

// Create a Sanity client
const client = createClient({
  projectId: import.meta.env.VITE_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: '2024-01-24',
});

export async function getHomes() {
  return await client.fetch(
    groq`*[_type == "home" && defined(slug.current)] | order(_createdAt desc)`
  );
}



export async function getHome(slug) {
  return await client.fetch(
    groq`*[_type == "home" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Home {
  _type: "home";
  slug: Slug;
  title?: string;
  subTitle?: string;
  blurb?: string;
  blurb2?: string;
  subTitle2?: string;
  title2?: string;
  body: PortableTextBlock[];
  mainImage?: ImageAsset;
}

export async function getAbouts() {
  return await client.fetch(groq`*[_type == "about"]`);
}

export async function getAbout(slug: any) {
  return await client.fetch(groq`*[_type == "about"]`, {
    slug,
  });
}

export interface About {
  _type: "about";
  slug: Slug;
  title?: string;
  subTitle?: string;
  body?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  subTitle2?: string;
  title2?: string;
  mainImage?: ImageAsset;
  gallery?: ImageAsset[];
}
export async function getFacilities() {
  return await client.fetch(groq`*[_type == "facility" ]`);
}

export async function getFacility(slug: any) {
  return await client.fetch(groq`*[_type == "facility"]`, {
    slug,
  });
}

export interface Facility {
  _type: "facility";
  slug: Slug;
  title?: string;
  article?: string;
  article2?: string;
  article3?: string;
  article4?: string;
  mainImage?: ImageAsset;
  mainImage2?: ImageAsset;
  mainImage3?: ImageAsset;
  mainImage4?: ImageAsset;
}
export async function getTestimonials() {
  return await client.fetch(groq`*[_type == "testimonials" ]`);
}

export async function getTestimonial(slug: any) {
  return await client.fetch(groq`*[_type == "testimonials"]`, {
    slug,
  });
}

export interface Testimonial {
  _type: "testimonials";
  slug: Slug;
  title?: string;
  quote?: string;
  quote2?: string;
  quote3?: string;
  quote4?: string;
  quote5?: string;
  quote6?: string;
  quote7?: string;
  quote8?: string;
  quote9?: string;
  quote10?: string;
  quote11?: string;
  quote12?: string;
  quote13?: string;
  quote14?: string;
  quote15?: string;
  quote16?: string;
  image?: ImageAsset;
  image2?: ImageAsset;
  image3?: ImageAsset;
  image4?: ImageAsset;
  image5?: ImageAsset;
  image6?: ImageAsset;
  image7?: ImageAsset;
  image8?: ImageAsset;
  image9?: ImageAsset;
  image10?: ImageAsset;
  image11?: ImageAsset;
  image12?: ImageAsset;
  image13?: ImageAsset;
  image14?: ImageAsset;
  image15?: ImageAsset;
  image16?: ImageAsset;
}

export async function getContact() {
  return await client.fetch(groq`*[_type == "contact"]`);
}
export async function getContacts(slug: any) {
  return await client.fetch(groq`*[_type == "contact"]`, {
    slug,
  });
}
export interface Contact {
  _type: "contact";
  slug: Slug;
  title?: string;
}
export async function getTraining() {
  return await client.fetch(groq`*[_type == "training"]`);
}
export async function getTrainings(slug: any) {
  return await client.fetch(groq`*[_type == "training"]`, {
    slug,
  });
}
export interface Training {
  _type: "training";
  slug: Slug;
  trainer?: string;
  subTitle?: string;
  body?: PortableTextBlock[];
  trainerImage?: ImageAsset;
}
export async function getTrainer_Description() {
  return await client.fetch(groq`*[_type == "training_description"]{mainImage, description}`);
}

export interface Trainer_Description {
  _type: "training_description";
  description?: string;
  mainImage?: ImageAsset;
}
export async function getThankyou() {
  return await client.fetch(groq`*[_type == "thankyou"]`);
}
export async function getThankyous(slug: any) {
  return await client.fetch(groq`*[_type == "thankyou"]`, {
    slug,
  });
}
export interface Thankyou {
  _type: "thankyou";
  slug: Slug;
  title?: string;
  subTitle?: string;
  mainImage?: ImageAsset;
}