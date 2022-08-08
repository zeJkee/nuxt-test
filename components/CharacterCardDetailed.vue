<template>
  <div class="character">
    <div v-if="character" class="card">
      <NuxtLink :to="'/characters/' + character.char_id" class="card_link">
        <div class="card_img">
          <img
              :src="character.img"
              :alt="character.name">
        </div>
        <div class="card_name">{{character.name}}</div>
      </NuxtLink>
      <div class="card_body">
        <div class="character_content">
          <div class="content_nickname">
            <h3>{{character.nickname}}</h3>
          </div>
          <p><strong>Portrayed:</strong> <span>{{character.portrayed}}</span></p>
          <p><strong>Birthday:</strong> <span>{{character.birthday}}</span></p>
          <p><strong>Status:</strong> <span>{{character.status}}</span></p>
          <p><strong>Occupation:</strong> <span> {{(character.occupation).join(', ')}} </span></p>
        </div>
      </div>
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
    display: flex;

    h3 {
      font-size: 2rem;
      margin: 0.5rem 0;
    }

    .card_link {
      position: relative;
      color: #fff;
      max-width: 300px;
      min-width: 300px;
    }

    .card_img {
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

    .card_body {
      width: 100%;
      padding: 1rem 1.5rem;
      background-color: var(--primary-background-035);
    }

    &:hover img {
      transform: scale(1.025);
    }
  }


  @media (max-width: 1280px) {
    .card {

    }
  }
  @media (max-width: 992px) {
    .card {


    }
  }
  @media (max-width: 768px) {
    .card {

      .card_link {
        max-width: 50%;
      }
    }
  }
  @media (max-width: 576px) {
    .card {

      .card_link {
        min-width: 200px;
      }
      .card_name {
        font-size: 1.25rem;
      }

    }
  }
  @media (max-width: 500px) {
    .card {
      flex-wrap: wrap;

      .card_link {
        width: 100%;
        max-width: 100%;
      }

    }
  }
</style>