import FAST from './components/formio/fast.vue'
import User from './database/Models/User'
// Install the components
export function install(Vue) {
  Vue.prototype.$User = User
  Vue.component('fast', FAST)
  /* -- Add more components here -- */
}

// Expose the components
export {
  FAST,
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}