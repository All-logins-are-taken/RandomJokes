import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueAwesomePaginate from "vue-awesome-paginate";

createApp(App)
    .use(VueAwesomePaginate)
    .mount('#app')
