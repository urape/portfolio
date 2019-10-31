<template>
<div>
  <header>
    <Navbar/>
  </header>
  <div id="app">
    <router-view/>
  </div>
</div>  
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  margin-top: 30px;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  .box {
    min-height: 400px;
    height: auto !important;
    position: relative;
  }

</style>
