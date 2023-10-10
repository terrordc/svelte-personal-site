import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		commonjsOptions: {
		  transformMixedEsModules: true
		}
	  },
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
		// Configure the public directory
		// This is where Vite will serve static assets from
		publicDir: 'public',
		
	  },
});
