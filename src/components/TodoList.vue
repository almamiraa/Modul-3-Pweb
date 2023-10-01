<template>
  <div class="todo-app">
    <h1 class="title">To-Do List</h1>
    <div class="input-container">
      <input
        class="input"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Tambahkan tugas"
      />
      <button class="add-button" @click="addTodo">Tambah</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <span class="todo-text">{{ todo }}</span>
        <button class="remove-button" @click="removeTodo(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<style>
.todo-app {
  text-align: center;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 5px;
  margin-right: 10px;
}

.add-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.add-button:hover {
  background-color: #555;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.todo-text {
  flex: 1;
}

.remove-button {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.remove-button:hover {
  background-color: #ff473b;
}
</style>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
