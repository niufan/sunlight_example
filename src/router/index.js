import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import carousel from '@/carousel'

Vue.use(VueRouter);
Vue.use(carousel);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/carousel',
      name: 'carousel',
      component: carousel
    }
  ]
})
