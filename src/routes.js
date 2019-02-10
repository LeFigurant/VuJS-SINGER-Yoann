import Vue from 'vue'
import Router from 'vue-router'
import maroute from '@/components/HelloWorld'

Vue.use(Router)
//text de route non concluante :(
export default new Router({
  routes: [
    {
      path: '/',
      name: 'maroute',
      component: maroute
    }
  ]
})
