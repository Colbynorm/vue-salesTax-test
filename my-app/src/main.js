import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'
import vuetify from '@/plugins/vuetify'

new Vue({
    vuetify,
}).$mount('#app')

createApp(App).mount('#app')
