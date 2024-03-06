<script setup>
import { ref } from "vue";
const text = ref("不同組件呼叫function  方法二");
let change = function () {
  text.value = "不同組件呼叫function  Way2";
};

defineProps(["newcolor", "BGcolor"]);

const toEMIT= defineEmits(["update2"]);
const updateSUBTITLE=function(){
  toEMIT("update2")
};
</script>
<template>
  <main
    :style="
  {color:newcolor , backgroundColor:BGcolor}"
  >
    <div @click="change">{{ text }}</div>
    <button @click="updateSUBTITLE">改變副標題B</button>
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
