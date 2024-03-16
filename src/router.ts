import { createWebHistory, createRouter } from 'vue-router';
import routes from '~pages';

export const router = createRouter({
    routes,
    history: createWebHistory(),
});
