import { c as createComponent, r as renderTemplate, a as addAttribute, e as createAstro, m as maybeRenderHead, d as renderComponent, b as renderHead, f as renderSlot } from './astro/server_78IMylia.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_oAx-BAau.mjs';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links text-center"> <a class="menu__item" href="/" rel="noopener noreferrer">Home</a> <a class="menu__item" href="/about" rel="noopener noreferrer">About</a> <a class="menu__item" href="/facility" rel="noopener noreferrer">Facility</a> <a class="menu__item" href="/training" rel="noopener noreferrer">Training</a> <a class="menu__item" href="/testimonials" rel="noopener noreferrer">Testimonials</a> <a class="menu__item" href="/contact" rel="noopener noreferrer">Contact</a> </div>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <svg class="ham ham3" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')"> <path class="line top" d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"></path> <path class="line middle" d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"></path> <path class="line bottom" d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"></path> </svg> </div>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/components/Hamburger.astro", void 0);

const Logo = new Proxy({"src":"/_astro/taft-hill-acres-logo._b8ZVJxA.png","width":625,"height":438,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/public/images/taft-hill-acres-logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="p-2"> <nav class="h-50"> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Taft Hill Acres logo", "class": "max-w-[550px] w-1/2 lg:w-1/3 m-auto", "loading": "eager" })} </header>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/components/Header.astro", void 0);

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
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="max-w-[1400px] mx-auto"> <div> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} <!-- <VisualEditing enabled={visualEditingEnabled} zIndex={1000} /> --> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div>  </body> </html>`;
}, "/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
