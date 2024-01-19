<template>
  <div id="app">
    <PageHeader />    <!-- PageHeader.vueを表示 -->

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <PageFooter />    <!-- PageFooter.vueを表示 -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PageHeader from "./components/modules/PageHeader";   // PageHeader.vueをインポート
import PageFooter from "./components/modules/PageFooter";   // PageFooter.vueをインポート

export default {
  name: 'App',
  components: {
    HelloWorld,
    PageHeader,    // compornentsにPageHeaderを追加する
    PageFooter,    // compornentsにPageFooterを追加する
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
