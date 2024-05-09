import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: 
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.name === 'PageThree' && (parseInt(to.params.id as string) < 1 && parseInt(to.params.id as string) > 10)) {
    setTimeout(() => {
      router.push({ name: 'PageFour' })
    }, 3000);
  }
})

export default router