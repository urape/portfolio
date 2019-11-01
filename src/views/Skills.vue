<template>
    <b-container class="box">
      <h1>Skills</h1>
      <b-row class="content">
        <b-col md="1"></b-col>
        <b-col md="5" cols="12">
          <ul id="lang1">
            <h3>Lang</h3>
            <li v-for="lang in langs" :key="lang.id">{{ lang.name }}</li>
          </ul>
        </b-col>
        <b-col md="5" cols="12">
          <ul>
            <h3>Framework</h3>
            <li v-for="framework in frameworks" :key="framework.id">{{ framework.name }}</li>
          </ul>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { name: 'PHP' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'ACCESS VBA' }
      ],
      frameworks: [
        { name: 'Laravel' },
        { name: 'CodeIgniter' },
        { name: 'Bootstrap' },
      ]
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
.content {
  padding-top: 10px;
}
</style>