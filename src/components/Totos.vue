<template>
  <div>
    <div class="row todos">
      <div v-for="todo in allTodos" :key="todo.id" class="col-md-4 my-2">
        <div
          @dblclick="makeCompleted(todo)"
          class="todo h-100"
          :class="{ completed: todo.completed }"
        >
          {{ todo.title }}
          <i
            class="fas fa-trash delete"
            size="4x"
            @click="removeTodo(todo.id)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "makeCompleted"]),
    removeTodo(id) {
      if (confirm("Are you sure?")) {
        this.deleteTodo(id);
      }
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>
<style scoped>
.todos {
  max-height: 65vh;
  overflow: auto;
}
.todo {
  background-color: #3db36b;
  border-color: #3db36b;
  color: #fff;
  border-radius: 2px;
  min-height: 100px;
  padding: 1rem;
  position: relative;
  cursor: pointer;
}
.delete {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff;
  /* font-size: 1.5rem; */
  cursor: pointer;
}
.completed {
  background: teal;
  text-decoration: line-through;
}
</style>
