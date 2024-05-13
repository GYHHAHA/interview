import { createRouter,createWebHistory } from 'vue-router'
import service from '../services/index'
const { a } = service;
const routes = [
    {
        path: '/page1',
        name: 'Page1',
        component: () => import('../component/page1.vue'),
    },
    {
        path: '/page2',
        name: 'Page2',
        component: () => import('../component/page2.vue'),
    },
    {
        path: '/page3/:id',
        name: 'Page3',
        component: () => import('../component/page3.vue'),
    },
    {
        path: '/page4',
        name: 'Page4',
        component: () => import('../component/page4.vue'),
    },
    {
        path: '/page5/:id',
        name: 'Page5',
        component: () => import('../component/page5.vue'),
        children: [
            {
                path: 'subpage1',

                name: 'SubPage1',
                component: () => import('../component/subpage.vue'),
            },
            {

                path: 'subpage2',
                name: 'SubPage2',
                component: () => import('../component/subpage.vue'),
            }
        ]
    },
    {
        path: '/page6',
        name: 'Page6',
        component: () => import('../component/page6.vue'),
    },
    {
        path: '/page7',
        name: 'Page7',
        component: () => import('../component/page7.vue'),
    },
    {
        path: '/page8',
        name: 'Page8',
        component: () => import('../component/page8.vue'),
    },
    {
        path: '/page9',
        name: 'Page9',
        component: () => import('../component/page9.vue'),
    },
    {
        path: '/page10',
        name: 'Page10',
        component: () => import('../component/page10.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.path === '/page6') {
        const res = await a()
        to.meta.data = res;
        next();
    } else {
        next()
    }
})

export default router;