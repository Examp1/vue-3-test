import { createApp } from 'vue'

import App from './App.vue'
// js
import globalComponents from './components/global'
// style
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(globalComponents)

app.mount('#app')
