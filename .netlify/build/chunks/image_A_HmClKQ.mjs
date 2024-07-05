import { createClient } from '@sanity/client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

const client$1 = createClient({
  projectId: "g22q29ty",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-24"
});
async function getHomes() {
  return await client$1.fetch(
    groq`*[_type == "home" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getAbouts() {
  return await client$1.fetch(groq`*[_type == "about"]`);
}
async function getFacilities() {
  return await client$1.fetch(groq`*[_type == "facility" ]`);
}
async function getTestimonials() {
  return await client$1.fetch(groq`*[_type == "testimonials" ]`);
}
async function getTraining() {
  return await client$1.fetch(groq`*[_type == "training"]`);
}
async function getTrainer_Description() {
  return await client$1.fetch(groq`*[_type == "training_description"]{mainImage, description}`);
}
async function getThankyous(slug) {
  return await client$1.fetch(groq`*[_type == "thankyou"]`, {
    slug
  });
}

const client = createClient({
  projectId: "g22q29ty",
  dataset: "production",
  apiVersion: "2024-01-24",
  useCdn: true
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export { getFacilities as a, getTestimonials as b, getThankyous as c, getTrainer_Description as d, getTraining as e, getHomes as f, getAbouts as g, urlFor as u };
