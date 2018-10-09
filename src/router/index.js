import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/Search'
import MyList from '../components/MyList'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'search',
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
