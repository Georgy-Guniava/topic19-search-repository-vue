import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/Search'
import MyList from '../components/MyList'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/topic19-search-repository-vue/',
      redirect: 'search',
    },
    {
      path: '/topic19-search-repository-vue/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/topic19-search-repository-vue/my-list',
      name: 'MyList',
      component: MyList
    }
  ]
})
