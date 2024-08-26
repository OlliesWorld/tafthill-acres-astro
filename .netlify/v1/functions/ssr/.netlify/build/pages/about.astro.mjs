import '../chunks/page-ssr_itDYPmsu.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortableText } from '../chunks/PortableText_PnbRjWS-.mjs';
import { $ as $$Layout } from '../chunks/Layout_D4VhzoNX.mjs';
import { u as urlFor } from '../chunks/image_s951y51I.mjs';
import { l as loadQuery, c as cleanText, d as decodeHtmlEntities } from '../chunks/textUtils_DPALRq06.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const result = await loadQuery({
    query: `*[_type == 'about'] | order(_createdAt desc) {
    title,
    subtitle,
    body,
    mainImage,
    gallery,
    title2,
    subtitle2,
    body2
  }[0]`
  });
  const about = result && result.data ? {
    title: typeof result.data.title === "string" ? cleanText(decodeHtmlEntities(result.data.title)) : "",
    subtitle: typeof result.data.subtitle === "string" ? cleanText(decodeHtmlEntities(result.data.subtitle)) : "",
    body: Array.isArray(result.data.body) ? result.data.body : [],
    title2: typeof result.data.title2 === "string" ? cleanText(decodeHtmlEntities(result.data.title2)) : "",
    subtitle2: typeof result.data.subtitle2 === "string" ? cleanText(decodeHtmlEntities(result.data.subtitle2)) : "",
    body2: Array.isArray(result.data.body2) ? result.data.body2 : [],
    mainImage: result.data.mainImage || "",
    gallery: Array.isArray(result.data.gallery) ? result.data.gallery : []
    // Ensure mainImage is included
  } : {
    title: "",
    subtitle: "",
    body: [],
    title2: "",
    subtitle2: "",
    body2: [],
    mainImage: "",
    gallery: []
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Taft Hill Acres | About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center h-full w-full md:h-3/4 md:w-3/4 m-auto my-8"> <div class="m-auto text-center"> <h1 class="lg:w-5/6 bg-darktan text-4xl text-white p-6 m-auto">About Taft Hill Acres</h1> ${about.mainImage && renderTemplate`<img class="z-10 object-cover w-full lg:w-5/6 m-auto"${addAttribute(urlFor(about.mainImage.asset).url(), "src")} alt="Bridge with barn and arena in the background">`} </div> <div class="lg:w-3/4 bg-darktan mx-auto p-4 lg:p-12"> <h2 class="text-left text-black font-extrabold text-4xl">${about.subtitle}</h2> ${about.title && renderTemplate`<h2 class="text-green text-5xl text-center mb-4">${about.title}</h2>`} <div class="text-white text-left text-2xl"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": about.body })} </div> </div> <div class="lg:w-3/4 bg-darktan mx-auto my-8 p-4 lg:p-12"> <h2 class="text-left text-black font-extrabold text-4xl">${about.subtitle2}</h2> ${about.title2 && renderTemplate`<h2 class="text-green text-5xl text-center mb-4">${about.title2}</h2>`} <div class="text-white text-left text-2xl"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": about.body2 })} </div> </div> <div class="lg:columns-3 sm:columns-2 gap-4"> ${about.gallery.map((item) => renderTemplate`<div class="py-2 px-1 inline-block w-full group"> <img${addAttribute(urlFor(item).url(), "src")}${addAttribute(item.alt || "", "alt")} loading="lazy"> </div>`)} </div> </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/about.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
