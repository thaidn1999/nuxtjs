<script setup lang="ts">
import type { Media, MediaType } from "~~/interfaces";

const route = useRoute();
const category = computed(() => route.params.category as string);
const type = computed(() => (route.params.type as MediaType) || "movie");

const items = ref<Media[]>([]);
const isLoading = ref<boolean>(false);
let page = ref<number>(1);
let totalCount = ref<number>(0);

const fetch = async () => {
  if (isLoading.value || items.value.length > totalCount.value) return;
  isLoading.value = true;
  const { results, total_results } = await $fetch("/api/list", {
    params: {
      page,
      type: type.value,
      category: category.value,
    },
  });
  items.value.push(...results);
  totalCount.value = total_results;
  isLoading.value = false;
  page.value += 1;
};

onMounted(async () => await fetch());
</script>

<template>
  <div class="h-full">
    <div class="px-4 md:px-10 py-3">
      <span class="capitalize text-4xl">
        {{ category.replace(/_/g, " ") }}
      </span>
      <span class="text-4xl">{{ type === "tv" ? " TV" : " Movies" }}</span>
    </div>
    <div
      v-if="items.length > 0"
      class="grid grid-cols-6 gap-4 p-8 h-5/6 overflow-auto custom-scrollbar"
      v-infinite-scroll="fetch"
    >
      <MediaCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :type="type"
      />
    </div>

    <SpinLoading
      v-if="isLoading"
      class="absolute bottom-10 inset-x-1/2 w-12 h-12"
    />
  </div>
</template>

<style scoped lang="scss">
:deep(.custom-scrollbar) {
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
}
</style>
