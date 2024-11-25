// https://nuxt.com/docs/api/configuration/nuxt-config
// import {resolve} from "path";
export default defineNuxtConfig({
  alias: {
    assets: "<rootdir>/assets",
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  modules: ["usebootstrap", "@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
});