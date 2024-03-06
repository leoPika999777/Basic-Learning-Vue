<script setup>
import Nav from "./12-Nav.vue";
import main12compA from "./12-main.vue";
import { ref } from "vue";
const subtitleA = ref("組件生命週期");

const updatesubtitleA = function () {
  subtitleA.value = "New副標題A已轉換";
};
const visible=ref(true);

const hide=function(){
  visible.value=false;
}
const show=function(){
  visible.value=true;
}
</script>
<template>
  <Nav
    title="NewClass12"
    :subtitleA="subtitleA"
  ></Nav>

  <main12compA
  v-if="visible"
    @update="updatesubtitleA"
  ></main12compA>
  <button @click="hide">隱藏網站內容</button>
  <button @click="show">顯示網站內容</button>
</template>

<style scoped></style>
./11-1-main.vue
