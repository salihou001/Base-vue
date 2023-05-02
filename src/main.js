import { createApp } from 'vue'
import App from './App.vue'
// import Css
import './assets/css/app.css'
// import router
import router from './router'

const app = createApp(App)
        app.mount('#app')
        app.use(router)
