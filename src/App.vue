<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view
        :myRepositories="myRepositories"
        :displayTypeFlag="displayTypeFlag"
        :changeDisplayType="changeDisplayType"
        :addRepository="addRepository"
        :removeRepository="removeRepository"
      />
    </div>
    <div class='footer'>copyright @lodossteam 2018</div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'App',
    components: {Header},
    data() {
      return {
        myRepositories: [],
        displayTypeFlag: true,
      }
    },
    methods: {
      changeDisplayType() {
        this.displayTypeFlag = !this.displayTypeFlag;
      },

      addRepository(repo) {
        this.myRepositories.push(repo);
      },

      removeRepository(id) {
        const index = this.myRepositories.findIndex(item => item.id === parseInt(id, 10));
        this.myRepositories.splice(index, 1);
      }
    }
  }
</script>

<style>
  .footer {
    position: absolute;
    bottom: 0;
    height: 40px;
    background: #3c4146;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 99%;
  }

  .main {
    height: calc(100vh - 100px);
    overflow: auto;
  }
</style>
