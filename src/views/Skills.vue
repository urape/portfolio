<template>
    <b-container class="box">
      <h1>Skills</h1>
      <b-row class="content">
        <b-col md="4" cols="12">
          <ul id="lang1">
            <h3>Lang</h3>
            <li v-for="lang in langs" :key="lang.id">{{ lang.name }}</li>
          </ul>
        </b-col>
        <b-col md="4" cols="12">
          <ul>
            <h3>Framework</h3>
            <li v-for="framework in frameworks" :key="framework.id">{{ framework.name }}</li>
          </ul>
        </b-col>
        <b-col md="4" cols="12">
          <ul>
            <h3>Other</h3>
            <li v-for="other in others" :key="other.id">{{ other.name }}</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'MySQL' }
      ],
      frameworks: [
        { name: 'Laravel' },
        { name: 'CodeIgniter' },
        { name: 'Bootstrap' },
      ],
      others: [
        { name: 'Git' },
        { name: 'ACCESS VBA' }
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