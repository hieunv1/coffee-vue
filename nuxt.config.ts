// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      meta: [{ charset: "utf-8" }],
      link: [
        { rel: "preconnect", type: "text/css", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          type: "text/css",
          href: "https://fonts.googleapis.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  alias: {
    assets: "/<rootDir>/assets/",
  },
});
