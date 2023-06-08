<template>
  <div
    class="fixed flex justify-evenly overflow-x-hidden w-16 h-full z-[1] top-0 left-0 py-5 px-5 bg-black border-solid border-[#262626] lg:flex-col lg:border-t-0 lg:border-r"
  >
    <RouterLink to="/" title="Home" v-slot="{ isActive }">
      <Icon
        name="ant-design:home-outlined"
        class="h-6 w-6"
        :class="isActive ? 'text-[#00BCD3]' : 'text-white'"
      />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/movie" title="Movie">
      <Icon
        name="icomoon-free:film"
        class="h-6 w-6"
        :class="isActive ? 'text-[#00BCD3]' : 'text-white'"
      />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/tv" title="TV Shows">
      <Icon
        name="eva:tv-fill"
        class="h-6 w-6"
        :class="isActive ? 'text-[#00BCD3]' : 'text-white'"
      />
    </RouterLink>
    <RouterLink v-slot="{ isActive }" to="/search" title="Search">
      <Icon
        name="heroicons:magnifying-glass-20-solid"
        class="h-6 w-6"
        :class="isActive ? 'text-[#00BCD3]' : 'text-white'"
      />
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
