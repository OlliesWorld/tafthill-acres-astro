import '../chunks/page-ssr_itDYPmsu.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D4VhzoNX.mjs';
import { u as urlFor } from '../chunks/image_s951y51I.mjs';
import { l as loadQuery, d as decodeHtmlEntities, c as cleanText } from '../chunks/textUtils_DPALRq06.mjs';
export { renderers } from '../renderers.mjs';

const $$Facility = createComponent(async ($$result, $$props, $$slots) => {
  const result = await loadQuery({
    query: `*[_type == 'facility'] | order(_createdAt desc) {
    title,
    mainImage,
    article,
    mainImage2,
    article2,
    mainImage3,
    article3,
    mainImage4,
    article4
  }`
  });
  const facilities = result ? result.data.map((facility) => ({
    ...facility,
    title: typeof facility.title === "string" ? decodeHtmlEntities(facility.title) : facility.title,
    article: typeof facility.article === "string" ? decodeHtmlEntities(facility.article) : facility.article,
    article2: typeof facility.article2 === "string" ? decodeHtmlEntities(facility.article2) : facility.article2,
    article3: typeof facility.article3 === "string" ? decodeHtmlEntities(facility.article3) : facility.article3,
    article4: typeof facility.article4 === "string" ? decodeHtmlEntities(facility.article4) : facility.article4
  })) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Facility" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="m-auto text-center"> ${facilities.map((facility) => renderTemplate`<div> <h3 class="text-darktan text-5xl text-center my-8 font-extrabold">${cleanText(facility.title)}</h3> <img class="z-10 object-cover w-full lg:w-3/4 m-auto"${addAttribute(urlFor(facility.mainImage).url(), "src")}${addAttribute(`${cleanText(facility.title)}`, "alt")}> ${[facility.article, facility.article2, facility.article3, facility.article4].map((content, idx) => {
    const imageKey = `mainImage${idx + 2}`;
    const image = facility[imageKey];
    return renderTemplate`<div class="w-5/6 lg:w-1/2 text-center mx-auto my-8 text-xl md:text-4xl"> ${String(content).split("\n").map((line) => renderTemplate`<p class="leading-relaxed mb-8 whitespace-pre-line">${cleanText(line)}</p>`)} ${image && typeof image !== "string" && renderTemplate`<img class="z-10 object-cover w-full lg:w-3/4 m-auto"${addAttribute(urlFor(image).url(), "src")}${addAttribute(`${cleanText(facility.title)}`, "alt")}>`} </div>`;
  })} </div>`)} </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/facility.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/facility.astro";
const $$url = "/facility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Facility,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
