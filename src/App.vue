<script setup>
import RandomJokeList from '@/components/RandomJokeList.vue'
import JokeSearch from '@/components/JokeSearch.vue'
import Block from "@/components/Block.vue";
</script>

<template>
  <main class="mx-auto p-4 max-w-2xl">
    <Block title="Random jokes">
      <RandomJokeList :count="3" />
    </Block>
    <Block title="Search jokes">
      <JokeSearch />
    </Block>
  </main>
</template>
