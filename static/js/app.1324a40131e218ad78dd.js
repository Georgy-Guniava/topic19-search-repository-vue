webpackJsonp([1],{"/hBk":function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIzIiB2aWV3Qm94PSIwIDAgMjUgMjMiIHdpZHRoPSIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yNSA4LjY1Mzg1LTguNzUtMS4xMDc3LTMuNzUtNy41NDYxNS0zLjc1IDcuNTQ2MTUtOC43NSAxLjEwNzcgNi40Mjg1NyA1LjY0MjM1LTEuNjYwNzEgOC4yMDM4IDcuNzMyMTQtNC4wMzI3IDcuNzMyMSA0LjAzMjctMS42NjA3LTguMjAzOHoiIGZpbGw9IiNmMWUwNWEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="},"0p4Y":function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMzMgMjkiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iNCI+PHBhdGggZD0ibTAgMmgzMyIvPjxwYXRoIGQ9Im0wIDE1aDMzIi8+PHBhdGggZD0ibTAgMjdoMzMiLz48L2c+PC9zdmc+"},E5Cy:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTUgMTgiIHdpZHRoPSIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLjA4ODE2NTkgMi41ODAwMXM0LjM1MTA5NDEgMTEuMDY3MDkgMTAuMTc2NzM0MSAxNS4xNjM5OWMxLjU1MjggMS4wOTIgNS4zODcyLTEuNTU0OCA0LjYzOTUtMy4zMDMxLTIuNTM4NC01LjkzNDQ5LTEyLjI3MjA0LTE0LjI2MzEwNC0xMi4yNzIwNC0xNC4yNjMxMDR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},FhoZ:function(t,i,s){"use strict";(function(i){const e=s("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{index:e.resolve(i,"../dist/index.html"),assetsRoot:e.resolve(i,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/topic19-search-repository-vue/",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(i,"/")},MHxy:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),a=s("FhoZ"),c=a.build.assetsPublicPath,r={name:"Header",data:function(){return{publicPath:c}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"background"},[i("div",{staticClass:"header"},[this._m(0),this._v(" "),i("div",{staticClass:"nav-bar"},[i("div",{staticClass:"nav__search"},[i("router-link",{attrs:{id:"search","active-class":"active",to:this.publicPath+"search"}},[i("span",[this._v("Search")])])],1),this._v(" "),i("div",{staticClass:" nav__my-list"},[i("router-link",{attrs:{id:"my-list","active-class":"active",to:this.publicPath+"my-list"}},[i("span",[this._v("My List")])])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo"},[i("div",{staticClass:"logo__img"},[i("img",{staticClass:"github-logo",attrs:{src:s("qqd5"),alt:"path2"}}),this._v(" "),i("img",{staticClass:"magnifier-handle",attrs:{src:s("E5Cy"),alt:"path4534"}})]),this._v(" "),i("div",{staticClass:"logo__text"},[i("h4",[this._v("GitHub")]),this._v(" "),i("p",[this._v("search")])])])}]};var n={name:"App",components:{Header:s("VU/8")(r,o,!1,function(t){s("nfDS")},"data-v-d8c214c6",null).exports},data:function(){return{myRepositories:[],displayTypeFlag:!0}},methods:{changeDisplayType:function(){this.displayTypeFlag=!this.displayTypeFlag},addRepository:function(t){this.myRepositories.push(t)},removeRepository:function(t){var i=this.myRepositories.findIndex(function(i){return i.id===parseInt(t,10)});this.myRepositories.splice(i,1)}}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("Header"),t._v(" "),s("div",{staticClass:"main"},[s("router-view",{attrs:{myRepositories:t.myRepositories,displayTypeFlag:t.displayTypeFlag,changeDisplayType:t.changeDisplayType,addRepository:t.addRepository,removeRepository:t.removeRepository}})],1),t._v(" "),s("div",{staticClass:"footer"},[t._v("copyright @lodossteam 2018")])],1)},staticRenderFns:[]};var p=s("VU/8")(n,l,!1,function(t){s("z+uV")},null,null).exports,u=s("/ocq"),M=s("mtWM"),v=s.n(M),g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"repositories-list"},[e("div",{staticClass:"strings"},t._l(t.repositories,function(i,a){return e("div",{staticClass:"string-item"},[e("button",{staticClass:"check",attrs:{value:i.id},on:{click:function(i){t.clickOnCheckbox(i.currentTarget.value)}}},[e("div",{class:{"my-repo":i.checked}})]),t._v(" "),e("div",{staticClass:" item-info"},[e("a",{attrs:{href:i.url,target:" _blank"}},[e("span",{staticClass:" name"},[t._v(t._s(i.full_name))])]),t._v(" "),e("span",{staticClass:" description"},[t._v(t._s(i.description))]),t._v(" "),e("div",{staticClass:" topics"},t._l(i.topics,function(i,s){return e("span",{staticClass:"topic"},[t._v(t._s(i))])}))]),t._v(" "),e("div",{staticClass:" language-name"},[t._v(t._s(i.language))]),t._v(" "),e("div",{staticClass:" rating"},[e("img",{attrs:{src:s("/hBk"),alt:"star"}}),t._v(" "),e("span",[t._v(t._s(i.stargazers_count)+"k")])])])}))])},staticRenderFns:[]};var d=s("VU/8")({name:"LineView",props:["repositories","clickOnCheckbox"]},g,!1,function(t){s("v1/C")},"data-v-6a2f4b78",null).exports,I={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"repositories-list"},[e("div",{staticClass:"tiles"},t._l(t.repositories,function(i,a){return e("div",{staticClass:"tile-item"},[e("div",{staticClass:" item-info"},[e("a",{attrs:{href:i.url,target:" _blank"}},[e("span",{staticClass:" name"},[t._v(t._s(i.full_name))])]),t._v(" "),e("span",{staticClass:" description"},[t._v(t._s(i.description))]),t._v(" "),e("div",{staticClass:" topics"},t._l(i.topics,function(i,s){return e("span",{staticClass:"topic"},[t._v(t._s(i))])}))]),t._v(" "),e("div",{staticClass:" language-name"},[t._v(t._s(i.language))]),t._v(" "),e("div",{staticClass:" rating"},[e("img",{attrs:{src:s("/hBk"),alt:"star"}}),t._v(" "),e("span",[t._v(t._s(i.stargazers_count)+"k")])]),t._v(" "),i.checked?e("button",{staticClass:"remove-repo pointer",attrs:{value:i.id},on:{click:function(i){t.clickOnCheckbox(i.currentTarget.value)}}},[t._v("REMOVE FROM LIST\n      ")]):e("button",{staticClass:"add-repo pointer",attrs:{value:i.id},on:{click:function(i){t.clickOnCheckbox(i.currentTarget.value)}}},[t._v("ADD TO LIST\n      ")])])}))])},staticRenderFns:[]};var N=s("VU/8")({name:"TileView",props:["repositories","clickOnCheckbox"]},I,!1,function(t){s("XFCS")},"data-v-ef57aa8e",null).exports,y={name:"Search",props:["myRepositories","displayTypeFlag","changeDisplayType","addRepository","removeRepository"],components:{LineView:d,TileView:N},data:function(){return{notFoundFlag:!0,errorFlag:!1,repositories:[],type:"Repositories",searchText:"",language:"JavaScript"}},methods:{parseToRepo:function(t){var i=this;return t.map(function(t){return{id:t.id,full_name:t.full_name,description:t.description,stargazers_count:Math.floor(t.stargazers_count/1e3),language:t.language,topics:t.topics,url:t.html_url,checked:!!i.myRepositories.find(function(i){return i.id===t.id})}})},createReqUrl:function(){return"https://api.github.com/search/"+this.type.toLowerCase()+"?q="+this.searchText+"language:"+this.language.toLowerCase()+"&sort=stars&order=desc"},clickOnCheckbox:function(t){var i=this;this.repositories=this.repositories.map(function(s){return s.id===parseInt(t,10)&&(s.checked=!s.checked,s.checked?i.addRepository(s):i.removeRepository(s.id)),s})},searchRepositories:function(){var t=this;if(!this.searchText.length)return this.errorFlag=!0,!1;var i={method:"get",headers:{Accept:"application/vnd.github.mercy-preview+json"},url:this.createReqUrl()};v()(i).then(function(i){t.repositories=t.parseToRepo(i.data.items),t.notFoundFlag=!i.data.items.length}).catch(function(t){console.log("err",t)})}}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"search"},[e("div",{staticClass:"filter"},[t._m(0),t._v(" "),e("div",{staticClass:"language"},[e("select",{attrs:{id:"languageSelect"},on:{change:function(i){t.language=i.target.value}}},[e("option",[t._v("JavaScript")]),t._v(" "),e("option",{attrs:{value:"css"}},[t._v("css")]),t._v(" "),e("option",[t._v("html")]),t._v(" "),e("option",[t._v("php")]),t._v(" "),e("option",[t._v("ruby")]),t._v(" "),e("option",[t._v("c++")]),t._v(" "),e("option",[t._v("python")]),t._v(" "),e("option",[t._v("c#")]),t._v(" "),e("option",[t._v("java")]),t._v(" "),e("option",[t._v("go")]),t._v(" "),e("option",[t._v("haskel")])])]),t._v(" "),e("div",{staticClass:"search-input"},[e("label",{attrs:{for:"search-input"}},[t._v("Type here for search")]),t._v(" "),e("input",{class:{"red-border":t.errorFlag},attrs:{id:"search-input",type:"text"},domProps:{value:t.searchText},on:{input:function(i){t.searchText=i.target.value}}}),t._v(" "),t.errorFlag?e("div",{staticClass:"error search-error"},[e("span",[t._v("Please fill out the form completely!")])]):t._e()]),t._v(" "),e("button",{staticClass:"search-btn pointer",attrs:{type:"submit"},on:{click:t.searchRepositories}},[t._v("SEARCH")])]),t._v(" "),t.displayTypeFlag?e("div",{staticClass:"mapping-type"},[e("img",{staticClass:"pointer",attrs:{src:s("iL70"),alt:"tile"},on:{click:t.changeDisplayType}}),t._v(" "),e("img",{attrs:{src:s("qvtG"),alt:"lineDark"}})]):e("div",{staticClass:"mapping-type"},[e("img",{attrs:{src:s("iBcq"),alt:"tileDark"}}),t._v(" "),e("img",{staticClass:"pointer",attrs:{src:s("0p4Y"),alt:"line"},on:{click:t.changeDisplayType}})]),t._v(" "),t.notFoundFlag?e("div",{staticClass:"without-repository"},[e("h4",[t._v("NO RESULTS FOUND")]),t._v(" "),e("p",[t._v("select other parameters and try again")])]):t._e(),t._v(" "),t.displayTypeFlag?e("LineView",{attrs:{repositories:t.repositories,clickOnCheckbox:t.clickOnCheckbox}}):e("TileView",{attrs:{repositories:t.repositories,clickOnCheckbox:t.clickOnCheckbox}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"type"},[i("select",[i("option",[this._v("Repositories")])])])}]};var h=s("VU/8")(y,m,!1,function(t){s("dTX8")},"data-v-2e7cd426",null).exports,T={name:"MyList",props:["myRepositories","displayTypeFlag","changeDisplayType","addRepository","removeRepository"],components:{LineView:d,TileView:N}},D={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-list"},[t._m(0),t._v(" "),t.displayTypeFlag?e("div",{staticClass:"mapping-type"},[e("img",{staticClass:"pointer",attrs:{src:s("iL70"),alt:"tile"},on:{click:t.changeDisplayType}}),t._v(" "),e("img",{attrs:{src:s("qvtG"),alt:"lineDark"}})]):e("div",{staticClass:"mapping-type"},[e("img",{attrs:{src:s("iBcq"),alt:"tileDark"}}),t._v(" "),e("img",{staticClass:"pointer",attrs:{src:s("0p4Y"),alt:"line"},on:{click:t.changeDisplayType}})]),t._v(" "),t.myRepositories.length?t._e():e("div",{staticClass:"without-repository"},[e("h4",[t._v("YOU HAVE NO REPOSITORIES")]),t._v(" "),e("p",[t._v("you need to add a repository in the search")])]),t._v(" "),t.displayTypeFlag?e("LineView",{attrs:{repositories:t.myRepositories,clickOnCheckbox:t.removeRepository}}):e("TileView",{attrs:{repositories:t.myRepositories,clickOnCheckbox:t.removeRepository}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title"},[i("span",[this._v("My List")])])}]};var j=s("VU/8")(T,D,!1,function(t){s("MHxy")},"data-v-207bac06",null).exports;e.a.use(u.a);var _=new u.a({mode:"history",routes:[{path:c,redirect:c+"search"},{path:c+"search",name:"Search",component:h},{path:c+"my-list",name:"MyList",component:j}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:_,components:{App:p,Search:h},template:"<App/>"})},XFCS:function(t,i){},dTX8:function(t,i){},iBcq:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzIgMzEiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2M0MTQ2Ij48cGF0aCBkPSJtMCAwaDE0djE0aC0xNHoiLz48cGF0aCBkPSJtMTggMGgxNHYxNGgtMTR6Ii8+PHBhdGggZD0ibTAgMTdoMTR2MTRoLTE0eiIvPjxwYXRoIGQ9Im0xOCAxN2gxNHYxNGgtMTR6Ii8+PC9nPjwvc3ZnPg=="},iL70:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzIgMzEiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZTBlMGUwIj48cGF0aCBkPSJtMCAwaDE0djE0aC0xNHoiLz48cGF0aCBkPSJtMTggMGgxNHYxNGgtMTR6Ii8+PHBhdGggZD0ibTAgMTdoMTR2MTRoLTE0eiIvPjxwYXRoIGQ9Im0xOCAxN2gxNHYxNGgtMTR6Ii8+PC9nPjwvc3ZnPg=="},nfDS:function(t,i){},qqd5:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yMC40MjgyIDI0LjUxMDRjMy40NDEyLS40MDc3IDcuMTAxMy0xLjY2MjkgNy4xMDEzLTcuNjI1OCAwLTEuNjk0OC0uNTk0OS0zLjA3Ni0xLjU2MzktNC4xNDMyLjE1NjMtLjQwNzYuNjU2NC0xLjk0NTYtLjE4ODYtNC4wNzkzNyAwIDAtMS4yNTEzLS40MDgxNy00LjE5MTMgMS41Njg3Ny0xLjI1MTMtLjM0NDgzLTIuNjI3Ni0uNTY0OS0zLjkxMDEtLjU2NDktMS4zMTQ0IDAtMi42OTExLjIyMDA3LTMuOTExMi41NjQ5LTIuOTcxOS0xLjk3Njk0LTQuMjIzMTMtMS41Njg3Ny00LjIyMzEzLTEuNTY4NzctLjg0NDQyIDIuMTMzNzctLjM0Mzc0IDMuNjcxNzctLjE4NzQ5IDQuMDc5MzctLjk2OTk4IDEuMDY3MS0xLjU2NDM0IDIuNDQ4NC0xLjU2NDM0IDQuMTQzMiAwIDUuOTYyOSAzLjY2MDA2IDcuMjE4MSA3LjEwMTI2IDcuNjI1OC0uNDM3Ni4zNzczLS44NDQ0IDEuMDk4NC0xLjAwMDcgMi4xMDI5LS44NzYzLjM3NjMtMy4xNiAxLjA5ODUtNC41MzYyMi0xLjI4NjcgMCAwLS44MTM2Ni0xLjQ3NDctMi4zNDYyNi0xLjU2ODggMCAwLTEuNTMzMDgtLjAzMTMtLjEyNTA3Ljk0MDcgMCAwIDEuMDMxOTkuNDcxNCAxLjcyMDY1IDIuMjU5NyAwIDAgLjkzODE3IDIuOTgxOSA1LjI1NTEgMi4wNDAxdjIuNjY3NGMwIC40MDg3LS4zMTI1Ljg3OS0xLjA5NDQuNzUzNi02LjEzMTgyLTIuMDQwMi0xMC41NDI1NC03Ljg3NzctMTAuNTQyNTQtMTQuNzE4OSAwLTguNTY3OTkgNi45MTMyMi0xNS41MDMzIDE1LjQ1NDM0LTE1LjUwMzMgOC41MDg4IDAgMTUuNDUzOCA2LjkzNTM4IDE1LjQyMjUgMTUuNTAzMyAwIDYuODQxMi00LjQxMTIgMTIuNjQ3My0xMC41NDI1IDE0LjcxODktLjc4MjQuMTU2OC0xLjA5NS0uMzEzNS0xLjA5NS0uNzUzNnYtNC4yOTg5Yy4wMDAxLTEuNDQ0NS0uNDY5OC0yLjM4NTEtMS4wMzI0LTIuODU2NHptMTQuODkxMi02Ljc3ODJjMC05Ljc5MjM5LTcuOTE0OS0xNy43MzIxOTk5My0xNy42NDM4LTE3LjczMjE5OTkzLTkuNzYxMTYgMC0xNy42NzU2MDA3NSA3LjkzOTgwOTkzLTE3LjY3NTYwMDc1IDE3LjczMjE5OTkzIDAgOS43NjAxIDcuOTE0NDQwNzUgMTcuNzAwNCAxNy42NzU2MDA3NSAxNy43MDA0IDkuNzI4OSAwIDE3LjY0MzgtNy45NDAzIDE3LjY0MzgtMTcuNzAwNHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="},qvtG:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMzMgMjkiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMzYzQxNDYiIHN0cm9rZS13aWR0aD0iNCI+PHBhdGggZD0ibTAgMmgzMyIvPjxwYXRoIGQ9Im0wIDE1aDMzIi8+PHBhdGggZD0ibTAgMjdoMzMiLz48L2c+PC9zdmc+"},"v1/C":function(t,i){},"z+uV":function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.1324a40131e218ad78dd.js.map