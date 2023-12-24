<script setup>
defineProps({
  text: {
    type: String,
    default: 'Loading...'
  }
})
</script>
<template>
  <div class="loader" role="status"></div>
</template>
