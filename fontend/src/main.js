import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route'

// const app = createApp(App)
// app.use(router)
// app.mount('#app') 
const app = createApp(App).use(router).mount('#app');

