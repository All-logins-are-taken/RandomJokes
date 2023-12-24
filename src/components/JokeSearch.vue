<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'
import chuckApi from '@/api.js'
import Joke from '@/components/Joke.vue'
import Loader from '@/components/Loader.vue'

const query = ref('')
const currentJokes = ref([])
const jokes = ref([]);

const showLoader = ref(false)
const currentPage = ref(1);
const perPage = 3;
const notFound = ref(false);
const errorMessage = ref('');

const clear = () => {
  query.value = ''
  errorMessage.value = ''
  currentJokes.value = []
  notFound.value = false
}

const search = debounce(() => {
  notFound.value = false
  errorMessage.value = ''

  if (query.value === '') {
    currentJokes.value = []
    return
  }

  if (query.value) {
    showLoader.value = true
    currentJokes.value = []

    chuckApi
      .get('search', {
        params: {
          query: query.value
        }
      })
      .then((response) => {
        jokes.value = response.data.result
        if (jokes.value.length === 0) {
          notFound.value = true
        }
        onPaginate(currentPage.value)
      })
      .catch((error) => {
        errorMessage.value = error.response?.data?.message ?? 'Undefined search error'
        console.error(error);
      })
      .finally(() => {
        showLoader.value = false
      })
  }
}, 500)

const onPaginate = (page) => {
  currentJokes.value = jokes.value.slice( (page - 1) * perPage, perPage * page);
}

</script>

<template>
  <div>
    <input
      @keydown.esc="clear"
      @input="search"
      v-model="query"
      placeholder="Search jokes"
      class="input__search"
      autocomplete="off"
    />
    <div v-if="showLoader" class="text-center p-4">
      <Loader />
    </div>
    <div v-if="notFound">
      Jokes not found
    </div>
    <div class="error"  v-if="errorMessage.length">
      Error: {{ errorMessage }}
    </div>
    <div v-if="currentJokes.length" class="jokes mb-4">
      <Joke v-for="(joke, index) in currentJokes.values()" :key="index" :value="joke.value" />
    </div>
    <VueAwesomePaginate
        v-if="currentJokes.length"
        :total-items="jokes.length"
        :items-per-page="perPage"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onPaginate"
        :hide-prev-next="true"
        paginationContainerClass="paginator mb-4"
        paginate-buttons-class="paginator__button"
        active-page-class="paginator__button_active"
    />
  </div>
</template>
