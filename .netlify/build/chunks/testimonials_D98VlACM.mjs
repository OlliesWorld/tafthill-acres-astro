import './page-ssr_BZjvjqOY.mjs';
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_D_OFziVi.mjs';
import { b as getTestimonials, u as urlFor } from './image_A_HmClKQ.mjs';

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = await getTestimonials();
  const [testimonial] = testimonials;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-darktan text-5xl text-center mb-8">${testimonials.title}</h2> <div class="lg:w-3/4 m-auto gap-8 mb-12 text-xl"> <h1 class="text-darktan font-extrabold text-5xl text-center mb-8">
Testimonials
</h1> ${Object.keys(testimonial).sort((a, b) => {
    const numA = parseInt(a.replace("quote", ""), 10);
    const numB = parseInt(b.replace("quote", ""), 10);
    return numA - numB;
  }).map((key, index) => {
    if (key.startsWith("quote")) {
      const quoteNumber = key.replace("quote", "");
      let imageKey = `image${quoteNumber}`;
      if (!testimonial[imageKey]) {
        imageKey = `image1`;
      }
      const nameKey = `name${quoteNumber}`;
      return renderTemplate`<div${addAttribute(`lg:flex mb-12 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`, "class")}> ${testimonial[imageKey] && renderTemplate`<div class=""> <img${addAttribute(urlFor(testimonial[imageKey]).url(), "src")}${addAttribute(testimonial[imageKey], "alt")} class="w-full h-[450px] object-contain"> </div>`} <div class="lg:w-2/3 bg-tan my-auto p-8"> <p class="text-2xl">"${testimonial[key]}"</p> <p class="text-2xl font-bold text-darktan text-center mt-8">
~ ${testimonial[nameKey]} ~
</p> </div> </div>`;
    }
  })} </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/testimonials.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-24/src/pages/testimonials.astro";
const $$url = "/testimonials";

export { $$Testimonials as default, $$file as file, $$url as url };
