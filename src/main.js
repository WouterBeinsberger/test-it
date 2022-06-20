import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import apiFactory from './api'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseBugsCard from '@/components/ui/BaseBugsCard.vue'

const app = createApp(App);

app.config.globalProperties.api = apiFactory;

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-bugs-card', BaseBugsCard);

app.mount('#app');
