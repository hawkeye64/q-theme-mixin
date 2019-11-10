import { version } from '../package.json'
import QThemeMixin from './components/QThemeMixin'

QThemeMixin.version = version

export {
  QThemeMixin
}

export default {
  QThemeMixin,
  version,

  install (Vue) {
    Vue.component(QThemeMixin.name, QThemeMixin)
  }
}
