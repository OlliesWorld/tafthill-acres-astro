import '../chunks/page-ssr_itDYPmsu.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D4VhzoNX.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="block p-6 max-w-md m-auto text-center my-4"> <div class="feedback-form"> <form data-netlify="true" netlify-honeypot="bot-field" name="contact" method="POST" action="/thanks"> <p class="hidden"> <label>
Don't fill this out if you're human: <input name="bot-field"> </label> </p> <input type="hidden" name="form-name" value="contact"> <label class="hidden" for="name">Name</label> <input id="name" type="text" placeholder="name" name="name" class="p-2 mb-2 w-full text-black border-b-2 border-darktan active:bg-tan focus:outline-none focus:ring focus:ring-tan"> <label class="hidden" for="email">Email</label> <input id="email" type="email" name="email" placeholder="email" required class="p-2 mb-2 w-full text-black border-b-2 border-darktan active:bg-tan focus:outline-none focus:ring focus:ring-tan"> <label class="hidden" for="message">Message</label> <textarea id="message" wrap="soft" name="message" placeholder="message" required class="w-full p-2 h-72 text-black border-2 border-darktan active:bg-tan focus:outline-none focus:ring focus:ring-tan"></textarea> <button type="submit" class="bg-darktan text-white p-2 mt-4 hover:bg-tan hover:text-black hover:border-darktan border-2">Submit</button> </form> </div> </div>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/components/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="my-12"> <h2 class="text-darktan text-3xl text-center font-bold">Send us a message</h2> <div class=" container grid lg:grid-cols-2  m-auto"> ${renderComponent($$result2, "Form", $$Form, {})} <div class="lg:w-2/3 col-span-1 bg-tan  lg:h-8/12  p-6 text-xl m-auto"> <p>We are conveniently located within 2 miles of CSU, and Old Town. There is direct access to the Poudre Trail and close access to Lory State Park and Reservoir Ridge.</p> <div class="text-3xl text-center mt-12"> <p>1012 N Taft Hill Rd</p> <p>Fort Collins, CO 80521</p> </div> </div> </div> </div> ` })}`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/contact.astro", void 0);

const $$file = "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
