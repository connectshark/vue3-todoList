const { createRouter, createWebHistory } = require("vue-router");

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router