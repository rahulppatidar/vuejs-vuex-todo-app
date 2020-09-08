<template>
  <div class="row">
    <div class="col-12">
      <select v-model="limit" @change="filterTodos(limit)">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="">All</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoFilter",
  data() {
    return {
      limit: "",
    };
  },
  methods: mapActions(["filterTodos"]),
};
</script>
