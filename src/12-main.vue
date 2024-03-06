<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
const text = ref("網站內容");
let change = function () {
  text.value = "New網站內容";
};

defineProps(["newcolor", "BGcolor"]);

onUpdated(function () {
  console.log("組建更新完成");
});

//製作一個 Counter 數數的功能
//做到每一秒鐘+1

let counter = ref(0);

//設定一個scheduleID 來代表 設定排程這個動作
let scheduleID;

//hook的方式
//在組件掛載的時候，設定每秒鐘+1的排程
onMounted(function () {
  console.log("組件載入完成");
  //將scheduleID 來代表 設定排程  每秒+1這個動作
  scheduleID = window.setInterval(function () {
    console.log("每隔一秒鐘數字會 + 1");
    counter.value = counter.value + 1;
  }, 1000);
});

//hook的方式
//在組件卸載的時候，設定清除 設定的排程
onUnmounted(function () {
  console.log("組建卸載完成");
  //清除排程 清除scheduleID
  window.clearInterval(scheduleID);
});
</script>
<template>
  <main :style="{ color: newcolor, backgroundColor: BGcolor }">
    <div>{{ counter }}</div>
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
