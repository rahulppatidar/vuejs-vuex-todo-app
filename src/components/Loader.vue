<template>
  <div class="loader" :class="{ display: loader }">
    <div class="spinner-border text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Loader",
  computed: mapGetters(["loader"]),
};
</script>

<style scoped>
.loader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
  background: rgb(255 255 255 / 34%);
  display: none;
}
.display {
  display: flex;
}
</style>
