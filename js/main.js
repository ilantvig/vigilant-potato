// main.js

// import { createApp } from '/js/vue.esm-browser.prod.js'
import { createApp } from 'vue'
import vMainWrapper from "./components/v-main-wrapper.js"


createApp({
  components: {
    vMainWrapper,
  },
  data() {
    return {
      showModal: false,
      selected: 'Name',
      text: 'Hazard',
      checked: true,
      confirmed: [false, '', ''],
      title: "main title"
    }
  },
  template: /*template*/ `
    <div id="app">
      <v-main-wrapper />
    </div>
  `
}).mount('#app')



