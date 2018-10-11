import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/Search'
import MyList from '../components/MyList'
import PUBLIC_PATH from '../constants/publicConstants'

Vue.use(Router);
console.log('PUBLIC_PATH + \'/search\'',PUBLIC_PATH + '/search');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: PUBLIC_PATH,
      redirect: PUBLIC_PATH + 'search',
    },
    {
      path: PUBLIC_PATH + 'search',
      name: 'Search',
      component: Search
    },
    {
      path: PUBLIC_PATH + 'my-list',
      name: 'MyList',
      component: MyList
    }
  ]
})
