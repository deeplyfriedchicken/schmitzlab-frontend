import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import ResearchPage from '@/pages/ResearchPage.vue'
import PublicationsPage from '@/pages/PublicationsPage.vue'
import TeachingPage from '@/pages/TeachingPage.vue'
import PeoplePage from '@/pages/PeoplePage.vue'
import AnnouncementsPage from '@/pages/AnnouncementsPage.vue'

import Page from '@/pages/Page.vue'

import Blog from '@/pages/Blog.vue'
import BlogList from '@/pages/Blog/BlogList.vue'
import BlogPost from '@/pages/Blog/BlogPost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/people',
      component: PeoplePage
    },
    {
      path: '/projects',
      component: ProjectsPage
    },
    {
      path: '/projects/:slug',
      component: ProjectPage
    },
    {
      path: '/announcements',
      component: AnnouncementsPage
    },
    {
      path: '/publications',
      component: PublicationsPage
    },
    {
      path: '/research',
      component: ResearchPage
    },
    {
      path: '/teaching',
      component: TeachingPage
    },
    {
      path: '/page/:slug',
      component: Page
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '/',
          component: BlogList
        },
        {
          path: 'post/:slug',
          component: BlogPost
        }
      ]
    }
  ],
  mode: 'history'
})
