import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../portfolio/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional().nullable(),
    link: z.string().optional().nullable(),
    category: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    updated: z.date().optional(),
  }),
});

export const collections = { projects };
