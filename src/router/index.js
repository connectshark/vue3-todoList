const { createRouter, createWebHashHistory } = require("vue-router");

const routes = [
  {
    path: '/all',
    name: 'home',
  },
  {
    path: '/active',
    name: 'active',
  },
  {
    path: '/complete',
    name: 'complete',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes
})

export default router