export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mgbl",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "~/assets/favicon/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "~/assets/favicon/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "~/assets/favicon/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "~/assets/favicon/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "~/assets/favicon/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "~/assets/favicon/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "~/assets/favicon/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "~/assets/favicon/apple-icon-180x180.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "~/assets/favicon/android-icon-192x192.png",
      },
      {
        rel: "icon",
        typeof: "image/png",
        size: "32x32",
        href: "~/assets/favicon/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        size: "57x57",
        href: "~/assets/favicon/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        size: "57x57",
        href: "~/assets/favicon/apple-icon-57x57.png",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "~/assets/css/reset.css",
    "~/assets/css/style.scss",
    "~/assets/css/responsive.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
