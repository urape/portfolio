<template>
  <b-col md="3" cols="12">
    <h3>Portforio</h3>
    <b-img src="@/assets/images/portfolio/top.png" alt="mercari-top" thumbnail fluid v-b-modal.modal-portfolio class="thumbnail"></b-img>
    <b-modal id="modal-portfolio" size="lg" v-b-modal.modal-portfolio ok-only ok-title="Close" hide-header>
       <div>
         <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
           @sliding-start="onSlideStart" @sliding-end="onSlideEnd"
         >
           <b-carousel-slide img-src="@/assets/images/portfolio/top.png" class="item-img"></b-carousel-slide>
           <b-carousel-slide img-src="@/assets/images/portfolio/career.png" class="item-img"></b-carousel-slide>
         </b-carousel>
       </div>
       <b-container class="mt-2">
         <b-row>
           <b-col cols="12">
             <p class="m-0">
               現在観覧されている私のポートフォリオサイトです。
             <p class="m-0">
               <a href="https://urape.github.io/portfolio/">Website</a> |
               <a href="https://github.com/urape/portfolio">Github</a>
             </p>
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
      ],
      tools: [
        { name: 'Vue.js' },
        { name: 'Bootstrap Vue' },
        { name: 'jQuery' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'GitHub Pages' },
      ]
    }
  }
}
</script>