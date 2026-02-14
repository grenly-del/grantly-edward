// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({

  site: 'https://grantly.klabatdev.my.id',

  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['gsap'],
    },
  }

});
