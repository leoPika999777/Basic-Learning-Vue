<script setup>
import { ref } from "vue";
const text = ref("Web Content");
let change = function () {
  text.value = "New Web";
};

defineProps(["newcolor", "BGcolor"]);
</script>
<template>
  <main
    :style="
  {color:newcolor , backgroundColor:BGcolor}"
  >
    <div @click="change">{{ text }}</div>
  </main>
</template>
<style scoped>
main {
  background-color: lightgreen;
  font-weight: bold;
}
</style>
./10Nav.vue
