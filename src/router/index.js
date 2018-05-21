import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import Team from '@/components/Team.vue'
import ProjectPage from '@/pages/ProjectsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/projects',
      component: ProjectPage
    }
  ],
  mode: 'history'
})
