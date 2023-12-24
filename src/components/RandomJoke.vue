<script setup>
import { ref } from 'vue'
import Joke from '@/components/Joke.vue'
import LoadingJoke from '@/components/LoadingJoke.vue'
import chuckApi from '@/api.js'

const value = ref('')
const showLoader = ref(true)
const hasError = ref(false)

chuckApi
  .get('random')
  .then((response) => {
    value.value = response.data.value
  })
  .catch((error) => {
    value.value = error
    hasError.value = true
  })
  .finally(() => {
    showLoader.value = false
  })
</script>
<template>
  <LoadingJoke v-if="showLoader" />
  <Joke v-else :value="value" :class="{ joke_error: hasError }" />
</template>
