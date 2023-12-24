<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="block">
    <div class="block__title">
      {{ title }}
    </div>
    <div class="block__content">
      <slot/>
    </div>
  </div>
</template>