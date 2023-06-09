<script setup lang="ts">
import type { Image } from "~~/interfaces";

const config = useRuntimeConfig();
const TMDB_IMG_URL = config.public.img_url;
defineProps<{
  item: Image;
}>();
</script>

<template>
  <button
    class="text-left bg-gray relative hover:scale-105 transition-all flex justify-center items-center"
    title="View photo"
  >
    <img
      v-if="item.file_path"
      :src="`${TMDB_IMG_URL}/w400/${item.file_path}`"
      alt="Photo"
      class="w-full h-full object-cover"
    />
    <Icon
      v-else
      name="iconoir:file-not-found"
      class="w-12 h-12 text-gray-500"
    />
  </button>
</template>
