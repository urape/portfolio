<template>
  <div class="text-center">
    <header>
      <Navbar/>
    </header>
    <div id="app">
      <router-view/>
    </div>
    <footer></footer>
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
  color: #2c3e50;
  }

ul {
  padding: 0;
  list-style: none outside;
}

footer {
  min-height: 50px;
}

.box {
  min-height: 400px;
  height: auto !important;
  position: relative;
}
</style>
