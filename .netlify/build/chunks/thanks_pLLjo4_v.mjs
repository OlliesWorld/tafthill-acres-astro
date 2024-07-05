import './page-ssr_BZjvjqOY.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_D_OFziVi.mjs';
import { c as getThankyous, u as urlFor } from './image_A_HmClKQ.mjs';

const $$Thanks = createComponent(async ($$result, $$props, $$slots) => {
  const thanks = await getThankyous("thanks");
  const [thank] = thanks;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank you from Taft Hill Acres | Fort Collins Boarding Facility" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-5/6 lg:w-1/2 bg-tan mx-auto p-8"> <h2 class="text-green text-5xl text-center mb-4">${thank.title}</h2> <h3 class="text-darktan text-2xl">${thank.subtitle}</h3> </div> <div class="w-1/2 mx-auto"> <img class="w-full"${addAttribute(urlFor(thank.mainImage).url(), "src")}${addAttribute(thank.mainImage, "alt")}> </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/thanks.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/thanks.astro";
const $$url = "/thanks";

export { $$Thanks as default, $$file as file, $$url as url };
