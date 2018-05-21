<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="section">
          <div class="columns">
            <div cass="column is-3">

            </div>
          </div>
          <div class="columns">
              <div class="column is-3">
                <p class="bd-footer-link-title">
                  <a href="">Home</a>
                </p>
                <p class="bd-footer-link-title">
                  <a href="">Blog</a>
                </p>
                <p class="bd-footer-link">
                  <a href="">
                    Title of Post 1
                  </a>
                </p>
                <p class="bd-footer-link">
                  <a href="">
                    Title of Post 2
                  </a>
                </p>
                <p class="bd-footer-link">
                  <a href="">
                    Title of Post 3
                  </a>
                </p>
                <p class="bd-footer-link bd-is-more">
                  <a href="https://bulma.io/blog">
                    View all posts
                  </a>
                </p>
              </div>
              <div class="column is-3">
                <p class="bd-footer-link-title">Projects</p>
                  <p class="bd-footer-link"><a href="">Labore et dolore magna aliqua</a></p>
                  <p class="bd-footer-link"><a href="">Kanban airis sum eschelor</a></p>
                  <p class="bd-footer-link"><a href="">Modular modern free</a></p>
                  <p class="bd-footer-link"><a href="">The king of clubs</a></p>
                  <p class="bd-footer-link"><a href="">The Discovery Dissipation</a></p>
              </div>
              <div class="column is-6">
                <p class="bd-footer-link-title">Areas of Study</p>
                <p class="bd-footer-link bd-has-subtitle">
                  <a href="https://bulma.io/expo">
                    <strong>
                      Functional Morphology
                    </strong>
                    <em>
                      Description goes here
                    </em>
                  </a>
                </p>
                <p class="bd-footer-link bd-has-subtitle">
                  <a href="https://bulma.io/expo">
                    <strong>
                      Evolutionary Morphology
                    </strong>
                    <em>
                      Next description goes here
                    </em>
                  </a>
                </p>
                <p class="bd-footer-link bd-has-subtitle">
                  <a href="https://bulma.io/expo">
                    <strong>
                      Expo
                    </strong>
                    <em>
                      Official Bulma showcase
                    </em>
                  </a>
                </p>
              </div>
            </div>
        </div>
      </div>
    </footer>
    <div class="copyright has-text-centered">
      <div class="attribution" >
        <img src="https://vuejs.org/images/logo.png">
        <img src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo">
      </div>
      <span class="has-text-grey is-size-7">© Schmitz Lab 2018 | Designed by Kevin Cunanan</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

.copyright
  background-color: #2B4251
  padding: 1.5rem

.section
  background-color: #fafafa

.attribution
  img
    height: 50px

.footer
  background-color: #fafafa
  padding: 0.5rem
  a
    border-bottom: none
    color: #4a4a4a
    &:hover
      color: $link
  .bd-footer-link-title:not(:first-child)
    margin-top: 1.5em
  .bd-footer-link-title
    color: #363636
    font-size: 1.25rem
    font-weight: 600
  .bd-footer-link
    margin-top: .5rem
  .bd-is-more
    font-size: .875rem
    a
      color: #b5b5b5
      &:hover
        color: $link
  .bd-footer-link.bd-has-subtitle
    a
      align-items: center
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      margin-top: 1rem
      &:hover
        strong, em
          color: $link
      strong
        color: #363636
        flex-grow: 1
        flex-shrink: 1
        font-weight: unset
      em
        display: block
        font-size: .875rem
        font-style: normal
        color: #b5b5b5
        +mobile
          width: 100%
        +tablet
          margin-left: 0
          text-align: right


// footer li:before
//   content: '\f1b2'
//   font-family: 'FontAwesome'
//   float: left
//   margin-left: -1.5em
//   color: #147efb
</style>


