<template>
    <header>
      <nav id="nav">
        <router-link to="/">Top</router-link> |
        <router-link to="/careers">Careers</router-link> |
        <router-link to="/skills">Skills</router-link> |
        <router-link to="/works">Works</router-link>
      </nav>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    margin-bottom: 15px;
    height: 30px;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    font-size: 20px;
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #FFFFFF;
}
</style>