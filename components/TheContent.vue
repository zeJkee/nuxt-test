<template>
  <section id="content" class="content">
    <slot />
    <NuxtPage />
  </section>
</template>

<style scoped>
  #content {
    padding-bottom: 3rem;
  }

  @media (max-width: 1280px) {
    #content {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

</style>
