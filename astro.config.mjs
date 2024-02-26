import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  site: "https://fabform.io",
  server: { host: '0.0.0.0'},
  integrations: [tailwind(), mdx(), sitemap(), icon({
    include: {
      mdi: ["*"],
      bi: ["*"],
      ci: ["*"],
      'simple-icons': ["*"]
    },
  })],
});
