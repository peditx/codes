import { defineCollection, z } from 'astro:content';

// تعریف شمای دیتای "releases"
const releasesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    coverImage: z.string().optional(),
    scriptContent: z.string().optional(),
  }),
});

export const collections = {
  'releases': releasesCollection,
};
