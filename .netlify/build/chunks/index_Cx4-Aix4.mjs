import './page-ssr_BZjvjqOY.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortableText } from './PortableText_DcrlKQ2G.mjs';
import { $ as $$Layout } from './Layout_D_OFziVi.mjs';
import { f as getHomes, u as urlFor } from './image_A_HmClKQ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homes = await getHomes();
  const [home] = homes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Taft Hill Acres" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center h-full m-auto mb-8"> <p class="w-full lg:w-1/2 bg-tan text-2xl font-light p-6 m-auto"> ${home.title} </p> <div class="w-full lg:w-3/5 m-auto text-center"> ${home.mainImage ? renderTemplate`<img class="z-10 object-cover w-full lg:w-5/6 m-auto"${addAttribute(urlFor(home.mainImage).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} <div class="w-full lg:w-5/6 my-12 m-auto lg:flex justify-center"> <p class="w-full lg:w-1/4 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-darktan/50 pr-8"> ${home.blurb} </p> <p class="w-full lg:w-1/4 text-center mt-2 lg:pl-12">${home.blurb2}</p> </div> </div> <section class="w-full bg-tan mx-auto py-8 lg:p-8"> <div class="w-full lg:w-2/3 m-auto"> <h3 class="text-black text-2xl">${home.subtitle2}</h3> <h2 class="text-black text-5xl text-center mb-12">${home.title2}</h2> <div class="lg:flex justify-center lg:text-left text-2xl items-center"> <div class="w-full mb-12 lg:w-1/2 p-4 lg:border-r-2"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": home.body })} </div> <div class="w-full lg:w-1/2 lg:py-4 p-4 lg:pl-8"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": home.body2 })} </div> </div> </div> </section> </div> <section class="w-2/3 m-auto mt-24 masonry sm:masonry-sm md:masonry-md"> <div class="mx-auto w-2/3 mt-4 pb-8"> <a class="w-3/4 bg-tan text-darktan mt-24 p-4 lg:text-2xl font-extrabold"${addAttribute(home.buttoninternalLink, "href")} rel="noopener noreferrer">${home.button}</a> </div> <div class=""> ${home.mason ? renderTemplate`<img class="mb-4 lg:mb-0"${addAttribute(urlFor(home.mason).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} </div> ${home.mason2 ? renderTemplate`<img class="mb-4 lg:mb-0"${addAttribute(urlFor(home.mason2).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} ${home.mason4 ? renderTemplate`<img class="my-4 lg:mb-0"${addAttribute(urlFor(home.mason4).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} ${home.mason3 ? renderTemplate`<img class="mb-4 lg:mb-0"${addAttribute(urlFor(home.mason3).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} <div class="w-3/5 ml-[85px] mt-8"> <a class=" bg-tan text-darktan  p-4 lg:text-2xl font-extrabold"${addAttribute(home.button2internalLink, "href")} rel="noopener noreferrer">${home.button2}</a> </div> </section> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/index.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
