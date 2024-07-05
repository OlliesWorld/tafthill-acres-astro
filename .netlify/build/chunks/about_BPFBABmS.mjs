import './page-ssr_BZjvjqOY.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$PortableText } from './PortableText_DcrlKQ2G.mjs';
import { $ as $$Layout } from './Layout_D_OFziVi.mjs';
import { g as getAbouts, u as urlFor } from './image_A_HmClKQ.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const abouts = await getAbouts();
  const [about] = abouts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Taft Hill Acres | About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center h-full w-full md:h-3/4 md:w-3/4 m-auto mb-8"> <div class="m-auto text-center"> ${about.mainImage ? renderTemplate`<img class="z-10 object-cover w-full lg:w-5/6 m-auto"${addAttribute(urlFor(about.mainImage).url(), "src")} alt="Cover image">` : renderTemplate`<div class=""></div>`} </div> <div class="lg:w-3/4 bg-darktan mx-auto p-4 lg:p-12"> <h3 class="text-left text-black font-bold text-2xl">${about.subtitle}</h3> <h2 class="text-green text-5xl text-center mb-4">${about.title}</h2> <div class="text-white text-left text-2xl"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": about.body })} </div> </div> <div class="lg:w-3/4 bg-darktan mx-auto my-8 p-4 lg:p-12"> <h3 class="text-left text-black font-bold text-2xl">${about.subtitle2}</h3> <h2 class="text-green text-5xl text-center mb-4">${about.title2}</h2> <div class="text-white text-left text-2xl"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": about.body })} </div> </div> <div class="lg:columns-3 sm:columns-2 gap-4"> ${about.gallery.map((item) => renderTemplate`<div class="py-2 px-1 inline-block w-full group"> <img${addAttribute(urlFor(item).url(), "src")}${addAttribute(item.alt || "", "alt")}> </div>`)} </div> </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/about.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
