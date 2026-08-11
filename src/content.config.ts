import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: z.object({
		name: z.string(),
		icon: z.string(),
		description: z.string(),
		order: z.number().optional(),
		links: z
			.array(
				z.object({
					icon: z.string(),
					href: z.string(),
					text: z.string(),
				}),
			)
			.optional(),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				}),
			)
			.optional(),
	}),
});

const contributions = defineCollection({
	loader: file("./src/content/contributions.json"),
	schema: z.object({
		name: z.string(),
		icon: z.string(),
		description: z.string(),
		link: z.string(),
		order: z.number().optional(),
	}),
});

export const collections = { projects, contributions };
