(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f1":function(t,e,n){},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"1aa2":function(t,e,n){t.exports=n.p+"img/item.ec16620a.png"},"1ded":function(t,e,n){t.exports=n.p+"img/search.5ca35109.png"},"2d1e":function(t,e,n){},3489:function(t,e,n){"use strict";var r=n("41d7"),a=n.n(r);a.a},"41d7":function(t,e,n){},"4afe":function(t,e,n){"use strict";var r=n("7b77"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("header",[n("Navbar")],1),n("div",{attrs:{id:"app"}},[n("router-view")],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Top")]),t._v(" | "),n("router-link",{attrs:{to:"/careers"}},[t._v("Careers")]),t._v(" | "),n("router-link",{attrs:{to:"/skills"}},[t._v("Skills")]),t._v(" | "),n("router-link",{attrs:{to:"/works"}},[t._v("Works")])],1)])},o=[],l=(n("4afe"),n("2877")),c={},m=Object(l["a"])(c,s,o,!1,null,"e6fb9c82",null),u=m.exports,d={components:{Navbar:u}},f=d,p=(n("034f"),Object(l["a"])(f,a,i,!1,null,null,null)),v=p.exports,b=n("5f5b"),_=(n("f9e3"),n("2dd8"),n("8c4f")),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",attrs:{id:"top"}},[n("div",{staticClass:"content"},[n("h1",[t._v("Welcome To My Portfolio")])])])}],C=(n("70c4"),{}),k=Object(l["a"])(C,h,g,!1,null,"09183ce2",null),y=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"box w-90",attrs:{fluid:""}},[n("h1",[t._v("Careers")]),t._l(t.careers,(function(e){return n("b-row",{key:e.id,staticClass:"content"},[n("b-col",{attrs:{md:"1"}}),n("b-col",{attrs:{md:"5",cols:"12"}},[e.id%2!==0?n("div",[n("h5",{staticClass:"m-0"},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.term))]),n("b-row",[n("b-col",{attrs:{md:"6",cols:"12"}},[n("ul",[n("h6",{staticClass:"m-0"},[t._v("Content")]),t._l(e.contents,(function(e){return n("li",{key:e.id,staticClass:"text-left"},[t._v(" "+t._s(e.item)+" ")])}))],2)]),n("b-col",{attrs:{md:"6",cols:"12"}},[n("h6",{staticClass:"m-0"},[t._v("Tool")]),n("ul",t._l(e.tools,(function(e){return n("li",{key:e.id,staticClass:"row-2 text-left"},[t._v(" "+t._s(e.item)+" ")])})),0)])],1)],1):t._e()]),n("b-col",{attrs:{md:"5",cols:"12"}},[e.id%2===0?n("div",[n("h5",{staticClass:"m-0"},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.term))]),n("b-row",[n("b-col",{attrs:{md:"6",cols:"12"}},[n("ul",[n("h6",{staticClass:"m-0"},[t._v("Content")]),t._l(e.contents,(function(e){return n("li",{key:e.id,staticClass:"text-left"},[t._v(" "+t._s(e.item)+" ")])}))],2)]),n("b-col",{attrs:{md:"6",cols:"12"}},[n("h6",{staticClass:"m-0"},[t._v("Tool")]),n("ul",t._l(e.tools,(function(e){return n("li",{key:e.id,staticClass:"row-2 text-left"},[t._v(" "+t._s(e.item)+" ")])})),0)])],1)],1):t._e()])],1)}))],2)},S=[],x={data:function(){return{careers:[{id:1,title:"搬送機器営業",term:"2015/04 ~ 2015/12",contents:[{item:"BtoB法人営業"},{item:"見積書作成"},{item:"搬送機器の選定、施工"}],tools:[{item:"Excel"}]},{id:2,title:"製造メーカー　生産管理システム保守",term:"2018/05 ~ 2018/09",contents:[{item:"定周期ジョブの監視"},{item:"ジョブ監視、リカバリ"},{item:"ヘルプデスク対応"}],tools:[{item:"PL/SQL"},{item:"Oracle EBS"},{item:"Oracle 11g"},{item:"JP1"},{item:"FFFTP"},{item:"Mantis Bug Tracker"}]},{id:3,title:"プログラミングスクール ECサイト改修",term:"2018/05 ~ 2018/09",contents:[{item:"Viewの共通化"},{item:"商品データの取得"},{item:"類似カテゴリー商品取得"},{item:"単体テスト実装"}],tools:[{item:"Ruby on Rails5"},{item:"Solidus"},{item:"RSpec"},{item:"ERB"},{item:"MySQL"},{item:"Git"},{item:"Bitbucket"}]},{id:4,title:"PHP開発研修",term:"2019/01 ~ 2-10/04",contents:[{item:"スケジュール帳の作成"},{item:"掲示板の作成"},{item:"ブログの作成"},{item:"Twitterのクローン作成"}],tools:[{item:"CodeIgniter3"},{item:"Smarty3"},{item:"Bootstrap"},{item:"PHP"},{item:"HTML"},{item:"CSS"},{item:"JavaScript"},{item:"jQuery"},{item:"MySQL"},{item:"XAMPP"}]},{id:5,title:"物流倉庫システム開発",term:"2019/04 ~ 2019/09",contents:[{item:"在庫管理システム開発"},{item:"請求書システム修正"},{item:"ヘルプデスク対応"}],tools:[{item:"ACCESS VBA"},{item:"EXCEL VBA"},{item:"PostgreSQL"}]}]}}},j=x,O=(n("f46f"),Object(l["a"])(j,w,S,!1,null,"388767cc",null)),P=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"box"},[n("h1",[t._v("Skills")]),n("b-row",{staticClass:"content"},[n("b-col",{attrs:{md:"4",cols:"12"}},[n("ul",[n("h3",[t._v("Lang")]),t._l(t.langs,(function(e){return n("li",{key:e.id},[t._v(t._s(e.name))])}))],2)]),n("b-col",{attrs:{md:"4",cols:"12"}},[n("ul",[n("h3",[t._v("Framework")]),t._l(t.frameworks,(function(e){return n("li",{key:e.id},[t._v(t._s(e.name))])}))],2)]),n("b-col",{attrs:{md:"4",cols:"12"}},[n("ul",[n("h3",[t._v("Other")]),t._l(t.others,(function(e){return n("li",{key:e.id},[t._v(t._s(e.name))])}))],2)])],1)],1)},M=[],L={data:function(){return{langs:[{name:"PHP"},{name:"JavaScript"},{name:"jQuery"},{name:"HTML"},{name:"CSS"},{name:"MySQL"}],frameworks:[{name:"Laravel"},{name:"CodeIgniter"},{name:"Bootstrap"}],others:[{name:"Git"},{name:"ACCESS VBA"}]}}},T=L,B=(n("c9b7"),Object(l["a"])(T,E,M,!1,null,"8adfc028",null)),$=B.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"box",attrs:{id:"#works"}},[n("h1",[t._v("Works")]),n("b-row",{staticClass:"content"},[n("Mercari"),n("Comming")],1)],1)},A=[],H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{attrs:{md:"3",cols:"12"}},[r("h3",[t._v("Mercari Clone")]),r("b-img",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-mercari",modifiers:{"modal-mercari":!0}}],staticClass:"thumbnail",attrs:{src:n("ec13"),alt:"mercari-top",thumbnail:"",fluid:""}}),r("b-modal",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-mercari",modifiers:{"modal-mercari":!0}}],attrs:{id:"modal-mercari",size:"lg","ok-only":"","ok-title":"Close","hide-header":""}},[r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{staticClass:"item-img",attrs:{"img-src":n("e405")}}),r("b-carousel-slide",{staticClass:"item-img",attrs:{"img-src":n("1ded")}}),r("b-carousel-slide",{staticClass:"item-img",attrs:{"img-src":n("1aa2")}})],1)],1),r("b-container",{staticClass:"mt-2"},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("p",{staticClass:"m-0"},[r("span",[t._v("フリーマーケットサイト")]),r("a",{attrs:{href:"https://www.mercari.com/jp/"}},[t._v("メルカリ")]),r("span",[t._v("を模倣しクローンサイトを作成しました。")])]),r("p",{staticClass:"m-0"},[r("a",{attrs:{href:"https://mercariclone.herokuapp.com/top"}},[t._v("Website")]),t._v(" | "),r("a",{attrs:{href:"https://github.com/urape/mercariClone"}},[t._v("Github")])])]),r("b-col",{attrs:{md:"6",cols:"12"}},[r("h4",[t._v("Function")]),r("ul",t._l(t.funcs,(function(e){return r("li",{key:e.id},[t._v(t._s(e.name))])})),0)]),r("b-col",{attrs:{md:"6",cols:"12"}},[r("h4",[t._v("Tool")]),r("ul",t._l(t.tools,(function(e){return r("li",{key:e.id,staticClass:"row-2"},[t._v(t._s(e.name))])})),0)])],1)],1)],1)],1)},F=[],J={data:function(){return{funcs:[{name:"ユーザー認証"},{name:"商品出品、編集、削除"},{name:"商品検索"},{name:"いいね"}],tools:[{name:"Laravel6"},{name:"Bootstrap4"},{name:"jQuery"},{name:"HTML"},{name:"CSS"},{name:"MySQL"},{name:"AWS S3"},{name:"Heroku"}]}}},W=J,N=Object(l["a"])(W,H,F,!1,null,null,null),R=N.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{attrs:{md:"3",cols:"12"}},[r("h3",[t._v("next work")]),r("b-img",{attrs:{src:n("fc03"),alt:"mercari-top",thumbnail:"",fluid:""}})],1)},G=[],I={},X=Object(l["a"])(I,V,G,!1,null,null,null),z=X.exports,q={components:{Mercari:R,Comming:z},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},D=q,K=(n("3489"),Object(l["a"])(D,Q,A,!1,null,null,null)),U=K.exports;r["default"].use(_["a"]);var Y=[{path:"/",name:"top",component:y},{path:"/careers",name:"careers",component:P},{path:"/skills",name:"skills",component:$},{path:"/works",name:"works",component:U}],Z=new _["a"]({mode:"history",base:"/portfolio/",routes:Y}),tt=Z;r["default"].use(b["a"]),r["default"].config.productionTip=!1,new r["default"]({router:tt,render:function(t){return t(v)}}).$mount("#app")},"70c4":function(t,e,n){"use strict";var r=n("e735"),a=n.n(r);a.a},"7b77":function(t,e,n){},"85ec":function(t,e,n){},c9b7:function(t,e,n){"use strict";var r=n("2d1e"),a=n.n(r);a.a},e405:function(t,e,n){t.exports=n.p+"img/top.663d8ec8.png"},e735:function(t,e,n){},ec13:function(t,e,n){t.exports=n.p+"img/thumbnail.c9a6e0ab.png"},f46f:function(t,e,n){"use strict";var r=n("01f1"),a=n.n(r);a.a},fc03:function(t,e,n){t.exports=n.p+"img/comming.f92ef614.jpg"}});
//# sourceMappingURL=app.df460310.js.map