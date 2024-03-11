import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import Google from '@auth/core/providers/google';


// https://astro.build/config
export default defineConfig({
  site: "https://podsidekiq.com",
  server: { host: '0.0.0.0'},
  integrations: [tailwind(), mdx(), sitemap(), icon({
    include: {
      mdi: ["*"],
      bi: ["*"],
      ci: ["*"],
      uil: ["*"],
      'simple-icons': ["*"],
      teenyicons: ["*"]
    },
  })],
  providers: [
		GoogleProvider({
			clientId: import.meta.env.GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
		}),
	],
});
