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

      <input
        class="input"
        v-model="newCategory"
        @keyup.enter="addCategory"
        placeholder="Tambahkan kategori"
      />

      <button class="add-button" @click="addTodoCategory">Tambah</button>
    </div>

    <div class="task-list">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Centang</th>
            <th class="px-4 py-2">Tugas</th>
            <th class="px-4 py-2">Kategori</th>
            <th class="px-4 py-2">Edit</th>
            <th class="px-4 py-2">Edit</th>
            <th class="px-4 py-2">Hapus</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in combinedList" :key="index">
            <td class="px-4 py-2">
              <input
                type="checkbox"
                v-model="item.completed"
                class="checkbox"
              />
            </td>
            <td class="px-4 py-2">
              <span
                :class="{ 'completed': item.completed, 'editing': index === editingTodoIndex }"
                class="todo-text"
              >
                <span v-if="index !== editingTodoIndex">{{ item.text }}</span>
                <input
                  v-else
                  v-model="editedTodoText"
                  @keyup.enter="saveEditedTodo(index)"
                  @blur="saveEditedTodo(index)"
                  class="edit-input"
                />
              </span>
            </td>
              <td class="px-4 py-2">
              <span
                :class="{ 'completed': item.completed, 'editing': index === editingCategoryIndex }"
                class="category-text"
              >
                <span v-if="index !== editingCategoryIndex">{{ item.category }}</span>
                <input
                  v-else
                  v-model="editedCategoryText"
                  @keyup.enter="saveEditedCategory(index)"
                  @blur="saveEditedCategory(index)"
                  class="edit-input"
                />
              </span>
            </td>
            <td class="px-4 py-2">
              <button class="edit-button" @click="editTodo(index)">Edit</button>
            </td>
             <td class="px-4 py-2">
              <button class="edit-button" @click="editCategory(index)">Edit</button>
            </td>
            <td class="px-4 py-2">
              <button class="remove-button" @click="removeItem(index)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
/* Gaya untuk tabel */
.table-auto {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table-auto th,
.table-auto td {
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  text-align: left;
}

.table-auto th {
  background-color: #f2f2f2;
  font-weight: bold;
}

/* Gaya untuk checkbox */
.checkbox {
  margin: 0;
}

/* Gaya untuk teks tugas dan kategori */
.todo-text,
.category-text {
  display: inline-block;
  width: 100%;
  position: relative;
}

.todo-text input,
.category-text input {
  display: block;
  width: 100%;
  padding: 4px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

/* Gaya untuk tombol Edit dan Hapus */
.edit-button,
.remove-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-right: 5px;
}

.edit-button:hover,
.remove-button:hover {
  background-color: #357abd;
}

/* Gaya untuk teks yang selesai */
.completed {
  text-decoration: line-through;
  color: #888;
}

/* Gaya untuk mode editing */
.editing {
  background-color: #f0f0f0;
}

.edit-input {
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 4px;
  width: 100%;
}

/* Gaya untuk judul */
.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

/* Gaya untuk input-container */
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

/* Gaya untuk task-list */
.task-list {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}
</style>

<script>
export default {
  data() {
  return {
    newTodo: "",
    newCategory: "",
    todos: [],
    kategori: [],
    editingTodoIndex: -1,
    editedTodoText: "",
    editingCategoryIndex: -1,
    editedCategoryText: "",
  };
},

computed: {
    combinedList() {
      
      const combined = [];
      for (let i = 0; i < Math.max(this.todos.length, this.kategori.length); i++) {
        combined.push({
          text: this.todos[i] ? this.todos[i].text : "",
          completed: this.todos[i] ? this.todos[i].completed : false,
          category: this.kategori[i] ? this.kategori[i].text : "",
        });
      }
      return combined;
    },
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = "";
      }
    },

    addCategory() {
      if (this.newCategory.trim() !== "") {
        this.kategori.push({ text: this.newCategory, completed: false });
        this.newCategory = "";
      }
    },

    addTodoCategory(){
      this.addTodo();
      this.addCategory();
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(index) {
      this.editingTodoIndex = index;
      this.editedTodoText = this.todos[index].text;
    },
    saveEditedTodo(index) {
      if (this.editedTodoText.trim() !== "") {
        this.todos[index].text = this.editedTodoText;
        this.editingTodoIndex = -1;
      }
    },

    removeCategory(index){
    this.kategori.splice(index, 1);
    },

    editCategory(index) {
      this.editingCategoryIndex = index;
      this.editedCategoryText = this.kategori[index].text;
    },

    saveEditedCategory(index) {
      if (this.editedCategoryText.trim() !== "") {
        this.kategori[index].text = this.editedCategoryText;
        this.editingCategoryIndex = -1;
      }
    },

    removeItem(){
    this.removeTodo();
    this.removeCategory();
    },

    editItem(){
    this.editCategory();
    this.editTodo();
    },

    saveEditedItem(){
    this.saveEditedCategory();
    this.saveEditedTodo();
    }
  },
  
};
</script>
