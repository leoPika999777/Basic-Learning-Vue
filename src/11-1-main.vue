<script setup>
import { ref } from "vue";
const text = ref("不同組件呼叫function  方法一");
let change = function () {
  text.value = "不同組件呼叫function  Way1";
};

defineProps(["newcolor", "BGcolor"]);
</script>
<template>
  <main
    :style="
  {color:newcolor , backgroundColor:BGcolor}"
  >
    <div @click="change">{{ text }}</div>
    <button @click="$emit('update')">改變副標題A</button>
  </main>
</template>
<style scoped>
main {
  background-color: lightgreen;
  font-weight: bold;
  padding: 5px;
}
</style>
./10Nav.vue
