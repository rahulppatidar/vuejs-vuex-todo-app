<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="onSubmit()">
        <div class="input-group my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter todo (130 Characters only)"
            aria-label="Todo"
            v-model="todo"
          />
          <div class="input-group-append">
            <button type="submit" class="btn btn-success">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      if (!this.todo || this.todo.trim() === "") return;
      this.addTodo(this.todo.slice(0, 130));
      this.todo = "";
    },
  },
};
</script>
