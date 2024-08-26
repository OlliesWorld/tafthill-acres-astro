import '../chunks/page-ssr_itDYPmsu.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D4VhzoNX.mjs';
import { u as urlFor } from '../chunks/image_s951y51I.mjs';
import { l as loadQuery, c as cleanText, d as decodeHtmlEntities } from '../chunks/textUtils_DPALRq06.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_PnbRjWS-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const result = await loadQuery({
    query: `*[_type == 'home'] | order(_createdAt desc) {
    title,
    subTitle,
    blurb,
    blurb2,
    subtitle2,
    title2,
    body,
    body2,
    mainImage,
    mason,
    mason2,
    mason3,
    mason4,
    button,
    buttoninternalLink,
    button2,
    button2internalLink
  }[0]`
  });
  const home = result && result.data ? {
    title: typeof result.data.title === "string" ? cleanText(decodeHtmlEntities(result.data.title)) : "",
    subTitle: typeof result.data.subTitle === "string" ? cleanText(decodeHtmlEntities(result.data.subTitle)) : result.data.subTitle,
    blurb: typeof result.data.blurb === "string" ? cleanText(decodeHtmlEntities(result.data.blurb)) : result.data.blurb,
    blurb2: typeof result.data.blurb2 === "string" ? cleanText(decodeHtmlEntities(result.data.blurb2)) : result.data.blurb2,
    subTitle2: typeof result.data.subTitle2 === "string" ? cleanText(decodeHtmlEntities(result.data.subTitle2)) : result.data.subTitle2,
    title2: typeof result.data.title2 === "string" ? cleanText(decodeHtmlEntities(result.data.title2)) : result.data.title2,
    body: Array.isArray(result.data.body) ? result.data.body : [],
    body2: Array.isArray(result.data.body2) ? result.data.body2 : [],
    mainImage: result.data.mainImage || "",
    mason: result.data.mason || "",
    mason2: result.data.mason2 || "",
    mason3: result.data.mason3 || "",
    mason4: result.data.mason4 || "",
    button: result.data.button || "",
    buttoninternalLink: result.data.buttoninternalLink || "",
    button2: result.data.button2 || "",
    button2internalLink: result.data.button2internalLink || ""
  } : {
    title: "",
    subtitle: "",
    blurb: "",
    blurb2: "",
    title2: "",
    subtitle2: "",
    body: [],
    body2: [],
    mainImage: "",
    mason: [],
    mason2: [],
    mason3: [],
    mason4: [],
    button: "",
    buttoninternalLink: "",
    button2: "",
    button2internalLink: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Taft Hill Acres" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center h-full m-auto my-8"> <h1 class="w-full  bg-tan text-4xl  p-6 m-auto"> ${home.title} </h1> <div class="w-full  m-auto text-center"> ${home.mainImage && renderTemplate`<img class="z-10 object-cover w-full m-auto"${addAttribute(urlFor(home.mainImage.asset).url(), "src")} alt="two horse noses sticking through the gate" loading="eager">`} <div class="w-full lg:w-5/6 my-12 m-auto lg:flex justify-center"> <p class="text-2xl w-full lg:w-2/5 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-darktan/50 lg:pr-8"> ${home.blurb} </p> <p class="text-2xl w-full lg:w-2/5 text-left lg:pl-16">${home.blurb2}</p> </div> </div> <section class="w-full bg-tan mx-auto py-8 lg:p-8"> <div class="w-full lg:w-2/3 m-auto"> <h3 class="text-black text-2xl">${home.subtitle2}</h3> <h2 class="text-black text-5xl text-center mb-12">${home.title2}</h2> <div class="lg:flex justify-center lg:text-left text-2xl items-center"> <div class="w-full mb-12 lg:w-1/2 p-4 lg:border-r-2"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": home.body })} </div> <div class="w-full lg:w-1/2 lg:py-4 p-4 lg:pl-8"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": home.body2 })} </div> </div> </div> </section> </div> <section class="lg:w-2/3 m-auto mt-24 masonry sm:masonry-sm md:masonry-md"> <div class="text-center lg:text-left  mt-4 pb-8"> <a class=" bg-tan text-darktan mt-24 p-4 text-2xl font-extrabold"${addAttribute(cleanText(decodeHtmlEntities(home.buttoninternalLink)), "href")} rel="noopener noreferrer">${cleanText(decodeHtmlEntities(home.button))}</a> </div> <div class=""> ${home.mason && renderTemplate`<img class="mb-4 lg:mb-0"${addAttribute(urlFor(home.mason.asset).url(), "src")} alt="" loading="lazy">`} </div> ${home.mason2 && renderTemplate`<img class="mb-4 lg:mb-0"${addAttribute(urlFor(home.mason2.asset).url(), "src")} alt="Cover image" loading="lazy">`} ${home.mason4 && renderTemplate`<img class="my-4 lg:mb-0"${addAttribute(urlFor(home.mason4.asset).url(), "src")} alt="Cover image" loading="lazy">`} ${home.mason3 && renderTemplate`<img class="mb-4 lg:mb-0"${addAttribute(urlFor(home.mason3.asset).url(), "src")} alt="Cover image" loading="lazy">`} <div class="text-center lg:text-right mt-8"> <a class=" bg-tan text-darktan  p-4 text-2xl font-extrabold"${addAttribute(cleanText(decodeHtmlEntities(home.button2internalLink)), "href")} rel="noopener noreferrer">${cleanText(decodeHtmlEntities(home.button2))}</a> </div> </section> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/index.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
