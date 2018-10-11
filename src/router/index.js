import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/Search'
import MyList from '../components/MyList'
import PUBLIC_PATH from '../constants/publicConstants'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: PUBLIC_PATH,
  routes: [
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/my-list',
      name: 'MyList',
      component: MyList
    }
  ]
})
