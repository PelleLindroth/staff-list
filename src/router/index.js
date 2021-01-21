import Vue from 'vue'
import VueRouter from 'vue-router'
import Staff from '../views/Staff.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Staff',
    children: [{
      path: ':id',
      component: Details,
      children: [{
        path: 'edit',
        props: {
          editMode: true
        },
        component: Details
      }],
    }],
    component: Staff,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router