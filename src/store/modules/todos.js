import Axios from "axios";

const state = {
  todos: [],
  loading: false,
  todoLimits: "",
};

const getters = {
  allTodos: (state) =>
    state.todoLimits !== ""
      ? state.todos.slice(0, parseInt(state.todoLimits))
      : state.todos,
  loader: (state) => state.loading,
};

const actions = {
  async fetchTodos({ commit, state }) {
    commit("setLoading");
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${state.todoLimits}`
    );
    commit("setTodos", res.data);
    commit("setLoading");
  },
  async addTodo({ commit }, title) {
    commit("setLoading");
    const res = await Axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false,
    });
    commit("addNewTodo", res.data);
    commit("setLoading");
  },
  async deleteTodo({ commit }, id) {
    commit("setLoading");
    const res = await Axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (res.status === 200) commit("removeTodo", id);
    commit("setLoading");
  },
  async makeCompleted({ commit }, todo) {
    commit("setLoading");
    await Axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    commit("makeCompleted", todo);
    commit("setLoading");
  },
  async filterTodos({ commit }, limit) {
    commit("setLoading");
    commit("setLimit", limit);
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", res.data);
    commit("setLoading");
  },
};

const mutations = {
  setLoading: (state, show) => (state.loading = show ? show : !state.loading),
  setTodos: (state, todos) => (state.todos = todos),
  addNewTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((t) => t.id !== id)),
  makeCompleted: (state, todo) => {
    state.todos = state.todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
  },
  setLimit: (state, limit) => (state.todoLimits = limit),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
