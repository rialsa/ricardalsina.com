import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from 'tailwindcss/nesting'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  // vite: {
  //   css: {
  //     postcss: {
  //       plugins: [tailwindcssNesting()]
  //     }
  //   }
  // }
});