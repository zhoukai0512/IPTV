import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Myhome',
    component: () => import('@/my/My_home.vue'),
    children: [
      {
        path: '', // 默认子路由,就是父亲的路由
        name: 'my',
        component: () => import('@/my/my.vue')
      },
      {
        path: '/members',
        name: 'members',
        component: () => import('@/my/members.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/my/video.vue')
      },
      {
        path: '/television',
        name: 'television',
        component: () => import('@/my/television.vue'),
        children: [
          {
            path: '/television',
            name: 'recommendation',
            component: () => import('@/my/recommendation/recommendation.vue')
          },
          {
            path: '/television',
            redirect: '/television/recommendation'
          },
          {
            path: '/television/selects',
            name: 'selects',
            component: () => import('@/my/recommendation/select.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/my/Personal/Personal.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
