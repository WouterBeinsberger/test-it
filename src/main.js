import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import apiFactory from './api'


const app = createApp(App);

app.config.globalProperties.api = apiFactory;

app.use(router);
app.use(store);

app.mount('#app');
