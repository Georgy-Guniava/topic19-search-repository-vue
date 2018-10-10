<template>
  <div class="search">
    <div class="filter">
      <div class="type">
        <select>
          <option>Repositories</option>
        </select>
      </div>
      <div class="language">
        <select id="languageSelect" v-on:change="language = $event.target.value">
          <option>JavaScript</option>
          <option value="css">css</option>
          <option>html</option>
          <option>php</option>
          <option>ruby</option>
          <option>c++</option>
          <option>python</option>
          <option>c#</option>
          <option>java</option>
          <option>go</option>
          <option>haskel</option>
        </select>
      </div>
      <div class="search-input">
        <label :class="{'label1': !searchText}" for="search-input">Type here for search</label>
        <input :class="{ 'red-border': errorFlag }"
               id="search-input"
               type="text"
               v-on:input="searchText = $event.target.value"
               :value="searchText"
               v-on:focus="errorFlag = false">
        <div v-if="errorFlag" class="error search-error">
          <span>Please fill out the form completely!</span>
        </div>
      </div>
      <button class="search-btn pointer" type="submit" v-on:click="searchRepositories">SEARCH</button>
    </div>
    <div v-if="displayTypeFlag" class="mapping-type">
      <img class="pointer" src="../assets/tile.svg" alt="tile" v-on:click="changeDisplayType"/>
      <img src="../assets/line-dark.svg" alt="lineDark"/>
    </div>
    <div v-else class="mapping-type">
      <img src="../assets/tile-dark.svg" alt="tileDark"/>
      <img class="pointer" src="../assets/line.svg" alt="line" v-on:click="changeDisplayType"/>
    </div>
    <div v-if="notFoundFlag" class="without-repository">
      <h4>NO RESULTS FOUND</h4>
      <p>select other parameters and try again</p>
    </div>
    <LineView
      v-if="displayTypeFlag"
      :repositories="repositories"
      :clickOnCheckbox="clickOnCheckbox"
    ></LineView>
    <TileView
      v-else
      :repositories="repositories"
      :clickOnCheckbox="clickOnCheckbox"
    ></TileView>
  </div>
</template>

<script>
  import axios from 'axios';
  import LineView from './LineView';
  import TileView from './TileView';


  export default {
    name: "Search",
    props: ['myRepositories', 'displayTypeFlag', 'changeDisplayType', 'addRepository', 'removeRepository'],
    components: {LineView, TileView},
    data() {
      return {
        notFoundFlag: true,
        errorFlag: false,
        repositories: [],
        type: 'Repositories',
        searchText: '',
        language: 'JavaScript'

      }
    },
    methods: {
      parseToRepo(items) {
        return items.map(item => {
          return {
            id: item.id,
            full_name: item.full_name,
            description: item.description,
            stargazers_count: Math.floor(item.stargazers_count / 1000),
            language: item.language,
            topics: item.topics,
            url: item.html_url,
            checked: !!this.myRepositories.find((element) => element.id === item.id)
          };
        });
      },

      createReqUrl()  {
        return `https://api.github.com/search/${this.type.toLowerCase()}?q=${this.searchText}`
          + `language:${this.language.toLowerCase()}&sort=stars&order=desc`;
      },

      clickOnCheckbox(id) {
        this.repositories = this.repositories.map((item) => {
          if (item.id === parseInt(id, 10)) {
            item.checked = !item.checked;
            if (item.checked) {
              this.addRepository(item);
            } else {
              this.removeRepository(item.id);
            }
          }
          return item;
        });
      },

      searchRepositories() {
        if (!this.searchText.length) {
          this.errorFlag = true;
          return false;
        }
        const url = this.createReqUrl();
        const options = {
          method: 'get',
          headers: {'Accept': 'application/vnd.github.mercy-preview+json'},
          url,
        };

        axios(options)
          .then((res) => {
              this.repositories = this.parseToRepo(res.data.items);
              this.notFoundFlag = !res.data.items.length;
          })
          .catch((error) => {
            console.log('err', error);
          });
      }
    }
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

  .search {
    max-width: 956px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 122px;
  }

  .filter {
    display: flex;
    flex-direction: row;
    padding-top: 25px;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .filter select {
    margin-top: 7px;
    padding: 7px 0;
    font-family: Roboto;
    font-size: 14px;
    border: none;
    width: 205px;
    outline: none;
    color: black;
    font-weight: 300;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(../assets/Polygon.svg) no-repeat right;
  }

  .language,
  .type {
    margin: 4px 25px 1px 0;
    border-bottom: 1px solid #0366D6;
  }

  .search-input {
    display: flex;
    margin-right: 30px;
    flex-direction: column;
    position: relative;
  }

  .search-input input {
    padding: 5px 0;
    font-family: Roboto;
    font-size: 14px;
    line-height: 17px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 2px solid #0366D6;
    width: 336px;
    outline: none;

  }

  .search-input label {
    font-family: Roboto;
    font-size: 12px;
    color: #0366D6;
  }

  .search-input .label1 {
    font-family: Roboto;
    font-weight: 300;
    font-size: 14px;
    color: black;
    position: absolute;
    top: 4px;
  }

  .search-btn {
    width: 130px;
    height: 35px;
    font-size: 14px;
    color: white;
    background: #0366D6;
    margin-top: 5px;
    outline: none;
  }

  .search-btn:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  }

  .mapping-type {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 27px;
    padding-bottom: 10px;
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

  .error {
    font-family: Roboto;
    font-size: 14px;
    color: red;
  }

  .search-error {
    position: absolute;
    align-self: center;
    bottom: -20px;
    right: 0;
  }

  .red-border {
    border-color: red !important;
  }
</style>
