import { createApp } from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'


const app = createApp(App);

app.use( dayjs )

app.mount('#app')
