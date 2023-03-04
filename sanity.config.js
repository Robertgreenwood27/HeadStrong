import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'etxmd4lr',
  dataset: 'production',
  apiVersion: '2023-02-19',
  useCdn: true,
});

export default client;