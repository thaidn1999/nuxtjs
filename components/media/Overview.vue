<script setup lang="ts">
import type { Media, MediaType } from "~~/interfaces";
const config = useRuntimeConfig();
const TMDB_IMG_URL = config.public.img_url;
const { item, type } = defineProps<{
  item: Media;
  type: MediaType;
}>();
</script>

<template>
  <div>
    <div
      class="md:grid md:grid-cols-[max-content_1fr] max-w-6xl m-auto gap-8 mb-4 max-w-300"
    >
      <img
        :src="`${TMDB_IMG_URL}/w400${item.poster_path}`"
        :alt="item.title || item.name"
        class="hidden md:inline w-[18rem] object-cover aspect-[10/16]"
      />

      <MediaDetail :item="item" :type="type" />
    </div>

    <div class="mb-4 text-3xl">Cast</div>
    <!-- </ContainerScroll> -->

    <div class="flex w-max gap-2">
      <PersonCard
        v-for="i of item.credits?.cast"
        :key="i.id"
        :item="i"
        class="flex-1 w-1/2"
      />
    </div>
    <!-- </ContainerScroll> -->
  </div>
</template>
