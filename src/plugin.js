import FAST from './components/formio/fast.vue';
import User from './database/Models/User';

module.exports = {
  install: function (Vue, options) {
    Vue.prototype.$User = User
    Vue.component('fast', FAST)
  }
}