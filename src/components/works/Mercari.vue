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
               <span>Website(サーバー停止中)</span> |
               <a href="https://github.com/urape/mercariClone">Github</a>
             </p>
           </b-col>
           <b-col md="6" cols="12">
             <h4>Function</h4>
             <ul>
               <li v-for="func in funcs" :key="func.id">{{ func.name }}</li>
             </ul>
           </b-col>
           <b-col md="6" cols="12">
             <h4>Tool</h4>
             <ul>
               <li class="row-2" v-for="tool in tools" :key="tool.id">{{ tool.name }}</li>
             </ul>
           </b-col>
         </b-row>
       </b-container>
    </b-modal>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      funcs: [
        { name: 'ユーザー認証' },
        { name: '商品出品、編集、削除' },
        { name: '商品検索' },
        { name: 'いいね' }
      ],
      tools: [
        { name: 'Laravel6' },
        { name: 'Bootstrap4' },
        { name: 'jQuery' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'MySQL' },
        { name: 'AWS S3' },
        { name: 'Heroku' }
      ]
    }
  }
}
</script>