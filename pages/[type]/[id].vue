<script setup lang="ts">
import type { MediaType, IComponent } from "~~/interfaces";
import Card from "@/components/media/Card.vue";

const route = useRoute();
const type = computed(() => route.params.type as MediaType);
const id = computed(() => route.params.id);

const getComponent = computed(() => activeTab.value);

const activeTab = ref<IComponent>("overview");

const [item, recommendations] = await Promise.all([
  $fetch("/api/detail", {
    params: {
      type: type.value,
      id: id.value,
    },
  }),
  $fetch("/api/recommendations", {
    params: {
      id: id.value,
      type: type.value,
    },
  }),
]);
</script>

<template>
  <div>
    <MediaBanner :type="type" :item="item" />
    <div class="mt-10 flex justify-center gap-2 md:gap-10">
      <button
        class="uppercase text-2xl opacity-50 pb-2 px-2 transition-all"
        :class="{ 'opacity-100 border-b-2': activeTab === 'overview' }"
        @click="activeTab = 'overview'"
      >
        Overview
      </button>
      <button
        class="uppercase text-2xl opacity-50 pb-2 px-2 transition-all"
        :class="{ 'opacity-100 border-b-2': activeTab === 'videos' }"
        @click="activeTab = 'videos'"
      >
        Videos
      </button>
      <button
        class="uppercase text-2xl opacity-50 pb-2 px-2 transition-all"
        :class="{ 'opacity-100 border-b-2': activeTab === 'photos' }"
        @click="activeTab = 'photos'"
      >
        Photos
      </button>
    </div>

    <div class="px-4 md:px-10 mt-12">
      <component :is="getComponent" :item="item" :type="type" />
    </div>

    <div
      v-if="
        recommendations &&
        recommendations.results &&
        recommendations.results.length > 0
      "
      class="mt-10"
    >
      <div class="px-4 mb-4 md:px-10 text-3xl">Might be interested</div>
      <div
        class="flex items-center overflow-auto py-8 lg:py-4 custom-scrollbar"
      >
        <Card
          v-for="r in recommendations.results"
          :key="r.id"
          :item="r"
          :type="type"
          class="w-60"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>
