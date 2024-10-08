import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'devalue';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_78IMylia.mjs';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/horse/Desktop/sites/astro/tafthill-acres-astro/","adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"facility/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/facility","isIndex":false,"type":"page","pattern":"^\\/facility\\/?$","segments":[[{"content":"facility","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/facility.astro","pathname":"/facility","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"testimonials/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonials","isIndex":false,"type":"page","pattern":"^\\/testimonials\\/?$","segments":[[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonials.astro","pathname":"/testimonials","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"thanks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thanks","isIndex":false,"type":"page","pattern":"^\\/thanks\\/?$","segments":[[{"content":"thanks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thanks.astro","pathname":"/thanks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"training/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/training","isIndex":false,"type":"page","pattern":"^\\/training\\/?$","segments":[[{"content":"training","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/training.astro","pathname":"/training","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.BCIwflFq.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/facility.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/testimonials.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/thanks.astro",{"propagation":"none","containsHead":true}],["/Users/horse/Desktop/sites/astro/tafthill-acres-astro/src/pages/training.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/facility@_@astro":"pages/facility.astro.mjs","\u0000@astro-page:src/pages/testimonials@_@astro":"pages/testimonials.astro.mjs","\u0000@astro-page:src/pages/thanks@_@astro":"pages/thanks.astro.mjs","\u0000@astro-page:src/pages/training@_@astro":"pages/training.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DjkpfCIX.mjs","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","@astrojs/react/client.js":"_astro/client.CrHxYuw0.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.C2cF2PFZ.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BWIlgos-.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.Cnh4tXH1.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.DoHW_eAO.js","/astro/hoisted.js?q=0":"_astro/hoisted.DlYhLf9O.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Cvjbmd3i.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/presentation/dist/_chunks-es/resources.js":"_astro/resources.DlLz8SaT.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/presentation/dist/_chunks-es/BroadcastDisplayedDocument.js":"_astro/BroadcastDisplayedDocument.Cnh3npcQ.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.Cg8Pm3Vg.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CSc6c8x4.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.CSSfW5sT.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/presentation/dist/_chunks-es/PostMessageRefreshMutations.js":"_astro/PostMessageRefreshMutations.DrTaLIQc.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.Hw3EDw4F.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/presentation/dist/_chunks-es/LoaderQueries.js":"_astro/LoaderQueries.Crw_8mRd.js","/Users/horse/Desktop/sites/astro/tafthill-acres-astro/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.B_J2udT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/taft-hill-acres-logo._b8ZVJxA.png","/_astro/about.XsIJcHWv.css","/_astro/studio-route.BCIwflFq.css","/astro.svg","/favicon-a.svg","/favicon.svg","/form.html","/sanity.svg","/thanks.html","/_astro/BroadcastDisplayedDocument.Cnh3npcQ.js","/_astro/DisplayedDocumentBroadcaster.Dlfl5N_i.js","/_astro/LoaderQueries.Crw_8mRd.js","/_astro/PostMessageRefreshMutations.DrTaLIQc.js","/_astro/PresentationTool.D58nJWpH.js","/_astro/SanityVision.B_J2udT7.js","/_astro/browser.DcKbwW99.js","/_astro/client.CrHxYuw0.js","/_astro/client.CwOmHWpG.js","/_astro/hoisted.DlYhLf9O.js","/_astro/index.Cg8Pm3Vg.js","/_astro/index2.CSc6c8x4.js","/_astro/index3.Hw3EDw4F.js","/_astro/resources.C2cF2PFZ.js","/_astro/resources.Cnh4tXH1.js","/_astro/resources.DlLz8SaT.js","/_astro/resources2.BWIlgos-.js","/_astro/resources3.DoHW_eAO.js","/_astro/stegaEncodeSourceMap.Cvjbmd3i.js","/_astro/studio-component.C1B-Zw_Q.js","/_astro/studio-component.CSSfW5sT.js","/images/Wyatt.jpg","/images/taft-hill-acres-logo.png","/styles/tailwind.css","/about/index.html","/contact/index.html","/facility/index.html","/testimonials/index.html","/thanks/index.html","/training/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"nAN/R+Aig9ZvIqBVCI+xZxPfr1ixkXddf1FBXx9AsRI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
