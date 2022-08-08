<template>
  <div class="characters" :class="characterLayout">
    <div class="characters_header row flex-wrap justify-content-between align-items-center">
      <h2 class="characters_title title">Starring</h2>
      <SelectElement v-model="characterLayout" :options="layoutOptions" class="characters_select"/>
      <SearchForm v-model="store.searchString"/>
    </div>
    <div v-if="store.getFilteredCharacters.length > 0" class="characters">
      <TransitionGroup name="characters_list" tag="div" class="characters_list">
        <div class="character_layout" v-if="characterLayout === 'tiled'">
          <CharacterCard
              v-for="character of store.getFilteredCharacters"
              :character="character"
              :key="character.portrayed"
              class="characters_item"/>
        </div>
        <div class="character_layout" v-else>
          <CharacterCardDetailed
              v-for="character of store.getFilteredCharacters"
              :character="character"
              :key="character.portrayed"
              class="characters_item"/>
        </div>
      </TransitionGroup>
      <ObserverElement v-if="store.searchString === ''" @intersected="checkObserverIntersection"/>
    </div>
    <div v-else-if="store.showNoCharactersMessage">
      <p>Actors list is empty!</p>
    </div>
    <div v-else-if="store.searchString !== ''">
      <p>Nothing is found. Please try another search query!</p>
    </div>
    <div v-if="store.isLoading">
      <LoaderElement />
    </div>
  </div>

</template>

<script setup lang="ts">
  import { useCharactersStore } from "~/stores/CharactersStore";
  import ObserverElement from "~/components/ObserverElement.vue";
  import CharacterCardDetailed from "~/components/CharacterCardDetailed.vue";

  const layoutOptions = [
    {title: 'Tiled', value: 'tiled'},
    {title: 'Detailed', value: 'detailed'}
  ]

  const store = useCharactersStore()
  const characterLayout = ref(layoutOptions[0].value) // 'tiled'



  const checkObserverIntersection = (intersected: boolean): void => {
    store.loadCharacters()
  }

</script>

<style scoped lang="scss">

.characters_header {
  padding-top: 1rem;
  margin-bottom: 1rem;
}

.characters_select {
  margin: 0.5rem 0.5rem 0.5rem auto;
}

.tiled {

  .character_layout {
    display: flex;
    flex-wrap: wrap;
    width: 102%;


    .characters_item {
      width: 32%;
      margin-right: 1%;
      height: auto;
      min-width: 300px;
      min-height: 300px;
      margin-bottom: 1rem;
    }
  }
}

.detailed {
  .character_layout {

    .characters_item {
      margin-bottom: 1rem;
    }
  }

}


//animation
.characters_list-enter-active,
.characters_list-leave-active {
  transition: all 0.3s ease;
}

.characters_list-enter-from,
.characters_list-leave-to {
  opacity: 0;
  transform: scale(0.5) translate(50px, -50px);
}

//Media queries

@media (max-width: 1280px) {
  .tiled {
    .character_layout {

      .characters_item {
        width: 48%;
        min-width: 48%;
        margin-right: 2%;
      }
    }

  }


}

@media (max-width: 992px) {
  .tiled {
    .characters_item {

      .card_body {

        .card_body-img {
          max-height: 300px;
        }
      }
    }
  }

}

@media (max-width: 768px) {
  .characters_title {
    width: 50%;
  }
  .characters_select {
    margin-right: 0;
  }


}

@media (max-width: 576px) {
  .tiled {

    .character_layout {
      .characters_item {

        width: 100%;
      }
    }

  }
}


</style>