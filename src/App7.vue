<script setup>
import { ref } from "vue";

let title = ref("web title");
let handler = function () {
  console.log("Click");
  title.value = "Neeeeewwwww title";
};

let state = ref({
  newtitle: "網站標題",
  className: "newtitle",
});

let handlers = function () {
  console.log("Click");
  state.value.className = "title highlight";
};


</script>
<template>
  <nav>Class7</nav>
  <main>
    <div>{{ title }}</div>

    <button @click="handler">按鈕</button>
  </main>
  <main>
    <div :class="state.className">{{ state.newtitle }}</div>
    <button @click="handlers">按鈕</button>
  </main>
</template>
<style scoped>
nav {
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}
.title {
  margin-top: 5px;
  background-color: blanchedalmond;
}
.newtitle{
  font-weight: bold;
  color: darkcyan;
}

.highlight {
  color: red;
}


</style>
