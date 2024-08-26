import { s as sanityClient } from './page-ssr_itDYPmsu.mjs';

const visualEditingEnabled = true;
const token = "skBdIXQIKzJWFLjgv31JKKUWHSxmcEaV7LfkP4vHYVYrN3tW5H8vhJo07cKrZDZLUR46X9lB6CKILTJyKC5Px4AJNLbA4wtp7CMexDpRJIvr2hnfaYVJMmytUwKEOhZMidtS2oJ0ZJAvD209STAmN1AnrNedR6BocC71F0GwJ6xoBCCAGa7a";
async function loadQuery({
  query,
  params
}) {
  const perspective = "previewDrafts" ;
  const { result, resultSourceMap } = await sanityClient.fetch(query, params ?? {}, {
    filterResponse: false,
    perspective,
    resultSourceMap: "withKeyArraySelector" ,
    stega: visualEditingEnabled,
    ...{ token } ,
    useCdn: !visualEditingEnabled
  });
  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective
  };
}

function decodeHtmlEntities(text) {
  const entities = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39": "'",
    "&nbsp;": " "
    // Add more entities as needed
  };
  return text.replace(/&[a-zA-Z0-9#]+;/g, (match) => entities[match] || match);
}
function cleanText(text) {
  return text.replace(/[^\x20-\x7E]/g, "").replace(/,/g, "\n");
}

export { cleanText as c, decodeHtmlEntities as d, loadQuery as l };
