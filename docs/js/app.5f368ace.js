(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var m=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"1aa2":function(t,e,r){t.exports=r.p+"img/item.ec16620a.png"},"1ded":function(t,e,r){t.exports=r.p+"img/search.5ca35109.png"},"2d1e":function(t,e,r){},3489:function(t,e,r){"use strict";var n=r("41d7"),a=r.n(n);a.a},"41d7":function(t,e,r){},"4afe":function(t,e,r){"use strict";var n=r("7b77"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("header",[r("Navbar")],1),r("div",{attrs:{id:"app"}},[r("router-view")],1),r("footer")])},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Top")]),t._v(" | "),r("router-link",{attrs:{to:"/careers"}},[t._v("Careers")]),t._v(" | "),r("router-link",{attrs:{to:"/skills"}},[t._v("Skills")]),t._v(" | "),r("router-link",{attrs:{to:"/works"}},[t._v("Works")])],1)])},s=[],l=(r("4afe"),r("2877")),c={},m=Object(l["a"])(c,o,s,!1,null,"e6fb9c82",null),u=m.exports,d={components:{Navbar:u}},f=d,p=(r("034f"),Object(l["a"])(f,a,i,!1,null,null,null)),b=p.exports,v=r("5f5b"),_=(r("f9e3"),r("2dd8"),r("8c4f")),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",attrs:{id:"top"}},[r("div",{staticClass:"content"},[r("h1",[t._v("Welcome To My Portfolio")])])])}],C=(r("70c4"),{}),k=Object(l["a"])(C,h,g,!1,null,"09183ce2",null),y=k.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"box w-90",attrs:{fuild:""}},[r("h1",[t._v("Careers")]),t._l(t.careers,(function(e){return r("b-row",{key:e.id,staticClass:"content item"},[r("p",{staticClass:"circle"}),r("b-col",{staticClass:"item-border",attrs:{md:"6",cols:"12"}},[e.id%2!==0?r("b-card",{attrs:{header:e.title}},[r("span",[t._v(t._s(e.term))]),r("b-row",[r("b-col",{attrs:{md:"6",cols:"12"}},[r("ul",[r("h6",{staticClass:"m-0"},[t._v("Content")]),t._l(e.contents,(function(e){return r("li",{key:e.id,staticClass:"text-left"},[t._v(" "+t._s(e.item)+" ")])}))],2)]),r("b-col",{attrs:{md:"6",cols:"12"}},[r("h6",{staticClass:"m-0"},[t._v("Tool")]),r("ul",t._l(e.tools,(function(e){return r("li",{key:e.id,staticClass:"row-2 text-left"},[t._v(" "+t._s(e.item)+" ")])})),0)])],1)],1):t._e()],1),r("b-col",{attrs:{md:"6",cols:"12"}},[e.id%2===0?r("b-card",{attrs:{header:e.title}},[r("span",[t._v(t._s(e.term))]),r("b-row",[r("b-col",{attrs:{md:"6",cols:"12"}},[r("ul",[r("h6",{staticClass:"m-0"},[t._v("Content")]),t._l(e.contents,(function(e){return r("li",{key:e.id,staticClass:"text-left"},[t._v(" "+t._s(e.item)+" ")])}))],2)]),r("b-col",{attrs:{md:"6",cols:"12"}},[r("h6",{staticClass:"m-0"},[t._v("Tool")]),r("ul",t._l(e.tools,(function(e){return r("li",{key:e.id,staticClass:"row-2 text-left"},[t._v(" "+t._s(e.item)+" ")])})),0)])],1)],1):t._e()],1)],1)}))],2)},S=[],x={data:function(){return{careers:[{id:1,title:"搬送機器営業",term:"2015/04 ~ 2015/12",contents:[{item:"BtoB法人営業"},{item:"見積書作成"},{item:"搬送機器の選定、施工"}],tools:[{item:"Excel"}]},{id:2,title:"製造メーカー　生産管理システム保守",term:"2018/05 ~ 2018/09",contents:[{item:"定周期ジョブの監視"},{item:"ジョブ監視、リカバリ"},{item:"ヘルプデスク対応"}],tools:[{item:"PL/SQL"},{item:"Oracle EBS"},{item:"Oracle 11g"},{item:"JP1"},{item:"FFFTP"},{item:"Mantis Bug Tracker"}]},{id:3,title:"プログラミングスクール ECサイト改修",term:"2018/05 ~ 2018/09",contents:[{item:"Viewの共通化"},{item:"商品データの取得"},{item:"類似カテゴリー商品取得"},{item:"単体テスト実装"}],tools:[{item:"Ruby on Rails5"},{item:"Solidus"},{item:"RSpec"},{item:"ERB"},{item:"MySQL"},{item:"Git"},{item:"Bitbucket"}]},{id:4,title:"PHP開発研修",term:"2019/01 ~ 2-10/04",contents:[{item:"スケジュール帳の作成"},{item:"掲示板の作成"},{item:"ブログの作成"},{item:"Twitterのクローン作成"}],tools:[{item:"CodeIgniter3"},{item:"Smarty3"},{item:"Bootstrap"},{item:"PHP"},{item:"HTML"},{item:"CSS"},{item:"JavaScript"},{item:"jQuery"},{item:"MySQL"},{item:"XAMPP"}]},{id:5,title:"物流倉庫システム開発",term:"2019/04 ~ 2019/09",contents:[{item:"在庫管理システム開発"},{item:"請求書システム修正"},{item:"ヘルプデスク対応"}],tools:[{item:"ACCESS VBA"},{item:"EXCEL VBA"},{item:"PostgreSQL"}]}]}}},j=x,O=(r("6528"),Object(l["a"])(j,w,S,!1,null,"7c1db44e",null)),P=O.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"box"},[r("h1",[t._v("Skills")]),r("b-row",{staticClass:"content"},[r("b-col",{attrs:{md:"4",cols:"12"}},[r("ul",[r("h3",[t._v("Lang")]),t._l(t.langs,(function(e){return r("li",{key:e.id},[t._v(t._s(e.name))])}))],2)]),r("b-col",{attrs:{md:"4",cols:"12"}},[r("ul",[r("h3",[t._v("Framework")]),t._l(t.frameworks,(function(e){return r("li",{key:e.id},[t._v(t._s(e.name))])}))],2)]),r("b-col",{attrs:{md:"4",cols:"12"}},[r("ul",[r("h3",[t._v("Other")]),t._l(t.others,(function(e){return r("li",{key:e.id},[t._v(t._s(e.name))])}))],2)])],1)],1)},M=[],L={data:function(){return{langs:[{name:"PHP"},{name:"JavaScript"},{name:"jQuery"},{name:"HTML"},{name:"CSS"},{name:"MySQL"}],frameworks:[{name:"Laravel"},{name:"CodeIgniter"},{name:"Bootstrap"}],others:[{name:"Git"},{name:"ACCESS VBA"}]}}},T=L,B=(r("c9b7"),Object(l["a"])(T,E,M,!1,null,"8adfc028",null)),$=B.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"box",attrs:{id:"#works"}},[r("h1",[t._v("Works")]),r("b-row",{staticClass:"content"},[r("Mercari"),r("Comming")],1)],1)},A=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{attrs:{md:"3",cols:"12"}},[n("h3",[t._v("Mercari Clone")]),n("b-img",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-mercari",modifiers:{"modal-mercari":!0}}],staticClass:"thumbnail",attrs:{src:r("ec13"),alt:"mercari-top",thumbnail:"",fluid:""}}),n("b-modal",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-mercari",modifiers:{"modal-mercari":!0}}],attrs:{id:"modal-mercari",size:"lg","ok-only":"","ok-title":"Close","hide-header":""}},[n("div",[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{staticClass:"item-img",attrs:{"img-src":r("e405")}}),n("b-carousel-slide",{staticClass:"item-img",attrs:{"img-src":r("1ded")}}),n("b-carousel-slide",{staticClass:"item-img",attrs:{"img-src":r("1aa2")}})],1)],1),n("b-container",{staticClass:"mt-2"},[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("p",{staticClass:"m-0"},[n("span",[t._v("フリーマーケットサイト")]),n("a",{attrs:{href:"https://www.mercari.com/jp/"}},[t._v("メルカリ")]),n("span",[t._v("を模倣しクローンサイトを作成しました。")])]),n("p",{staticClass:"m-0"},[n("a",{attrs:{href:"https://mercariclone.herokuapp.com/top"}},[t._v("Website")]),t._v(" | "),n("a",{attrs:{href:"https://github.com/urape/mercariClone"}},[t._v("Github")])])]),n("b-col",{attrs:{md:"6",cols:"12"}},[n("h4",[t._v("Function")]),n("ul",t._l(t.funcs,(function(e){return n("li",{key:e.id},[t._v(t._s(e.name))])})),0)]),n("b-col",{attrs:{md:"6",cols:"12"}},[n("h4",[t._v("Tool")]),n("ul",t._l(t.tools,(function(e){return n("li",{key:e.id,staticClass:"row-2"},[t._v(t._s(e.name))])})),0)])],1)],1)],1)],1)},F=[],J={data:function(){return{funcs:[{name:"ユーザー認証"},{name:"商品出品、編集、削除"},{name:"商品検索"},{name:"いいね"}],tools:[{name:"Laravel6"},{name:"Bootstrap4"},{name:"jQuery"},{name:"HTML"},{name:"CSS"},{name:"MySQL"},{name:"AWS S3"},{name:"Heroku"}]}}},W=J,N=Object(l["a"])(W,H,F,!1,null,null,null),R=N.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{attrs:{md:"3",cols:"12"}},[n("h3",[t._v("next work")]),n("b-img",{attrs:{src:r("fc03"),alt:"mercari-top",thumbnail:"",fluid:""}})],1)},G=[],I={},X=Object(l["a"])(I,V,G,!1,null,null,null),z=X.exports,q={components:{Mercari:R,Comming:z},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},D=q,K=(r("3489"),Object(l["a"])(D,Q,A,!1,null,null,null)),U=K.exports;n["default"].use(_["a"]);var Y=[{path:"/",name:"top",component:y},{path:"/careers",name:"careers",component:P},{path:"/skills",name:"skills",component:$},{path:"/works",name:"works",component:U}],Z=new _["a"]({mode:"history",base:"/portfolio/",routes:Y}),tt=Z;n["default"].use(v["a"]),n["default"].config.productionTip=!1,new n["default"]({router:tt,render:function(t){return t(b)}}).$mount("#app")},6528:function(t,e,r){"use strict";var n=r("d9c5"),a=r.n(n);a.a},"70c4":function(t,e,r){"use strict";var n=r("e735"),a=r.n(n);a.a},"7b77":function(t,e,r){},"85ec":function(t,e,r){},c9b7:function(t,e,r){"use strict";var n=r("2d1e"),a=r.n(n);a.a},d9c5:function(t,e,r){},e405:function(t,e,r){t.exports=r.p+"img/top.663d8ec8.png"},e735:function(t,e,r){},ec13:function(t,e,r){t.exports=r.p+"img/thumbnail.c9a6e0ab.png"},fc03:function(t,e,r){t.exports=r.p+"img/comming.f92ef614.jpg"}});
//# sourceMappingURL=app.5f368ace.js.map