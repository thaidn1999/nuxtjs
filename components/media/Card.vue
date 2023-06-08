<template>
  <div class="wrap-card">
    <NuxtLink
      :href="`/${item.media_type || type}/${item.id}`"
      class="flex-1 pb-2"
    >
      <div
        class="flex justify-center items-center rounded-2xl bg-zinc-800 aspect-[10/16] transition-all hover:scale-[1.02] w-[234px]"
      >
        <img
          v-if="item.poster_path"
          :src="`${TMDB_IMG_URL}/w400${item.poster_path}`"
          :alt="item.title || item.name"
          class="w-full h-full object-cover"
        />
        <Icon
          v-else
          name="iconoir:file-not-found"
          class="w-12 h-12 text-gray-500"
        />
      </div>
      <div class="mt-2 mb-1 line-clamp-2 h-12">
        {{ item.title || item.name }}
      </div>
      <StarRating :value="item.vote_average" :show-value="true" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Media, MediaType } from "~/interfaces";
const config = useRuntimeConfig();
const TMDB_IMG_URL = config.public.img_url;

defineProps<{
  type: MediaType;
  item: Media;
}>();
</script>

<style lang="scss" scoped>
.wrap-card {
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 16px;
  color: #ececec;
  background: linear-gradient(135deg, #191e23, #0d1317) padding-box,
    linear-gradient(115deg, hsla(0, 0%, 100%, 0.26666666666666666), #151c2e)
      border-box;
  border: 1px solid transparent;
  transition: all 0.1s linear;
  &:hover {
    box-shadow: inset 0.5px 0.5px 0 1px hsla(0, 0%, 100%, 0.6),
      inset 0.5px -0.5px 1px 1px #01ccf3, inset -0.5px 0.5px 1px 1px #db63dd,
      inset 0.5px 0.5px 1px 1px #6c6df8, inset -0.5px -0.5px 1px 1px #7b60f7,
      inset 5px -5px 5px 2px #022797,
      inset -3px 3px 5px 2px rgba(219, 99, 221, 0.7),
      inset 5px 5px 10px -2px #022797, inset -5px 5px 10px 2px #022797 !important;
  }
}
</style>
