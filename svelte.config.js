import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: true,
			sourceMap: true
		}),
		mdsvex({
			extensions: ['.md'],
			layout: new URL('src/lib/layouts/Default.svelte', import.meta.url).pathname
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
