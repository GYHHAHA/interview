import { createApp } from 'vue'
import './reset.css'
import router from './router/index.js';
import App from './App.vue'

createApp(App).use(router).mount('#app')
