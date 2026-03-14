import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
  }),
});

const logCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    content: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  log: logCollection,
};