<script setup>
//呼叫defineProps  定義我們接收的屬性名稱title
defineProps(["title", "subtitleA", "subtitleB"]);
</script>
<template>
  <nav>
    <div>{{ title }}</div>
    <div>{{ subtitleA }}</div>
    <div>{{ subtitleB }}</div>
  </nav>
</template>
<style scoped>
nav {
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}
</style>
