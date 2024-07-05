import './page-ssr_BZjvjqOY.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_D_OFziVi.mjs';
import { $ as $$PortableText } from './PortableText_DcrlKQ2G.mjs';
import { d as getTrainer_Description, e as getTraining, u as urlFor } from './image_A_HmClKQ.mjs';

const $$Training = createComponent(async ($$result, $$props, $$slots) => {
  const descriptions = await getTrainer_Description();
  const [description] = descriptions;
  const trainer = await getTraining();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Training at Taft Hill Acres | Fort Collins Boarding Facility" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center m-auto text-center lg:w-1/2 mb-6"> ${trainer.map((item) => renderTemplate`<a class="text-darktan text-2xl font-extrabold  mr-12 hover:border-b-2"${addAttribute(`#${item.trainer.toLowerCase().replace(/ /g, "-")}`, "href")} rel="noopener noreferrer"> ${item.trainer} </a>`)} </section> <section class="lg:w-1/2 text-center m-auto mb-16"> ${description && renderTemplate`<h4 class=" bg-darktan text-tan text-4xl px-4 py-8"> ${description.description} </h4>`} <img class="m-auto"${addAttribute(urlFor(description.mainImage.asset).url(), "src")}${addAttribute(description.mainImage.alt, "alt")}> </section> ${trainer.slice().reverse().map(
    (item) => renderTemplate`<section${addAttribute(item.trainer.toLowerCase().replace(/ /g, "-"), "id")} class="m-auto text-center lg:w-1/2 mb-16"> <div class="md:w-2/3  bg-darktan p-4"> <h3 class="text-white mb-4 md:text-2xl text-left"> ${item.subtitle} </h3> <h2 class="text-green text-4xl lg:text-6xl font-extrabold text-center mb-4"> ${item.trainer} </h2> </div> <img class="m-auto h-[585px] w-full object-cover"${addAttribute(urlFor(item.trainerImage.asset).url(), "src")}${addAttribute(`Trainer ${item.trainer} working with horse`, "alt")}> <div class="trainer px-4 lg:px-0 text-left mt-6 text-xl md:text-2xl "> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": item.body })} </div> </section>`
  )}` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/training.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/training.astro";
const $$url = "/training";

export { $$Training as default, $$file as file, $$url as url };
