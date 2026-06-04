import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workCollection = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
  }),
});

const logCollection = defineCollection({
  loader: glob({ base: './src/content/log', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    date: z.string(),
    content: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  log: logCollection,
};
