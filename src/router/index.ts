import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';
import { i18n } from '@/locales'  


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

//Set Page Title
router.afterEach((to) => {
  setTimeout(() => {
    const { pageTitle } = to.meta;
    document.title = `${i18n.global.t(pageTitle)} | ${import.meta.env.VITE_APP_TITLE}`;
  }, 250);
});

export default router
