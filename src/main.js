import Vue from 'vue'
import App from './App.vue'
import router from './router'; // Import index.js

Vue.config.productionTip = false;
vue.use(VueRouter)

// Import komponen untuk route
import TodoList from './components/TodoList.vue'
import HelloWorld from './components/HelloWorld.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/todo', component: TodoList },
    { path: '*', component: NotFound } // Rute ini cocok jika tidak ada rute yang cocok
  ]

new Vue({
  render: (h) => h(App),
  router, // 

}).mount('#app')
