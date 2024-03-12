<script setup>
//呼叫defineProps  定義我們接收的屬性名稱title
defineProps(["title", "subtitleA", "subtitleB"]);
</script>
<template>
  <nav>
    <div>{{ title }}</div>
    <div class="subtitleA" >{{ subtitleA }}</div>
    <div class="subtitleB" >{{ subtitleB }}</div>
  </nav>
</template>
<style scoped>
nav {
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}
.subtitleA{
  color:white;
  font-size: 50px;
  background-color: rgb(62, 15, 231);
}
.subtitleB{
  color:white;
  font-size: 50px;
  background-color: rgb(2, 54, 31);
}
</style>
