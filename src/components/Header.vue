<template>
  <div class="background">
    <div class="header">
      <div class="logo">
        <div class="logo__img">
          <img class="github-logo" src="../assets/path2.svg" alt="path2"/>
          <img class="magnifier-handle" src="../assets/path4534.svg" alt="path4534"/>
        </div>
        <div class="logo__text">
          <h4>GitHub</h4>
          <p>search</p>
        </div>
      </div>
      <div class="nav-bar">
        <div class="nav__search">
          <router-link id="search" active-class="active" to="/topic19-search-repository-vue/search"><span>Search</span></router-link>
        </div>
        <div class=" nav__my-list">
          <router-link id="my-list" active-class="active" to="/topic19-search-repository-vue/my-list"><span>My List</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .background {
    height: 60px;
    width: 100%;
    background-color: #3C4146;
  }

  .header {
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    height: 60px;
    background-color: #3C4146;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    padding-top: 6px;
  }

  .logo__img {
    position: relative;
  }

  .magnifier-handle {
    position: absolute;
    top: 30px;
    left: 27px;
  }

  .github-logo {
    padding-right: 16px;
  }
  .logo__text {
    padding-top: 4px;
  }

  .logo__text h4 {
    margin: 0;
    color: white;
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
  }

  .logo__text p {
    margin-bottom: 0;
    margin-top: -4px;
    color: #B3BCC7;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav-bar span {
    color: #B3BCC7;
    font-size: 16px;
    line-height: 19px;
    font-family: Roboto;
    font-weight: 100;
  }

  .nav__search {
    margin-right: 20px;
  }

  .active span{
    color: white !important;
    font-weight: 400 !important;
  }

  a {
    text-decoration: none;
  }
</style>
