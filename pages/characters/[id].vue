<template>
  <div class="character" v-if="!store.isLoading && store.characters.length">
    <div class="row character_first-row justify-content-between align-items-center">
      <h2 class="character_title title">{{store.getActiveCharacter.name}}</h2>
      <RouterLink to="/">Back</RouterLink>
    </div>
    <div class="row character_second-row">
      <div class="character_image">
        <img
            :src="store.getActiveCharacter.img"
            :alt="store.getActiveCharacter.name"
        >
      </div>
      <div class="character_content">
        <div class="content_nickname">
          <h4>{{store.getActiveCharacter.nickname}}</h4>
        </div>
        <p><strong>Portrayed:</strong> <span>{{store.getActiveCharacter.portrayed}}</span></p>
        <p><strong>Birthday:</strong> <span>{{store.getActiveCharacter.birthday}}</span></p>
        <p><strong>Status:</strong> <span>{{store.getActiveCharacter.status}}</span></p>
        <p><strong>Occupation:</strong> <span> {{(store.getActiveCharacter.occupation).join(', ')}} </span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharactersStore } from "~/stores/CharactersStore";

const route = useRoute()
const store = useCharactersStore()

store.setActiveCharacterId(+route.params.id)

useHead({
  titleTemplate: (titleChunk): string => {
    return titleChunk ? `${titleChunk} - ${store.getActiveCharacter?.name || 'Character page'}` : 'Breaking Bad';
  }
})

</script>

<style scoped lang="scss">
  .character {

    h4 {
      margin-top: 0;
      padding: 0.5rem 1rem;
      margin-bottom: 0;
      width: fit-content;
      background-color: var(--primary-background);
      font-size: 1.5em;
    }

    .character_content {
      padding: 0 2rem 3rem;
      width: 100%;
    }

    .character_image {

      img {
        width: 100%;
        max-width: 600px;
      }
    }
  }

  @media (max-width: 500px) {
    .character_second-row {
      flex-wrap: wrap;

      .character_content {
        padding: 0;
        margin-top: 1rem;
      }
    }
  }
</style>