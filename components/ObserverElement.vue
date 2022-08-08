<template>
  <div ref="observerElement" class="observer"></div>
</template>


<script setup lang="ts">

import { onMounted } from "vue";

const observerElement = ref(null)
const emit = defineEmits<{
  (e: 'intersected', fl: boolean): void
}>()

onMounted(() => {

  const options = {
    rootMargin: '0px',
    threshold: 1.0
  }

  const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
      emit("intersected", true);
    }
  }

  const observer = new IntersectionObserver(observerCallback, options)
  observer.observe(observerElement.value)

})

</script>


<style scoped>
  .observer {
    min-height: 20px;
  }
</style>