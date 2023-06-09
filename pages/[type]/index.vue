<script setup lang="ts">
import type { MediaType } from "~/interfaces";
import { QUERY_LIST } from "~/constants/list";

definePageMeta({
  key: (route) => route.fullPath,
  validate: ({ params }) => {
    return ["movie", "tv"].includes(params.type as MediaType);
  },
});

const route = useRoute();
const type = computed(() => (route.params.type as MediaType) || "movie");
const queryParams = QUERY_LIST[type.value];

useHead({
  title: type.value === "movie" ? "Movies" : "TV Shows",
});

const { results } = await $fetch("/api/list", {
  params: {
    type: type.value,
    category: queryParams[0].category,
  },
});
console.log("🚀 ~ file: index.vue:31 ~ results:", results);

const bannerItem = await $fetch("/api/detail", {
  params: {
    type: type.value,
    id: results[0].id,
  },
});
</script>

<template>
  <div>
    <MediaBanner :type="type" :item="bannerItem" />
    <!-- <template v-for="param of queryParams" :key="index">
      <MediaTitle
        :title="param.title"
        :more-link="`/${param.type}/category/${param.category}`"
      />
      <div
        class="flex items-center overflow-auto py-8 lg:py-4 custom-scrollbar"
      >
        <MediaCard
          v-for="item in results"
          :type="type"
          :item="item"
          :key="item.id"
          class="mx-4"
        />
      </div>
    </template> -->
    <Footer />
  </div>
</template>
