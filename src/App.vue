<template>
  <div id="app">
    <TodoList />
  </div>
  <div id="app">
    <router-link to="/todo">To-Do List</router-link>
    <router-view></router-view>
  </div>
</template>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
