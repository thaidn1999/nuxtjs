<template>
  <div class="text-white">
    <MediaBanner :type="type" :item="bannerItem" />

    <MediaTitle
      :title="QUERY_ITEMS[0].title"
      :more-link="`/${QUERY_ITEMS[0].type}/category/${QUERY_ITEMS[0].category}`"
    />

    <div class="flex items-center overflow-auto py-8 lg:py-4 custom-scrollbar">
      <MediaCard
        :type="type"
        :item="item"
        v-for="item in results"
        :key="item.id"
        class="mx-4"
      />
    </div>
    <Footer />
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
    id: results[3].id,
  },
});
</script>

<style lang="scss" scoped>
.custom-scrollbar {
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 12px;
    height: 12px;
    // min-height: 50px;
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #454545;

    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #454545;
  }
}
</style>
