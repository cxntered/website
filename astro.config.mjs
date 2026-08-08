// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { defineHastPlugin } from 'satteri';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

const externalLinks = defineHastPlugin({
	name: "external-links",
	element: {
		filter: ["a"],
		visit(node, ctx) {
			const href = node.properties.href;
			if (typeof href === "string" && href.startsWith("http")) {
				ctx.setProperty(node, "target", "_blank");
				ctx.setProperty(node, "rel", "noopener noreferrer");
			}
		},
	},
});

// https://astro.build/config
export default defineConfig({
	site: 'https://cxntered.dev',
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [icon()],
	fonts: [{
		provider: fontProviders.fontsource(),
		name: 'JetBrains Mono',
		cssVariable: '--font-jetbrains-mono',
		weights: ['100 800'],
		fallbacks: ['monospace']
	}],
	markdown: {
		processor: satteri({ hastPlugins: [externalLinks] })
	}
});
