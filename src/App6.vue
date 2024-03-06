<script setup>
let title = "title";

let handler = function () {
  console.log("Click");
};

let mouseoverHandler = function () {
  console.log("Mouse Over");
};
</script>
<template>
  <nav>Class6</nav>
  <div v-on:click="handler">請點擊 並且去看console log</div>
  <div @click="handler" @mouseover="mouseoverHandler">
    請點擊 或滑鼠經過 並且去看console log
  </div>
  <div v-on:click.once="handler">請點擊 並且去看console log =>只會觸發一次</div>
  <div>
    <a href="https:yahoo.com.tw" >點擊後可以前往網頁</a>
  </div>
  <div>
    <a href="https:yahoo.com.tw"  v-on:click.prevent="handler">點擊後無法前往網頁(停止預設行為)</a>
  </div>

  <div :class="title">範例</div>
  <main>
    <button @click="handler" @mousemove="mouseoverHandler">按鈕</button>
    <a href="https:yahoo.com.tw"  v-on:click.prevent="handler">點擊後無法前往yahoo(停止預設行為)</a>
  </main>
</template>
<style scoped>
nav {
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}
.title {
  background-color: lightblue;
  margin-top: 5px;
}
</style>
