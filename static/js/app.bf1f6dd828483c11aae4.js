webpackJsonp([1],{"/hBk":function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNSAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNSA4LjY1Mzg1TDE2LjI1IDcuNTQ2MTVMMTIuNSAwTDguNzUgNy41NDYxNUwwIDguNjUzODVMNi40Mjg1NyAxNC4yOTYyTDQuNzY3ODYgMjIuNUwxMi41IDE4LjQ2NzNMMjAuMjMyMSAyMi41TDE4LjU3MTQgMTQuMjk2MkwyNSA4LjY1Mzg1WiIgZmlsbD0iI0YxRTA1QSIvPgo8L3N2Zz4K"},"0p4Y":function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAzMyAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjIiIHgyPSIzMyIgeTI9IjIiIHN0cm9rZT0iI0UwRTBFMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxsaW5lIHkxPSIxNSIgeDI9IjMzIiB5Mj0iMTUiIHN0cm9rZT0iI0UwRTBFMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxsaW5lIHkxPSIyNyIgeDI9IjMzIiB5Mj0iMjciIHN0cm9rZT0iI0UwRTBFMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo="},E5Cy:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMDg4MTY1OSAyLjU4MDAxQzAuMDg4MTY1OSAyLjU4MDAxIDQuNDM5MjYgMTMuNjQ3MSAxMC4yNjQ5IDE3Ljc0NEMxMS44MTc3IDE4LjgzNiAxNS42NTIxIDE2LjE4OTIgMTQuOTA0NCAxNC40NDA5QzEyLjM2NiA4LjUwNjQxIDIuNjMyMzYgMC4xNzc3OTYgMi42MzIzNiAwLjE3Nzc5NkwwLjA4ODE2NTkgMi41ODAwMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},Ld26:function(i,t){},MHxy:function(i,t){},NHnr:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("7+uW"),a={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"background"},[t("div",{staticClass:"header"},[this._m(0),this._v(" "),t("div",{staticClass:"nav-bar"},[t("div",{staticClass:"nav__search"},[t("router-link",{attrs:{id:"search","active-class":"active",to:"/search"}},[t("span",[this._v("Search")])])],1),this._v(" "),t("div",{staticClass:" nav__my-list"},[t("router-link",{attrs:{id:"my-list","active-class":"active",to:"/my-list"}},[t("span",[this._v("My List")])])],1)])])])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"logo"},[t("div",{staticClass:"logo__img"},[t("img",{staticClass:"github-logo",attrs:{src:e("qqd5"),alt:"path2"}}),this._v(" "),t("img",{staticClass:"magnifier-handle",attrs:{src:e("E5Cy"),alt:"path4534"}})]),this._v(" "),t("div",{staticClass:"logo__text"},[t("h4",[this._v("GitHub")]),this._v(" "),t("p",[this._v("search")])])])}]};var r={name:"App",components:{Header:e("VU/8")({name:"Header",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(i){e("Ld26")},"data-v-eb953594",null).exports},data:function(){return{myRepositories:[],displayTypeFlag:!0}},methods:{changeDisplayType:function(){this.displayTypeFlag=!this.displayTypeFlag},addRepository:function(i){this.myRepositories.push(i)},removeRepository:function(i){var t=this.myRepositories.findIndex(function(t){return t.id===parseInt(i,10)});this.myRepositories.splice(t,1)}}},c={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),i._v(" "),e("div",{staticClass:"main"},[e("router-view",{attrs:{myRepositories:i.myRepositories,displayTypeFlag:i.displayTypeFlag,changeDisplayType:i.changeDisplayType,addRepository:i.addRepository,removeRepository:i.removeRepository}})],1),i._v(" "),e("div",{staticClass:"footer"},[i._v("copyright @lodossteam 2018")])],1)},staticRenderFns:[]};var n=e("VU/8")(r,c,!1,function(i){e("z+uV")},null,null).exports,o=e("/ocq"),M=e("mtWM"),l=e.n(M),I={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"repositories-list"},[s("div",{staticClass:"strings"},i._l(i.repositories,function(t,a){return s("div",{staticClass:"string-item"},[s("button",{staticClass:"check",attrs:{value:t.id},on:{click:function(t){i.clickOnCheckbox(t.currentTarget.value)}}},[s("div",{class:{"my-repo":t.checked}})]),i._v(" "),s("div",{staticClass:" item-info"},[s("a",{attrs:{href:t.url,target:" _blank"}},[s("span",{staticClass:" name"},[i._v(i._s(t.full_name))])]),i._v(" "),s("span",{staticClass:" description"},[i._v(i._s(t.description))]),i._v(" "),s("div",{staticClass:" topics"},i._l(t.topics,function(t,e){return s("span",{staticClass:"topic"},[i._v(i._s(t))])}))]),i._v(" "),s("div",{staticClass:" language-name"},[i._v(i._s(t.language))]),i._v(" "),s("div",{staticClass:" rating"},[s("img",{attrs:{src:e("/hBk"),alt:"star"}}),i._v(" "),s("span",[i._v(i._s(t.stargazers_count)+"k")])])])}))])},staticRenderFns:[]};var g=e("VU/8")({name:"LineView",props:["repositories","clickOnCheckbox"]},I,!1,function(i){e("v1/C")},"data-v-6a2f4b78",null).exports,p={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"repositories-list"},[s("div",{staticClass:"tiles"},i._l(i.repositories,function(t,a){return s("div",{staticClass:"tile-item"},[s("div",{staticClass:" item-info"},[s("a",{attrs:{href:t.url,target:" _blank"}},[s("span",{staticClass:" name"},[i._v(i._s(t.full_name))])]),i._v(" "),s("span",{staticClass:" description"},[i._v(i._s(t.description))]),i._v(" "),s("div",{staticClass:" topics"},i._l(t.topics,function(t,e){return s("span",{staticClass:"topic"},[i._v(i._s(t))])}))]),i._v(" "),s("div",{staticClass:" language-name"},[i._v(i._s(t.language))]),i._v(" "),s("div",{staticClass:" rating"},[s("img",{attrs:{src:e("/hBk"),alt:"star"}}),i._v(" "),s("span",[i._v(i._s(t.stargazers_count)+"k")])]),i._v(" "),t.checked?s("button",{staticClass:"remove-repo pointer",attrs:{value:t.id},on:{click:function(t){i.clickOnCheckbox(t.currentTarget.value)}}},[i._v("REMOVE FROM LIST\n      ")]):s("button",{staticClass:"add-repo pointer",attrs:{value:t.id},on:{click:function(t){i.clickOnCheckbox(t.currentTarget.value)}}},[i._v("ADD TO LIST\n      ")])])}))])},staticRenderFns:[]};var u=e("VU/8")({name:"TileView",props:["repositories","clickOnCheckbox"]},p,!1,function(i){e("XFCS")},"data-v-ef57aa8e",null).exports,D={name:"Search",props:["myRepositories","displayTypeFlag","changeDisplayType","addRepository","removeRepository"],components:{LineView:g,TileView:u},data:function(){return{notFoundFlag:!0,errorFlag:!1,repositories:[],type:"Repositories",searchText:"",language:"JavaScript"}},methods:{parseToRepo:function(i){var t=this;return i.map(function(i){return{id:i.id,full_name:i.full_name,description:i.description,stargazers_count:Math.floor(i.stargazers_count/1e3),language:i.language,topics:i.topics,url:i.html_url,checked:!!t.myRepositories.find(function(t){return t.id===i.id})}})},createReqUrl:function(){return"https://api.github.com/search/"+this.type.toLowerCase()+"?q="+this.searchText+"language:"+this.language.toLowerCase()+"&sort=stars&order=desc"},clickOnCheckbox:function(i){var t=this;this.repositories=this.repositories.map(function(e){return e.id===parseInt(i,10)&&(e.checked=!e.checked,e.checked?t.addRepository(e):t.removeRepository(e.id)),e})},searchRepositories:function(){var i=this;if(!this.searchText.length)return this.errorFlag=!0,!1;var t={method:"get",headers:{Accept:"application/vnd.github.mercy-preview+json"},url:this.createReqUrl()};l()(t).then(function(t){i.repositories=i.parseToRepo(t.data.items),i.notFoundFlag=!t.data.items.length}).catch(function(i){console.log("err",i)})}}},d={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"search"},[s("div",{staticClass:"filter"},[i._m(0),i._v(" "),s("div",{staticClass:"language"},[s("select",{attrs:{id:"languageSelect"},on:{change:function(t){i.language=t.target.value}}},[s("option",[i._v("JavaScript")]),i._v(" "),s("option",{attrs:{value:"css"}},[i._v("css")]),i._v(" "),s("option",[i._v("html")]),i._v(" "),s("option",[i._v("php")]),i._v(" "),s("option",[i._v("ruby")]),i._v(" "),s("option",[i._v("c++")]),i._v(" "),s("option",[i._v("python")]),i._v(" "),s("option",[i._v("c#")]),i._v(" "),s("option",[i._v("java")]),i._v(" "),s("option",[i._v("go")]),i._v(" "),s("option",[i._v("haskel")])])]),i._v(" "),s("div",{staticClass:"search-input"},[s("label",{attrs:{for:"search-input"}},[i._v("Type here for search")]),i._v(" "),s("input",{class:{"red-border":i.errorFlag},attrs:{id:"search-input",type:"text"},domProps:{value:i.searchText},on:{input:function(t){i.searchText=t.target.value}}}),i._v(" "),i.errorFlag?s("div",{staticClass:"error search-error"},[s("span",[i._v("Please fill out the form completely!")])]):i._e()]),i._v(" "),s("button",{staticClass:"search-btn pointer",attrs:{type:"submit"},on:{click:i.searchRepositories}},[i._v("SEARCH")])]),i._v(" "),i.displayTypeFlag?s("div",{staticClass:"mapping-type"},[s("img",{staticClass:"pointer",attrs:{src:e("iL70"),alt:"tile"},on:{click:i.changeDisplayType}}),i._v(" "),s("img",{attrs:{src:e("qvtG"),alt:"lineDark"}})]):s("div",{staticClass:"mapping-type"},[s("img",{attrs:{src:e("iBcq"),alt:"tileDark"}}),i._v(" "),s("img",{staticClass:"pointer",attrs:{src:e("0p4Y"),alt:"line"},on:{click:i.changeDisplayType}})]),i._v(" "),i.notFoundFlag?s("div",{staticClass:"without-repository"},[s("h4",[i._v("NO RESULTS FOUND")]),i._v(" "),s("p",[i._v("select other parameters and try again")])]):i._e(),i._v(" "),i.displayTypeFlag?s("LineView",{attrs:{repositories:i.repositories,clickOnCheckbox:i.clickOnCheckbox}}):s("TileView",{attrs:{repositories:i.repositories,clickOnCheckbox:i.clickOnCheckbox}})],1)},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"type"},[t("select",[t("option",[this._v("Repositories")])])])}]};var y=e("VU/8")(D,d,!1,function(i){e("dTX8")},"data-v-2e7cd426",null).exports,N={name:"MyList",props:["myRepositories","displayTypeFlag","changeDisplayType","addRepository","removeRepository"],components:{LineView:g,TileView:u}},v={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"my-list"},[i._m(0),i._v(" "),i.displayTypeFlag?s("div",{staticClass:"mapping-type"},[s("img",{staticClass:"pointer",attrs:{src:e("iL70"),alt:"tile"},on:{click:i.changeDisplayType}}),i._v(" "),s("img",{attrs:{src:e("qvtG"),alt:"lineDark"}})]):s("div",{staticClass:"mapping-type"},[s("img",{attrs:{src:e("iBcq"),alt:"tileDark"}}),i._v(" "),s("img",{staticClass:"pointer",attrs:{src:e("0p4Y"),alt:"line"},on:{click:i.changeDisplayType}})]),i._v(" "),i.myRepositories.length?i._e():s("div",{staticClass:"without-repository"},[s("h4",[i._v("YOU HAVE NO REPOSITORIES")]),i._v(" "),s("p",[i._v("you need to add a repository in the search")])]),i._v(" "),i.displayTypeFlag?s("LineView",{attrs:{repositories:i.myRepositories,clickOnCheckbox:i.removeRepository}}):s("TileView",{attrs:{repositories:i.myRepositories,clickOnCheckbox:i.removeRepository}})],1)},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"title"},[t("span",[this._v("My List")])])}]};var j=e("VU/8")(N,v,!1,function(i){e("MHxy")},"data-v-207bac06",null).exports;s.a.use(o.a);var T=new o.a({mode:"history",routes:[{path:"/",redirect:"search"},{path:"/search",name:"Search",component:y},{path:"/my-list",name:"MyList",component:j}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:T,components:{App:n,Search:y},template:"<App/>"})},XFCS:function(i,t){},dTX8:function(i,t){},iBcq:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMiAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxNFYxNEgwVjBaIiBmaWxsPSIjM0M0MTQ2Ii8+CjxwYXRoIGQ9Ik0xOCAwSDMyVjE0SDE4VjBaIiBmaWxsPSIjM0M0MTQ2Ii8+CjxwYXRoIGQ9Ik0wIDE3SDE0VjMxSDBWMTdaIiBmaWxsPSIjM0M0MTQ2Ii8+CjxwYXRoIGQ9Ik0xOCAxN0gzMlYzMUgxOFYxN1oiIGZpbGw9IiMzQzQxNDYiLz4KPC9zdmc+Cg=="},iL70:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMiAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxNFYxNEgwVjBaIiBmaWxsPSIjRTBFMEUwIi8+CjxwYXRoIGQ9Ik0xOCAwSDMyVjE0SDE4VjBaIiBmaWxsPSIjRTBFMEUwIi8+CjxwYXRoIGQ9Ik0wIDE3SDE0VjMxSDBWMTdaIiBmaWxsPSIjRTBFMEUwIi8+CjxwYXRoIGQ9Ik0xOCAxN0gzMlYzMUgxOFYxN1oiIGZpbGw9IiNFMEUwRTAiLz4KPC9zdmc+Cg=="},qqd5:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC40MjgyIDI0LjUxMDRDMjMuODY5NCAyNC4xMDI3IDI3LjUyOTUgMjIuODQ3NSAyNy41Mjk1IDE2Ljg4NDZDMjcuNTI5NSAxNS4xODk4IDI2LjkzNDYgMTMuODA4NiAyNS45NjU2IDEyLjc0MTRDMjYuMTIxOSAxMi4zMzM4IDI2LjYyMiAxMC43OTU4IDI1Ljc3NyA4LjY2MjAzQzI1Ljc3NyA4LjY2MjAzIDI0LjUyNTcgOC4yNTM4NiAyMS41ODU3IDEwLjIzMDhDMjAuMzM0NCA5Ljg4NTk3IDE4Ljk1ODEgOS42NjU5IDE3LjY3NTYgOS42NjU5QzE2LjM2MTIgOS42NjU5IDE0Ljk4NDUgOS44ODU5NyAxMy43NjQ0IDEwLjIzMDhDMTAuNzkyNSA4LjI1Mzg2IDkuNTQxMjcgOC42NjIwMyA5LjU0MTI3IDguNjYyMDNDOC42OTY4NSAxMC43OTU4IDkuMTk3NTMgMTIuMzMzOCA5LjM1Mzc4IDEyLjc0MTRDOC4zODM4IDEzLjgwODUgNy43ODk0NCAxNS4xODk4IDcuNzg5NDQgMTYuODg0NkM3Ljc4OTQ0IDIyLjg0NzUgMTEuNDQ5NSAyNC4xMDI3IDE0Ljg5MDcgMjQuNTEwNEMxNC40NTMxIDI0Ljg4NzcgMTQuMDQ2MyAyNS42MDg4IDEzLjg5IDI2LjYxMzNDMTMuMDEzNyAyNi45ODk2IDEwLjczIDI3LjcxMTggOS4zNTM3OCAyNS4zMjY2QzkuMzUzNzggMjUuMzI2NiA4LjU0MDEyIDIzLjg1MTkgNy4wMDc1MiAyMy43NTc4QzcuMDA3NTIgMjMuNzU3OCA1LjQ3NDQ0IDIzLjcyNjUgNi44ODI0NSAyNC42OTg1QzYuODgyNDUgMjQuNjk4NSA3LjkxNDQ0IDI1LjE2OTkgOC42MDMxIDI2Ljk1ODJDOC42MDMxIDI2Ljk1ODIgOS41NDEyNyAyOS45NDAxIDEzLjg1ODIgMjguOTk4M1YzMS42NjU3QzEzLjg1ODIgMzIuMDc0NCAxMy41NDU3IDMyLjU0NDcgMTIuNzYzOCAzMi40MTkzQzYuNjMxOTggMzAuMzc5MSAyLjIyMTI2IDI0LjU0MTYgMi4yMjEyNiAxNy43MDA0QzIuMjIxMjYgOS4xMzI0MSA5LjEzNDQ4IDIuMTk3MSAxNy42NzU2IDIuMTk3MUMyNi4xODQ0IDIuMTk3MSAzMy4xMjk0IDkuMTMyNDggMzMuMDk4MSAxNy43MDA0QzMzLjA5ODEgMjQuNTQxNiAyOC42ODY5IDMwLjM0NzcgMjIuNTU1NiAzMi40MTkzQzIxLjc3MzIgMzIuNTc2MSAyMS40NjA2IDMyLjEwNTggMjEuNDYwNiAzMS42NjU3VjI3LjM2NjhDMjEuNDYwNyAyNS45MjIzIDIwLjk5MDggMjQuOTgxNyAyMC40MjgyIDI0LjUxMDRaTTM1LjMxOTQgMTcuNzMyMkMzNS4zMTk0IDcuOTM5ODEgMjcuNDA0NSA2LjcyNDQ0ZS0wOCAxNy42NzU2IDYuNzI0NDRlLTA4QzcuOTE0NDQgNi43MjQ0NGUtMDggLTcuNDUwNzJlLTA3IDcuOTM5ODEgLTcuNDUwNzJlLTA3IDE3LjczMjJDLTcuNDUwNzJlLTA3IDI3LjQ5MjMgNy45MTQ0NCAzNS40MzI2IDE3LjY3NTYgMzUuNDMyNkMyNy40MDQ1IDM1LjQzMjYgMzUuMzE5NCAyNy40OTIzIDM1LjMxOTQgMTcuNzMyMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},qvtG:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAzMyAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjIiIHgyPSIzMyIgeTI9IjIiIHN0cm9rZT0iIzNDNDE0NiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxsaW5lIHkxPSIxNSIgeDI9IjMzIiB5Mj0iMTUiIHN0cm9rZT0iIzNDNDE0NiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxsaW5lIHkxPSIyNyIgeDI9IjMzIiB5Mj0iMjciIHN0cm9rZT0iIzNDNDE0NiIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo="},"v1/C":function(i,t){},"z+uV":function(i,t){}},["NHnr"]);
//# sourceMappingURL=app.bf1f6dd828483c11aae4.js.map