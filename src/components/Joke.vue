<script setup>
import BaseJoke from '@/components/BaseJoke.vue'

defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <BaseJoke>
    <div class="text-lg">"{{ value }}"</div>
  </BaseJoke>
</template>
