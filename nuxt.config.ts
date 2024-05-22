// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false},
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootsrapap85.2/dist/js/bootstrap.min.js",
        },
      ],
    },
  },

  modules: ["@nuxtjs/supabase"],
  supabase: {redirect: false}
  
}) 


