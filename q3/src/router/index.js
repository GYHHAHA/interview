import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';

const routes = [
  { path: '/page1', component: Page1, name: 'page1' },
  { path: '/page2', component: Page2, name: 'page2' },
  { 
    path: '/page3',
    redirect: '/page3/1'
  },
  {
    path: '/page3/:number',
    component: Page3,
    name: 'page3',
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;