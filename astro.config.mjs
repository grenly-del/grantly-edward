// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({

  output: 'server',

  adapter: node({

    mode: 'standalone'

  }),

  vite: {

    plugins: [tailwindcss()],

    ssr: {

      noExternal: ['gsap'],

    },

  },

  site: 'https://domainanda.com',

  integrations: [sitemap()],

});
