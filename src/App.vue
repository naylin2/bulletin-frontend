<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to=" {name: 'Posts'} ">Posts</router-link>
  </div>
  <router-view/>
</template>

<script>

import Home from './views/Home.vue'
import Posts from './components/Posts/Posts.vue'
export default {
  components: {
    Home,
    Posts,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper{
  width: 60%;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  color: gainsboro;
  text-align: center;
}

#nav a {
  font-size: 22px;
  padding: 20px;
  font-weight: bold;
  text-decoration: none;
  color: gainsboro;
  transition: .2s;
}

#nav a.router-link-exact-active {
  color: #4e84cc;
}

</style>
