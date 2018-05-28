<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2 is-offset-1">
        <div class="sidebar">
          <div class="">
            <img class="image profile-picture" :src="person.image"/>
            <h3 class="title">{{ person.first_name }} {{ person.last_name }}</h3>
            <div class="subtitle">
              <p>{{person.affiliation}}</p>
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
      <div class="column is-7">
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
.fa
  font-size: 1.5em
.profile
  margin-bottom: 1.5em
.profile-picture
  display: inline
.sidebar
  padding-right: 5px
</style>
