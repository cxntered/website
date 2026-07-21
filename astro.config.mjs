// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

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
	}]
});
