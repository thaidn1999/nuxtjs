<template>
  <div class="text-2xl text-red-500">
    <span>Day la trang chu</span>
    {{ results }}
  </div>
</template>

<script setup lang="ts">
import type { MediaType, QueryItem } from "~/interfaces";

const type: MediaType = "movie";
const category = "popular";

const QUERY_ITEMS: QueryItem[] = [
  { type: "movie", title: "Popular Moives", category: "popular" },
  { type: "tv", title: "Popular TV Shows", category: "popular" },
];

const { results } = await $fetch("/api/list", {
  params: {
    type,
    category,
  },
});

const bannerItem = await $fetch("/api/detail", {
  params: {
    type,
    id: results[0].id,
  },
});
</script>

<style lang="scss" scoped></style>
