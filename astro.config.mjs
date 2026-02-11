// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://example.com',
  adapter: vercel(),
  integrations: [sitemap()],
});