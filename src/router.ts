import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Start from './components/Start.vue';

const routes: RouteRecordRaw[] = [
    { path: '/start', name: 'start', component: Start },
    { path: '', redirect: { name: 'start' } },
];

export const router = createRouter({
    routes,
    history: createWebHistory(`/ccm/${import.meta.env.VITE_KEY}/`),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, left: 0, top: 70 };
        } else if (savedPosition) {
            return savedPosition;
        } else if (to.name !== from.name) {
            return { left: 0, top: 0 };
        }
        return {};
    },
});
