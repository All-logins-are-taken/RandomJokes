<script setup>
import RandomJoke from '@/components/RandomJoke.vue'

defineProps({
  count: {
    type: Number,
    default: 3
  }
})
</script>

<template>
  <div class="jokes mb-4">
    <RandomJoke v-for="i in Array(count).keys()" :key="i" />
  </div>
</template>
