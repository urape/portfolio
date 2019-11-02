<template>
  <b-container class="box">
    <h1>Works</h1>
    <b-row class="content">
      <Mercari/>
      <Comming/>
    </b-row>
  </b-container>
</template>

<script>
import Mercari from '@/components/works/Mercari'
import Comming from '@/components/works/Comming'

export default {
  components: {
    Mercari,
    Comming
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

<style scoped>

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