<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Header />
    <div class="container">
      <div>
        <small
          >A small todo application developed in Vue.js & Vuex. Using
          non-persistent Json Placeholder API.
        </small>
      </div>
      <AddTodo />
      <TodoFilter />
      <div>
        <small class="text-muted">
          *Double click to complete the todo
        </small>
      </div>
      <Todos />
    </div>
    <Loader />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Todos from "./components/Totos";
import AddTodo from "./components/AddTodo";
import Loader from "./components/Loader";
import TodoFilter from "./components/TodoFilter";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Todos,
    AddTodo,
    Loader,
    TodoFilter,
    Header,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
