import Home from '../views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => {
      return {
        food: route.query.food
      }
    },
    beforeEnter: (to, from, next) => {
      if (from.name === 'about') {
        alert('from about!')
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/store',
    component: () => import('@/views/Store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/Error_404.vue')
  }
]
