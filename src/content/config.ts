import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		icon: z.string(),
		description: z.string(),
		links: z
			.array(
				z.object({
					icon: z.string(),
					href: z.string(),
					text: z.string(),
				}),
			)
			.optional(),
		images: z.array(z.string()).optional(),
		order: z.number().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
