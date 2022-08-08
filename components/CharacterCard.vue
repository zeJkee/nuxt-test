<template>
  <div class="character">
    <div v-if="character" class="card">
      <NuxtLink :to="'/characters/' + character.char_id" class="card_link">
        <div class="card_body">
          <div class="card_body-img">
            <img
                :src="character.img"
                :alt="character.name">
          </div>
        </div>
        <div class="card_name">{{character.name}}</div>
      </NuxtLink>
    </div>
    <div v-else>
      <h4>Actor card doesn't exist!</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    character: {
      type: Object as any
    }
  })
</script>


<style scoped lang="scss">
  .card {
    height: 100%;

    .card_link {
      display: flex;
      height: 100%;
      position: relative;
      color: #fff;
    }

    .card_body {
      width: 100%;

      .card_body-img {
        display: flex;
        overflow: hidden;
        height: 100%;
        max-height: 400px;

        img {
          transition: transform 0.3s ease-in-out;
          object-fit: cover;
          object-position: top;
        }
      }
    }

    .card_name {
      position: absolute;
      bottom: 0;
      z-index: 10;

      margin-top: 0;
      padding: 0.5rem 1rem;
      margin-bottom: 0;
      width: fit-content;
      background-color: var(--secondary-background-085);
      font-size: 1.5em;

    }

    &:hover img {
      transform: scale(1.025);
    }
  }

  @media (max-width: 992px) {
    .card {

      .card_body {

        .card_body-img {
          max-height: 300px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .card {

      .card_body {

        .card_body-img {
          max-height: unset;
        }
      }

      .card_name {
        font-size: 1.25rem;
      }
    }
  }
</style>