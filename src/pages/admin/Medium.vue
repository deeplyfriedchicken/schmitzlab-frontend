<template>
  <medium-editor :text='text' :options='options' v-on:edit='processEditOperation' custom-tag='div'>
  </medium-editor>
</template>

<script>
import vueMediumEditor from '../../../node_modules/vue2-medium-editor/dist/vueMediumEditor.min.js'
import '../../../node_modules/medium-editor-custom-html/src/custom-html.min.js'

export default {
  name: 'Medium',
  data () {
    return {
      text: '<h1 class="title is-1">Bananas are good for the soul</h1><h2>Hello</h2>',
      show: true,
      tag: 'h1',
      options: {
        toolbar: {
            buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'paragraph', 'customHtml']
        },
        anchor: {
            /* These are the default options for anchor form,
              if nothing is passed this is what it used */
            customClassOption: 'alink',
            customClassOptionText: 'Button',
            linkValidation: true,
            placeholderText: 'Type your link here',
            targetCheckbox: false,
            targetCheckboxText: 'Open in new window'
        },
        extensions: {
          'customHtml': new CustomHtml({
            buttonText: '<h1>',
            htmlToInsert: '<div class="tile is-parent is-shady"><article class="tile is-child notification is-white"><p class="title">Hello World</p><p class="subtitle">What is up?</p></article></div><div class="tile is-parent is-shady"><article class="tile is-child notification is-white"><p class="title">Foo</p><p class="subtitle">Bar</p></article></div>'
          })
        },
      }
    }
  },
  components: {
    'medium-editor': vueMediumEditor
  },
  methods: {
    processEditOperation: function (operation) {
      this.text = operation.api.origElements.innerHTML    }
  }
}
</script>

<style lang="sass">
@import '../../../node_modules/medium-editor/dist/css/medium-editor.min.css'
@import '../../../node_modules/medium-editor/dist/css/themes/flat.min.css'
</style>