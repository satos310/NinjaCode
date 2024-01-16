<template>
  <div id="app">
    <PageHeader />    <!-- Header.vueを表示 -->

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageHeader from "./components/modules/PageHeader";   // Header.vueをインポート

export default {
  name: 'App',
  components: {
    HelloWorld,
    PageHeader,    // compornentsにHeaderを追加する
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
