<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  position: relative;
  overflow-x: hidden;
  font-size: 24rem;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 98rem;
  max-height: 115rem;
  max-width: 64rem;
  margin: 0 auto;
  /*background: url(/gold/static/img/bg.2abc21f.jpg) no-repeat 50%;*/
  background-size: cover;
  overflow: hidden;
}
</style>
