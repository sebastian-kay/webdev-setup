import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['**/js/*.test.js'],
		globals: true,
		reporters: 'verbose',
	},
	root: 'src',
	build: {
		emptyOutDir: true,
		minify: false,
		outDir: '../dist',
	},
	server: {
		port: 3030,
	},
	preview: {
	  port: 4040,
	}
});
