<template>
  <div class="repositories-list">
    <div class="tiles">
      <div class="tile-item" v-for="(item, index) in repositories">
        <div class=" item-info">
          <a :href="item.url" target=" _blank"><span class=" name">{{item.full_name}}</span></a>
          <span class=" description">{{item.description}}</span>
          <div class=" topics">
            <span class="topic" v-for="(teg, i) in item.topics">{{teg}}</span>
          </div>
        </div>
        <div class=" language-name">{{item.language}}</div>
        <div class=" rating">
          <img src="../assets/star.svg" alt="star"/>
          <span>{{item.stargazers_count}}k</span>
        </div>
        <button v-if="item.checked"
                :value="item.id"
                v-on:click="clickOnCheckbox($event.currentTarget.value)"
                class="remove-repo pointer">REMOVE FROM LIST
        </button>
        <button v-else
                :value="item.id"
                v-on:click="clickOnCheckbox($event.currentTarget.value)"
                class="add-repo pointer">ADD TO LIST
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TileView",
    props: ['repositories', 'clickOnCheckbox']
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .pointer {
    cursor: pointer;
  }

  .item-info .name {
    font-family: Roboto;
    font-size: 22px;
    color: #0366D6;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .item-info .description {
    font-family: Roboto;
    font-size: 14px;
    color: black;
    margin-bottom: 27px;
  }

  .topic {
    padding: 6px 14px;
    border-radius: 12px;
    background-color: #F1F8FE;
    color: black;
    font-size: 12px;
    font-family: Roboto;
    margin-right: 10px;
    margin-top: 10px;
  }

  .rating span {
    font-family: Roboto;
    font-size: 18px;
    color: #3C4146;
  }

  .pointer {
    cursor: pointer;
  }

  .tiles .topics {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tiles {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    overflow: auto;
  }

  .tiles .tile-item {
    margin-top: 30px;
    box-sizing: border-box;
    flex-basis: 410px;
    min-width: 350px;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.25);
    padding: 35px 40px ;
  }

  .tiles .tile-item:nth-child(2n-1) {
    margin-right: 30px;
  }

  .tiles .tile-item .item-info {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 55px;
    display: flex;
    flex-direction: column;
  }

  .tiles .tile-item .rating {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-end;
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .tiles .language-name {
    position: absolute;
    top: 25px;
    left: 40px;
    color: #999999;
    font-family: Roboto;
    font-size: 14px;
  }

  .add-repo {
    border: none;
    border-radius: 0;
    background-color: #0366D6;
    padding: 10px 23px;
    color: white;
    font-size: 14px;
    font-family: Roboto;
  }

  .remove-repo {
    border: none;
    border-radius: 0;
    background-color: #EB5757;
    padding: 10px 23px;
    color: white;
    font-size: 14px;
    font-family: Roboto;
  }

  .add-repo,
  .remove-repo {
    align-self: right;
    margin: auto auto 0 auto;
    outline: none;
  }

  .add-repo:hover,
  .remove-repo:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  }
</style>
