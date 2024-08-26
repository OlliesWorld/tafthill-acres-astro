import '../chunks/page-ssr_itDYPmsu.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute, F as Fragment } from '../chunks/astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D4VhzoNX.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_PnbRjWS-.mjs';
import { u as urlFor } from '../chunks/image_s951y51I.mjs';
import { l as loadQuery, c as cleanText, d as decodeHtmlEntities } from '../chunks/textUtils_DPALRq06.mjs';
export { renderers } from '../renderers.mjs';

const $$Training = createComponent(async ($$result, $$props, $$slots) => {
  const trainerResult = await loadQuery({
    query: `*[_type == 'training' && defined(slug)] | order(_createdAt desc) {
    trainerImage,
    trainer,
    subtitle,
    body,
    slug
  }`
  });
  const trainer = trainerResult ? trainerResult.data.map((trainer2) => ({
    ...trainer2,
    trainer: typeof trainer2.trainer === "string" ? cleanText(decodeHtmlEntities(trainer2.trainer)) : trainer2.trainer,
    subtitle: typeof trainer2.subtitle === "string" ? cleanText(decodeHtmlEntities(trainer2.subtitle)) : trainer2.subtitle,
    body: typeof trainer2.body === "string" ? cleanText(decodeHtmlEntities(trainer2.body)) : trainer2.body
    // Apply the functions to other fields as needed
  })) : null;
  const trainingDescriptionResult = await loadQuery({
    query: `*[_type == 'training_description'] | order(_createdAt desc) {
    mainImage,
    description,
    slug
  }[0]`
  });
  const trainingDescription = trainingDescriptionResult ? {
    ...trainingDescriptionResult.data,
    description: typeof trainingDescriptionResult.data.description === "string" ? cleanText(decodeHtmlEntities(trainingDescriptionResult.data.description)) : trainingDescriptionResult.data.description
  } : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Training at Taft Hill Acres | Fort Collins Boarding Facility" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col lg:flex-row lg:justify-center mx-auto text-center  my-6"> ${trainer && typeof trainer === "object" && Object.values(trainer).map((item) => {
    return renderTemplate`<a class="text-darktan text-2xl font-extrabold lg:mr-12 mb-4"${addAttribute(`#${item.trainer.replace(/[^\x20-\x7E]/g, "").toLowerCase().replace(/ /g, "-")}`, "href")} rel="noopener noreferrer"> <span class="hover:border-b-2 hover:border-slate-50"> ${item.trainer} </span> </a>`;
  })} </section> <section class="lg:w-1/2 text-center m-auto mb-16"> ${trainingDescription && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h4 class="bg-darktan text-tan text-4xl px-4 py-8"> ${trainingDescription.description} </h4> ${trainingDescription.mainImage && renderTemplate`<img class="m-auto"${addAttribute(urlFor(trainingDescription.mainImage.asset).url(), "src")} alt="Horse and rider in the arena">`}` })}`} </section> ${trainer && typeof trainer === "object" && trainer.slice().reverse().map(
    (item) => renderTemplate`<section${addAttribute(`${item.trainer.replace(/[^\x20-\x7E]/g, "").toLowerCase().replace(/ /g, "-")}`, "id")} class="m-auto text-center lg:w-1/2 mb-16"> <div class="bg-darktan p-4"> <h3 class="text-white mb-4 md:text-2xl text-left"> ${item.subtitle} </h3> <h2 class="text-green text-4xl lg:text-6xl font-extrabold text-center mb-4"> ${item.trainer} </h2> </div> <img class="m-auto h-[585px] w-full object-cover"${addAttribute(urlFor(item.trainerImage.asset).url(), "src")}${addAttribute(`Trainer ${item.trainer.replace(/[^\x20-\x7E]/g, "")} working with horse`, "alt")}> <div class="trainer px-4 lg:px-0 text-left mt-6 text-xl md:text-2xl "> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": item.body })} </div> </section>`
  )}` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/training.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/training.astro";
const $$url = "/training";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Training,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
