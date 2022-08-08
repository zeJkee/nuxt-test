<template>
  <div class="container">
    <TheHeader/>
    <TheContent>
      <slot/>
    </TheContent>
  </div>
</template>

<script setup lang="ts">
useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Amazing facts about Breaking Bad' }
  ],
  bodyAttrs: {
    class: ''
  }
})
</script>
