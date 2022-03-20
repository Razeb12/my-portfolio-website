import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'qkas0njf',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skd1rtg4kB0sJwRDknC5kIzowCuzb5aeLaXnDcqNuTLmGPFzeqqgFY6r5dWwzGTIiNcVkQOBzyAcsqNQmtjWCW9c123Kl2jdvMP5zuTDG33xEjenshEqQc8wZhZxCmESewE7udsTVvlVaEQJOF3r47m24PFdOF1DnkzToVGnIJuEJaYh6qgg",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
