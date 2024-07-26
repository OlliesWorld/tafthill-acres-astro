import { createClient } from '@sanity/client';
/* empty css                                */

const sanityClient = createClient(
            {"apiVersion":"2023-03-20","projectId":"g22q29ty","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;
