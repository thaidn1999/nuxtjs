<script setup lang="ts"></script>

<template>
  <div class="spinner-loading"></div>
  <div class="text-center my-8">Loading ...</div>
</template>

<style scoped>
.spinner-loading {
  margin: 30px auto 0;
  z-index: 2000;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  box-shadow: 20px 0px 0 0 rgba(219, 219, 219, 0.2),
    16.2px 11.8px 0 0 rgba(219, 219, 219, 0.4),
    6.2px 19px 0 0 rgba(219, 219, 219, 0.6),
    -6.2px 19px 0 0 rgba(219, 219, 219, 0.8), -16.2px 11.8px 0 0 #ececec;
  animation: spinner-b87k6z 1s infinite linear;

  @media screen and (max-width: 768px) {
    width: 4.8px;
    height: 4.8px;
    border-radius: 4.8px;
    box-shadow: 12px 0px 0 0 rgba(219, 219, 219, 0.2),
      9.7px 7.1px 0 0 rgba(219, 219, 219, 0.4),
      3.7199999999999998px 11.4px 0 0 rgba(219, 219, 219, 0.6),
      -3.7199999999999998px 11.4px 0 0 rgba(219, 219, 219, 0.8),
      -9.7px 7.1px 0 0 #ececec;
  }
}
@keyframes spinner-b87k6z {
  to {
    transform: rotate(360deg);
  }
}
</style>
