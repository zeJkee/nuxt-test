<template>
  <div class="search d-flex justify-content-end">
    <input type="text" v-model="modelValue" placeholder="Search..." @input="changeSearchString">
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: String
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', fl: string): void
}>()

const changeSearchString = (el): void => {
  emit('update:modelValue', el.target.value)
}

</script>

<style scoped lang="scss">
.search {

  input {
    min-width: 300px;
    font-size: 1.0rem;
    padding: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 576px) {
  .search {
    width: 100%;


    input {
      min-width: unset;
      width: 100%;
    }
  }
}
</style>