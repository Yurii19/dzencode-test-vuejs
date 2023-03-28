import { createApp } from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
// import VueDayjs from 'vue-dayjs-plugin'


const app = createApp(App);

app.use( dayjs )
//app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
