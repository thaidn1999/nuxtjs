// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@element-plus/nuxt", "nuxt-icon"],
  css: ["~/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
  elementPlus: {
    /** Options */
  },
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      api_url: "https://api.themoviedb.org/3",
      img_url: "https://image.tmdb.org/t/p",
      youtube_url: "https://img.youtube.com/vi",
      api_key: "9d50a09da27fbd0e6f95eba3c4aa1b18",
      api_token:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDUwYTA5ZGEyN2ZiZDBlNmY5NWViYTNjNGFhMWIxOCIsInN1YiI6IjY0N2ZlZTM2OTkyNTljMDBjNWIyNjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U1fkxx6fxKJZ_T83Su6JVdtlvhi9wnuWOic0ab-JpRs",
    },
  },
  // devtools: { enabled: true }
});
