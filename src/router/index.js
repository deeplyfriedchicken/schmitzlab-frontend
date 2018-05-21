import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import Team from '@/components/Team.vue'
import ProjectPage from '@/pages/ProjectsPage.vue'
import ResearchPage from '@/pages/ResearchPage.vue'
import PublicationsPage from '@/pages/PublicationsPage.vue'

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
    },
    {
      path: '/research',
      component: ResearchPage
    },
    {
      path: '/publications',
      component: PublicationsPage
    }
  ],
  mode: 'history'
})
