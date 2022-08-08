<template>
  <div class="wrapper">
    <h1>PAGE NOT FOUND</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus facere maxime optio repudiandae saepe!</p>
    <NuxtLink to="/"><button class="btn">Go HOME</button></NuxtLink>
  </div>

</template>

<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk): string => {
    return titleChunk ? `${titleChunk} - 404 PAGE NOT FOUND ` : 'Breaking Bad';
  }
})

</script>

<style scoped lang="scss">
  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
      max-width: 500px;
    }

    button {
      margin: 2rem;
    }
  }
</style>