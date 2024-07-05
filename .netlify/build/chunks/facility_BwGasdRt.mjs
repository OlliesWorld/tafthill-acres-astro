import './page-ssr_BZjvjqOY.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_D_OFziVi.mjs';
import { a as getFacilities, u as urlFor } from './image_A_HmClKQ.mjs';

const $$Facility = createComponent(async ($$result, $$props, $$slots) => {
  const facilities = await getFacilities();
  const [facility] = facilities;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Facility" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-darktan text-5xl text-center mb-8">${facility.title}</h2> <div class="m-auto text-center"> ${facility.mainImage ? renderTemplate`<img class="z-10 object-cover w-full lg:w-3/4 m-auto"${addAttribute(urlFor(facility.mainImage).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} </div> <div class="w-5/6 lg:w-1/2 text-center mx-auto my-8 text-xl md:text-4xl"> <p class="leading-relaxed">${facility.article[0]}</p> <p class="leading-relaxed">${facility.article[1]}</p> <p class="leading-relaxed">${facility.article[2]}</p> <p class="leading-relaxed">${facility.article[3]}</p> </div> <div class="m-auto text-center"> ${facility.mainImage2 ? renderTemplate`<img class="z-10 object-cover w-full lg:w-3/4 m-auto"${addAttribute(urlFor(facility.mainImage2).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} </div> <div class="w-5/6 lg:w-1/2 text-center mx-auto my-8 text-xl md:text-4xl"> <p class="leading-relaxed">${facility.article2[0]}</p> <p class="leading-relaxed">${facility.article2[1]}</p> <p class="leading-relaxed">${facility.article2[2]}</p> <p class="leading-relaxed">${facility.article2[3]}</p> </div> <div class="m-auto text-center"> ${facility.mainImage3 ? renderTemplate`<img class="z-10 object-cover w-full lg:w-3/4 m-auto"${addAttribute(urlFor(facility.mainImage3).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} </div> <div class="w-5/6 lg:w-1/2 text-center mx-auto my-8 text-xl md:text-4xl"> <p class="leading-relaxed">${facility.article3[0]}</p> <p class="leading-relaxed">${facility.article3[1]}</p> <p class="leading-relaxed">${facility.article3[2]}</p> <p class="leading-relaxed">${facility.article3[3]}</p> </div> <div class="m-auto text-center"> ${facility.mainImage4 ? renderTemplate`<img class="z-10 object-cover w-full lg:w-3/4 m-auto"${addAttribute(urlFor(facility.mainImage4).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/facility.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/facility.astro";
const $$url = "/facility";

export { $$Facility as default, $$file as file, $$url as url };
