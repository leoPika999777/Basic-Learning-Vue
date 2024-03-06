<script setup>
let level = 0;

let topics = ["HTML", "Css", "JS", "Vue"];

let level1 = 0;

let topic1 = { html: "HTML", css: "Css", js: "JS", vue: "Vue" };

let title = "title";

let data = [1, 2, 3];

let data1 = ["A", "B", "C"];

let data2 = { x: 3, y: 5 };
</script>
<template>
    <nav>Class5</nav>
  <div :class="title">使用v-for:</div>
  <div v-for="n in data">Item{{ n }}</div>
  <div :class="title">使用v-for="(變數,變數)in 陣列"語法:</div>
  <div v-for="(text, index) in data1">{{ index }}-{{ text }}</div>
  <div :class="title">使用v-for="(變數,變數)in 物件"語法:</div>
  <div v-for="(value, key) in data2">物件屬性{{ key }}為{{ value }}</div>

  <div :class="title">使用v-if, v-else-if, v-else, v-for :</div>
  <div v-if="level === 3">大神</div>
  <div v-else-if="level === 2">資深</div>
  <div v-else-if="level === 1">中階</div>
  <div v-else>
    <div>入門</div>
    <ul>
      <li v-for="(name, index) in topics">{{ index }}-{{ name }}</li>
    </ul>
  </div>

  <div :class="title">使用物件陣列 v-for :</div>
  <div v-if="level1 === 3">大神</div>
  <div v-else-if="level1 === 2">資深</div>
  <div v-else-if="level1 === 1">中階</div>
  <div v-else>
    <div>入門</div>
    <ul>
      <li v-for="(value, key) in topic1">{{ key }}-{{ value }}</li>
    </ul>
  </div>
</template>
<style scoped>
nav{
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}
.title {
  background-color: lightblue;
  margin-top: 5px;
}
</style>
