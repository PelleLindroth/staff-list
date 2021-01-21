import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      staff: [{
        id: 1,
        name: 'Pelle',
        mobil: '123456789',
        epost: 'Pelle@gmail.com',
        password: 'password'
      }, {
        id: 2,
        name: 'Oscar',
        mobil: '013456789',
        epost: 'Oscar@gmail.com',
        password: '1337'
      }, {
        id: 3,
        name: 'Vhiktor',
        mobil: '987654321',
        epost: 'Vhiktor@gmail.com',
        password: 'supercalifragilisticexpialidocious'
      }]
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
