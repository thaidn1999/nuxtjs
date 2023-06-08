<template>
  <div
    class="p-10 flex flex-col items-center border-t border-solid border-[#262626]"
  >
    <p class="mt-4 text-sm text-gray-500">
      Made with
      <NuxtLink to="https://v3.nuxtjs.org/" alt="Nuxt3" :style="nuxtBackground">
        <Icon name="vscode-icons:file-type-nuxt" class="inline w-6 h-6 mb-2" />
        <span class="font-bold text-lg hidden md:inline">Nuxt3</span>
      </NuxtLink>
      <span class="mr-16"></span>
      <NuxtLink
        to="https://tailwindcss.com/"
        alt="Tailwindcss"
        :style="tailwindBackground"
      >
        <Icon
          name="vscode-icons:file-type-tailwind"
          class="inline w-6 h-6 mb-2"
        />
        <span class="font-bold text-lg hidden md:inline">Tailwindcss</span>
      </NuxtLink>
      <span class="mr-16"></span>
      <NuxtLink
        to="https://www.typescriptlang.org/"
        alt="TypeScript"
        :style="tsBackground"
      >
        <Icon name="logos:typescript-icon-round" class="inline w-6 h-6 mb-2" />
        <span class="font-bold text-lg hidden md:inline">TypeScript</span>
      </NuxtLink>
    </p>
    <p class="mt-4 text-sm text-gray-500">
      Data provided by
      <NuxtLink
        to="https://www.themoviedb.org/"
        alt="TMDB"
        class="text-md tracking-widest font-bold"
        :style="tmdbBackground"
      >
        TMDB
      </NuxtLink>
    </p>

    <div class="flex gap-4 mt-8">
      <NuxtLink
        to="https://twitter.com/cn91288"
        class="block px-2"
        alt="twitter@cn91288"
      >
        <Icon name="icomoon-free:twitter" class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/"
        class="block px-2"
        alt="kurt-liao/nuxt3-movies"
      >
        <Icon name="icomoon-free:github" class="h-6 w-6" />
      </NuxtLink>
      <NuxtLink to="https://facebook.com" class="block px-2" alt="facebook.com">
        <Icon name="icomoon-free:facebook" class="h-6 w-6" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const nuxtBackground = {
  background: "-webkit-linear-gradient(#A5CC82, #99f2c8)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const tailwindBackground = {
  background: "-webkit-linear-gradient(#00F260, #0575E6)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const tsBackground = {
  background: "-webkit-linear-gradient(#56CCF2, #2F80ED)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const tmdbBackground = {
  background: "-webkit-linear-gradient(#85CCA5, #3DB5E2)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};
</script>

<style scoped lang="scss"></style>
