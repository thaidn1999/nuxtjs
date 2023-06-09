<script setup lang="ts">
import type { Media } from "~~/interfaces";
import VideoCard from "@/components/video/VideoCard.vue";

const { item } = defineProps<{
  item: Media;
}>();
</script>

<template>
  <div class="">
    <div class="mb-4">{{ item.videos?.results.length || 0 }} Videos</div>

    <div class="grid grid-cols-6 gap-4">
      <VideoCard
        v-for="video of item.videos?.results"
        :key="video.id"
        :item="video"
      />
    </div>
  </div>
</template>
