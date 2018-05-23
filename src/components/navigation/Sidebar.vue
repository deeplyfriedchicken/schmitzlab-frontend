<template>
  <!-- sidebar with plugins/details/etc -->
  <div class="column is-4 is-narrow">
    <div class="card-wrapper">
      <div class="card">
        <header class="card-header-fix-center has-text-centered">
          <p class="card-header-title-fix">
            About
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card-wrapper">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </div>

    <div class="card-wrapper">
      <div class="card">
        <header class="card-header-fix-center has-text-centered">
          <p class="card-header-title-fix">
            Something
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          </div>
        </div>
      </div>
    </div>
    <!-- end of plugins/etc/ column -->
  </div>

</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="sass" scoped>
.card-wrapper
  padding-bottom: 20px

/* centering card-header-title text(1):
 * ensures bottom shadow remains

.card-header-fix-center
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1)

/* centering card-header-title text(2):
 * ensures the header text remains of similar quality

.card-header-title-fix
  flex-grow: 1
  font-weight: 700
  padding: 0.75rem

/* giving corners to the box styling

</style>

/* centering card-header-title text(1):
 * ensures bottom shadow remains

.card-header-fix-center
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1)

/* centering card-header-title text(2):
 * ensures the header text remains of similar quality

.card-header-title-fix
  flex-grow: 1
  font-weight: 700
  padding: 0.75rem

/* giving corners to the box styling



