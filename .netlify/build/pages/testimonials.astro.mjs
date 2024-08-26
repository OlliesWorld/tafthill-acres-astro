import '../chunks/page-ssr_itDYPmsu.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D4VhzoNX.mjs';
import { u as urlFor } from '../chunks/image_s951y51I.mjs';
import { l as loadQuery, d as decodeHtmlEntities, c as cleanText } from '../chunks/textUtils_DPALRq06.mjs';
export { renderers } from '../renderers.mjs';

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const response = await loadQuery({
    query: `*[_type == 'testimonials'] | order(_createdAt desc) {
    slug,
    title,
    "quotes": {
      "quote1": quote,
      "quote2": quote2,
      "quote3": quote3,
      "quote4": quote4,
      "quote5": quote5,
      "quote6": quote6,
      "quote7": quote7,
      "quote8": quote8,
      "quote9": quote9,
      "quote10": quote10,
      "quote11": quote11,
      "quote12": quote12,
      "quote13": quote13,
      "quote14": quote14,
      "quote15": quote15,
      "quote16": quote16
    },
    "names": {
      "name1": name,
      "name2": name2,
      "name3": name3,
      "name4": name4,
      "name5": name5,
      "name6": name6,
      "name7": name7,
      "name8": name8,
      "name9": name9,
      "name10": name10,
      "name11": name11,
      "name12": name12,
      "name13": name13,
      "name14": name14,
      "name15": name15,
      "name16": name16
    },
    "images": {
      "image1": image1,
      "image2": image2,
      "image3": image3,
      "image4": image4,
      "image5": image5,
      "image6": image6,
      "image7": image7,
      "image8": image8,
      "image9": image9,
      "image10": image10,
      "image11": image11,
      "image12": image12,
      "image13": image13,
      "image14": image14,
      "image15": image15,
      "image16": image16
    }
  }`
  });
  const result = response.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="m-auto my-12 text-xl"> <div> ${result.map((item) => renderTemplate`<div class="mb-8"> <h2 class="text-darktan font-extrabold text-5xl text-center mb-8"> ${item.title} </h2> <div class="m-auto text-center"> ${item.quotes && Object.entries(item.quotes).sort(([keyA], [keyB]) => {
    const numA = parseInt(keyA.replace("quote", ""), 10);
    const numB = parseInt(keyB.replace("quote", ""), 10);
    return numA - numB;
  }).slice(0, 14).map(([key, quote]) => {
    const imageKey = key.replace("quote", "image");
    const nameKey = key.replace("quote", "name");
    const image = item.images ? item.images[imageKey] : null;
    const name = item.names ? item.names[nameKey] : null;
    return renderTemplate`<div class="flex gap-8 mb-8 justify-center"> ${image && image.asset ? renderTemplate`<img class=" h-[350px] object-contain"${addAttribute(urlFor(image).url(), "src")}${addAttribute(`Image for ${key}`, "alt")}>` : renderTemplate`<p>No image available for ${key}</p>`} <div class="lg:w-2/5 bg-tan my-auto p-12"> <p class="text-darktan text-2xl font-extrabold"> ${decodeHtmlEntities(cleanText(quote))} </p> <p class="text-darktan text-2xl font-extrabold"> ${name} </p> </div> </div>`;
  })} </div> </div>`)} </div> </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/testimonials.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/testimonials.astro";
const $$url = "/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
