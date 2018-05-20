import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/auth/Login'
import Main from '@/pages/admin/Main'
import Index from '@/pages/Index'
import Medium from '@/pages/admin/Medium'
import Team from '@/components/Team.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/team',
          component: Team
        }
      ]
    },
    {
      path: '/admin',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/editor',
      component: Medium
    },
  ],
  mode: 'history'
})
