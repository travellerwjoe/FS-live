<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin: 0;
    height: 100%;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: sub;
  }
  
  .icon-small {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
  
  .icon,
  .icon-small {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    display: inline-block;
  }
  
  .color-main {
    color: #2F8162!important
  }
  
  .color-red {
    color: #f00
  }
  
  .color-grey {
    color: #999!important
  }
  
  .bg-main {
    background: #2F8162;
  }
</style>