<template>
  <div class="flex flex-col mx-auto justify-center items-center h-screen">
    <img src="/error.gif" alt="" />
    <div class="text-3xl font-bold my-6">This page is gone.</div>
    <div class="text-xl mb-6">
      ...maybe the page you're looking for is not found or never existed.
    </div>
    <div
      class="w-fit px-3 py-3 border rounded-2xl bg-green-600 text-white cursor-pointer text-3xl font-bold"
      @click="handleBackHome"
    >
      <Icon name="pepicons-pop:arrow-left" size="48" />
      <span class="leading-[48px]">Go to home</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const handleBackHome = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
