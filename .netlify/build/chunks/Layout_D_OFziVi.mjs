import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, e as renderComponent, d as renderHead, f as renderSlot } from './astro/server_-lUIeEdl.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links text-center"> <a class="menu__item" href="/" rel="noopener noreferrer">Home</a> <a class="menu__item" href="/about" rel="noopener noreferrer">About</a> <a class="menu__item" href="/facility" rel="noopener noreferrer">Facility</a> <a class="menu__item" href="/training" rel="noopener noreferrer">Training</a> <a class="menu__item" href="/testimonials" rel="noopener noreferrer">Testimonials</a> <a class="menu__item" href="/contact" rel="noopener noreferrer">Contact</a> </div>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/components/Hamburger.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="p-2"> <nav class="h-50"> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> <img src="/images/Logo-THA.png" alt="Taft Hill Acreslogo" class="max-w-[550px] w-1/2 lg:w-1/3 m-auto"> </header>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="pt-12"> <div class="w-full lg:w-2/3 lg:flex justify-center  content-center m-auto pb-8"> <div class="w-48 md:w-1/4 m-auto pl-8 lg:pl-0 text-center flex"> <p class="uppercase my-auto">Follow us</p> <a class="my-auto" href="https://www.facebook.com/TaftHillAcres/?ref=hl" aria-label="Head to Facebook to find out more"> <svg class="h-8 w-8 " viewBox="0 0 24 24" fill="none" stroke="rgb(59 130 246)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> ${" "} <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a> </div> <div class="w-full  p-6 lg:mt-8 lg:mr-8 h-auto text-center"> <h3 class="text-md justify-center text-xl">
Fort Collins Horse Boarding Facility
</h3> <p class="text-center">
Serving the Fort Collins community since 2012
</p> </div> <div class="md:w-3/4 md:m-auto lg:w-2/3 text-center  mt-8 p-4 ">  <div class="grid grid-cols-2  text-sm "> <a class="p-2 border-b-2 border-r-2 border-slate-300" href="/">
Home
</a> <a class="p-2 border-b-2 border-slate-50" href="/about">
About
</a> <a class="p-2 border-b-2 border-r-2 border-slate-50" href="/facility">
Facility
</a> <a class="p-2 border-b-2  border-slate-50" href="/training">
Training
</a> <a class="pr-6 pt-2 border-r-2 border-slate-50" href="/testimonials">
Testimonials
</a> <a class="p-2 mt-2 ml-4 bg-darktan text-white" href="/contact">
Contact
</a> </div> </div> </div> <div class="pl-4 lg:pl-60 bg-tan"> <p class="text-xs pt-2 m-0">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Taft Hill Acres
</p> <p class="mt-0 text-sm ">
Made with <span role="img">💙</span> by
<a href="https://roni.rocks/" target="/"> ${" "}
Roni
</a> </p> </div> </footer>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <div> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div>  </body> </html> <!-- <style>
  .container {
    margin: 0 auto;
  }

  main {
    margin-top: 45px;
  }

  .header {
    display: flex;
    padding: 0 var(--space-1);
    border-bottom: 1px solid #ced2d9;

    z-index: 10;
    background: var(--white);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
}
     .header__title {
      font-weight: 800;
      font-size: var(--font-size-3);
      line-height: var(--line-height-1);
      padding-left: var(--space-2);
      margin: var(--space-3) 0;
      text-decoration: none;
      color: var(--black);
    }
  

  .footer {
    display: flex;
    justify-content: flex-end;
    padding: 0 var(--space-3);

    & .footer__text {
      font-size: var(--font-size-1);
      line-height: var(--line-height-1);
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }

  @media (min-width: 575px) {
    .container {
      max-width: var(--max-width-1);
      padding: 0 var(--space-4);
    }

    main {
      margin-top: unset;
    }

    .header {
      position: unset;
      border-bottom: none;
      margin: var(--space-3) 0;
      padding: var(--space-2) 0;
      background: unset;

      & .header__title {
        margin: var(--space-3) 0 var(--space-2);
        font-size: var(--font-size-5);
      }
    }

    .footer {
      margin: var(--space-3) 0;
    }
  }
</style> --> <!-- <style is:global>
  :root {
    --space-0: 0;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 20px;
    --space-5: 32px;
    --space-6: 52px;
    --space-7: 84px;
    --space-8: 136px;
    --space-9: 220px;

    --font-family-sans: Inter;
    --font-family-serif: PT Serif;
    --font-family-mono: IMB Plex Mono;

    --font-size-0: 12px;
    --font-size-1: 14px;
    --font-size-2: 16px;
    --font-size-3: 18px;
    --font-size-4: 20px;
    --font-size-5: 24px;
    --font-size-6: 30px;
    --font-size-7: 36px;
    --font-size-8: 48px;
    --font-size-9: 60px;
    --font-size-10: 72px;

    --line-height-0: 16px;
    --line-height-1: 20px;
    --line-height-2: 24px;
    --line-height-3: 28px;
    --line-height-4: 28px;
    --line-height-5: 32px;
    --line-height-6: 36px;
    --line-height-7: 40px;
    --line-height-8: 48px;
    --line-height-9: 60px;
    --line-height-10: 72px;
    --line-height-11: 96px;
    --line-height-12: 128px;

    --white: #fff;
    --black: #101112;
    --gray-200: #ced2d9;
    --gray-600: #6e7683;
    --blue-600: #1e61cd;
    --magenta-100: #f9d7eb;

    --max-width-0: 320px;
    --max-width-1: 768px;
  }

  html {
    background-color: var(--white);
    font-family: var(--font-family-sans), var(--font-family-serif), sans-serif;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }
</style> -->`;
}, "/Users/horse/Desktop/sites/astro/tafthill-24/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
