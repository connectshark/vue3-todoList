
const { createWebHashHistory, createRouter } = require('vue-router')

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/home/:state',
      name: 'home',
      component: () => import('../views/home.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        path: '/home/all'
      }
    }
  ],
  linkActiveClass: 'link-active'
})

export default router