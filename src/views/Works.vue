<template>
  <b-container class="box">
    <h1>Works</h1>
    <b-row class="content">
      <Mercari/>
      <b-col md="3" cols="12">
          <h3>next work</h3>
          <b-img src="@/assets/images/comming.jpg" alt="mercari-top" thumbnail fluid></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Mercari from '@/components/works/Mercari'

export default {
  components: {
    Mercari
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style>
ul{
  padding: 0;
  list-style: none outside;
}

li{
  padding: 0;
  float: left;
  width: 50%;
  list-style: none;
}

.item-img{
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.thumbnail{
  width: 100%;
  height: 210px;
  object-fit: cover;
}
.content {
  padding-top: 10px;
}
.modal-img{
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>