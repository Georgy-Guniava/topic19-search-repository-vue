<template>
  <div class="my-list">
    <div class="title">
      <span>My List</span>
    </div>
    <div v-if="displayTypeFlag" class="mapping-type">
      <img class="pointer" src="../assets/tile.svg" alt="tile" v-on:click="changeDisplayType"/>
      <img src="../assets/line-dark.svg" alt="lineDark"/>
    </div>
    <div v-else class="mapping-type">
      <img src="../assets/tile-dark.svg" alt="tileDark"/>
      <img class="pointer" src="../assets/line.svg" alt="line" v-on:click="changeDisplayType"/>
    </div>
    <div v-if="!myRepositories.length" class="without-repository">
      <h4>YOU HAVE NO REPOSITORIES</h4>
      <p>you need to add a repository in the search</p>
    </div>
    <LineView
      v-if="displayTypeFlag"
      :repositories="myRepositories"
      :clickOnCheckbox="removeRepository"
    ></LineView>
    <TileView
      v-else
      :repositories="myRepositories"
      :clickOnCheckbox="removeRepository"
    ></TileView>
  </div>
</template>

<script>
  import LineView from './LineView';
  import TileView from './TileView';

  export default {
    name: "MyList",
    props: ['myRepositories', 'displayTypeFlag', 'changeDisplayType', 'addRepository', 'removeRepository'],
    components: {LineView, TileView},
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  .my-list {
    max-width: 956px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 122px;
  }

  .title {
    font-size: 36px;
    font-family: Roboto;
    color: black;
    padding-top: 35px;
  }

  .mapping-type {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 27px;
  }

  .mapping-type :nth-child(1) {
    margin-right: 12px;
  }

  .without-repository {
    height: 390px;
    width: 100%;
    background: url("../assets/background.svg") center center no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .without-repository h4 {
    font-family: Roboto;
    font-size: 37px;
    color: #0366D6;
    margin: 0;
  }

  .without-repository p {
    font-family: Roboto;
    font-size: 24px;
    color: black;
    margin: 0;
  }
</style>
