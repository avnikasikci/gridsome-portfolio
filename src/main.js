
// Import main css
 import './assets/styles/index.scss'

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from 'bootstrap-vue'

import DefaultLayout from '~/layouts/Default.vue'
import checkIfMobile from './utilty/mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)

}
