<template>
  <section class="section">
    <div class="columns">
      <div class="column is-3-desktop is-offset-1-desktop is-4-tablet">
        <div class="sidebar">
          <div class="has-text-centered-mobile">
            <img class="image profile-picture" :src="person.image"/>
            <div class="subtitle">
              <p>{{ person.college }} {{ person.graduation_year }}</p>
              <p><a :href="person.email">{{ person.email }}</a></p>
            </div>
          </div>
          <div>
            <h3 class="has-text-weight-semibold">Projects</h3>
            <div class="projects">
              <p v-for="(project, i) in person.projects" :key="i">{{ project.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-7-desktop is-8-tablet">
        <h3 class="title">{{ person.first_name }} {{ person.last_name }}</h3>
        <p class="subtitle">{{person.affiliation}}</p>
        <div class="content" v-html="person.biography"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { buttered } from '@/axios'

export default {
  name: 'PersonPage',
  data () {
    return {
      person: {
        first_name: '',
        last_name: '',
        slug: '',
        image: '',
        biography: '',
        affiliation: '',
        college: '',
        graduation_year: null,
        email: '',
        projects: []
      },
      loaded: false
    }
  },
  methods: {
    getPerson (slug) {
      buttered.getFilteredCollection('people', 'slug', slug)
        .then(res => {
          this.person = res.data.data.people[0]
        })
    }
  },
  created () {
    this.getPerson(this.$route.params.slug)
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'
.fa
  font-size: 1.5em
.profile
  margin-bottom: 1.5em
.profile-picture
  display: inline
.sidebar
  padding-right: 5px

+tablet-only
  .column.is-3-desktop
    margin-left: 0

</style>
