<template>
  <NuxtLayout/>
</template>

<script setup lang="ts">

import { useCharactersStore } from "~/stores/CharactersStore";
import { onMounted } from 'vue';
const store = useCharactersStore()

onMounted(() => {
  store.loadCharacters()
})

</script>

<style lang="scss">
  :root {
    --primary-color: #3e3e3e;
    --primary-background: rgba(207, 174, 76, 1);
    --primary-background-035: rgba(207, 174, 76, 0.35);
    --secondary-background: rgb(53, 103, 59);
    --secondary-background-085: rgba(54, 104, 61, 0.85);
  }
  * {
    font-family: Tahoma;
  }
  body {
    margin: 0;
    padding: 0;
  }
  img {
    width: 100%;
    height: auto;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .d-flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .justify-content-end {
    justify-content: flex-end;
  }
  .justify-content-between {
    justify-content: space-between;
  }
  .justify-content-center {
    justify-content: center;
  }
  .align-items-center {
    align-items: center;
  }
  .mb-3 {
    margin-bottom: 1.5rem;
  }

  h2.title {
    font-size: 2em;
    margin-top: 1.5rem;
    margin-right: 1rem;
  }
  .larger {
    font-size: 1.25em;
  }
  .btn {
    cursor: pointer;
    background: transparent;
    outline: none;
    border: 2px solid var(--secondary-background);
    font-size: 1.5rem;
    padding: 0.5em 1em;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: var(--secondary-background);
      color: #fff;
    }
  }

</style>
