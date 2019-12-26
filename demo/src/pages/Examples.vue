<template>
  <hero>
    <div class="q-markdown">
      <q-markdown>
In the examples below, QThemeMixin is dependent on the [QColorizeMixin](https://github.com/hawkeye64/q-colorize-mixin) to apply the actual colors.
      </q-markdown>
      <example-title title="Theme Basic" />
      <example-viewer title="Simple Theme" file="ThemeSimple" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Theme Advanced" />
      <example-viewer title="Theme Selection" file="ThemeSelection" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Theme Quasar Components" file="ThemeQuasarComponents" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import { slugify } from '../utils/page-utils'
import { version } from 'q-theme-mixin'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle
  },

  data () {
    return {
      tempToc: [],
      locationUrl: 'https://github.com/hawkeye64/q-theme-mixin/tree/dev/demo/src/examples/',
      jsPaths: [
        `https://cdn.jsdelivr.net/npm/hawkeye64/q-theme-mixin@${version}/dist/index.umd.min.js`,
        'https://cdn.jsdelivr.net/npm/hawkeye64/q-colorize-mixin@latest/dist/index.umd.min.js'
      ],
      cssPaths: [
        `https://cdn.jsdelivr.net/npm/hawkeye64/q-theme-mixin@${version}/dist/index.min.css`,
        'https://cdn.jsdelivr.net/npm/hawkeye64/q-colorize-mixin@latest/dist/index.min.css'
      ]
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Theme Basic')
    this.addToToc('Simple Theme', 2)
    this.addToToc('Theme Advanced')
    this.addToToc('Theme Selection', 2)
    this.addToToc('Theme Quasar Components', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    addToToc (name, level = 1) {
      let n = name
      if (level > 1) {
        n = 'example-' + n
      }
      const slug = slugify(n)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>
