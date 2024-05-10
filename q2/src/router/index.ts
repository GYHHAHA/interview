import { createRouter, createWebHistory } from 'vue-router'
import { a } from '../api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/PageOneView.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/PageTwoView.vue')
    },
    {
      path: '/page3/:id',
      name: 'page3',
      component: () => import('../views/PageThreeView.vue')
    },
    {
      path: '/page4',
      name: 'page4',
      component: () => import('../views/PageFourView.vue')
    },
    {
      path: '/page5/:id',
      name: 'page5',
      component: () => import('../views/PageFiveView.vue'),
      children: [
        {
          path: 'subpage1',
          name: 'subpage1',
          component: () => import('../views/SubPage1.vue')
        },
        {
          path: 'subpage2',
          name: 'subpage2',
          component: () => import('../views/SubPage2.vue')
        }
      ]
    },
    {
      path: '/page6',
      name: 'page6',
      component: () => import('../views/PageSixView.vue'),
      meta: {
        aNum: 0
      }
    },
    {
      path: '/page7',
      name: 'page7',
      component: () => import ('../views/PageSevenView.vue')
    },
    {
      path: '/page8',
      name: 'page8',
      component: () => import('../views/PageEightView.vue')
    },
    {
      path: '/page9',
      name: 'page9',
      component: () => import('../views/PageNineView.vue')
    },
    {
      path: '/page10',
      name: 'page10',
      component: () => import('../views/PageTenView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  if (to.path.startsWith('/page3')
    && sessionStorage.getItem('navigated') !== 'true'
    && (parseInt(to.params.id as string) < 1 || parseInt(to.params.id as string) > 10)) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 3000);
    })
    router.push({ name: 'page4' })
  }
  if (to.path.startsWith('/page6')) {
    to.meta.aNum = await a()
  }
})

export default router