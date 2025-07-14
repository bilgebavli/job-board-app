
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './locales'
import helpers from './utils/helpers';
import mediaManager from './utils/mediaManager'
import uiComponents from '@/utils/global.components';
import './assets/scss/main.scss';

const app = createApp(App)

app.config.globalProperties.$helpers = helpers;
app.config.globalProperties.$mediaManager = mediaManager

app
.use(createPinia())
.use(router)
.use(i18n)
.use(uiComponents)
 
app.mount('#app')