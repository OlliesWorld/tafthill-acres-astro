import { renderers } from './renderers.mjs';
import { manifest } from './manifest_COnJjFLv.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/facility.astro.mjs');
const _page5 = () => import('./pages/testimonials.astro.mjs');
const _page6 = () => import('./pages/thanks.astro.mjs');
const _page7 = () => import('./pages/training.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/facility.astro", _page4],
    ["src/pages/testimonials.astro", _page5],
    ["src/pages/thanks.astro", _page6],
    ["src/pages/training.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c7a53e06-3892-41e8-b660-181f20a95388"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
