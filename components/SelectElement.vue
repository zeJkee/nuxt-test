<template>
  <div class="select">
    <strong>View: </strong>
    <select v-model="modelValue" @change="updateOptions">
      <option v-for="option in options" :value="option.value">{{option.title}}</option>
    </select>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits<{
(e: 'update:modelValue', fl: string): void
}>()

const updateOptions = (el): void => {
  emit('update:modelValue', el.target.value)
}

</script>

<style scoped lang="scss">
  .select {

    select {
      padding: 1rem;
      font-size: 1rem;
    }
  }
</style>