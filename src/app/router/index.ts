import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/app/components/home-page/HomePage.component.vue';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/about-page/AboutPage.component.vue')
        }
    ]
});

export default router;
