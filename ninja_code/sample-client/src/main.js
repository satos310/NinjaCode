import Vue from 'vue'
import App from './App.vue'

// bootstrap-vueからBootstrapVue, IconPluginをインポートする
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// BoorstrapとBoostrapVueのCSSファイルをインポート
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// BoostrapVueをプロジェクト全体で利用できるようにする
Vue.use(Bootstrap)
// BootstrapVueアイコンコンポーネントプラグインの使用
Vue.use(IconPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
