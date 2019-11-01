<template>
  <b-col md="3" cols="12">
    <h3>Mercari Clone</h3>
    <b-img src="@/assets/images/mercari/thumbnail.png" alt="mercari-top" thumbnail fluid v-b-modal.modal-mercari class="thumbnail"></b-img>
    <b-modal id="modal-mercari" size="lg" v-b-modal.modal-mercari ok-only ok-title="Close" hide-header>
       <div>
         <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
           @sliding-start="onSlideStart" @sliding-end="onSlideEnd"
         >
           <b-carousel-slide img-src="@/assets/images/mercari/top.png" class="item-img"></b-carousel-slide>
           <b-carousel-slide img-src="@/assets/images/mercari/search.png" class="item-img"></b-carousel-slide>
           <b-carousel-slide img-src="@/assets/images/mercari/item.png" class="item-img"></b-carousel-slide>
         </b-carousel>
       </div>
       <b-container class="mt-2">
         <b-row>
           <b-col cols="12">
             <p class="m-0">
               <span>フリーマーケットサイト</span><a href="https://www.mercari.com/jp/">メルカリ</a>
               <span>を模倣しクローンサイトを作成しました。</span>
             </p>
             <p class="m-0">
               <a href="https://mercariclone.herokuapp.com/top">Website</a> |
               <a href="https://github.com/urape/mercariClone">Github</a>
             </p>
           </b-col>
           <b-col md="6" cols="12">
             <h4>Function</h4>
             <ul>
               <li>ユーザー認証</li>
               <li>出品、編集、削除</li>
               <li>商品検索</li>
               <li>いいね</li>
             </ul>
           </b-col>
           <b-col md="6" cols="12">
             <h4>Tool</h4>
             <ul>
               <li>Laravel6</li>
               <li>Bootstrap4</li>
               <li>jQuery</li>
               <li>HTML</li>
               <li>CSS</li>
               <li>Composer</li>
               <li>MySQL</li>
               <li>Heroku</li>
             </ul>
           </b-col>
         </b-row>
       </b-container>
    </b-modal>
  </b-col>
</template>