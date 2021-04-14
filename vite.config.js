const useBabel = true;
const sourceMapsInProduction = false;

import { defineConfig } from 'vite';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

const production = process.env.NODE_ENV === 'production';
const config = defineConfig({
  plugins: [
    svelte({
      emitCss: production,
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production,
      },
    }),
  ],
  server: {
    host: 'localhost',
    port: 5000,
  },
  build: {
    sourcemap: sourceMapsInProduction,
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});

if (useBabel) {
  config.plugins.unshift(
    legacy({
      targets: pkg.browserslist,
    })
  );
}

export default config;
