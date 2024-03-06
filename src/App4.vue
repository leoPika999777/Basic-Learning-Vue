<script setup>
let message = "Hello Vue";
let message2 = "<u>Hello Vue</u>"; //加上底線
let name = "content";

let checked=true;
</script>
<template>
  <nav>Class4</nav>
  <main>{{ message }}</main>
  <main>{{ message.toLowerCase() }}</main>
  <main v-html="message2"></main>
  <main v-html="message2.toUpperCase()"></main>
  <div v-bind:class="name">操作標籤屬性</div>
  <div :class="name">操作標籤屬性簡化寫法</div>

  <div v-bind:class="checked?'dark':'light'">操作標籤屬性</div>
</template>
<style scoped>
nav{
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}

main {
  background-color: lightblue;
  margin-top: 5px;
}

.content {
  color: blue;
}

.dark{
    color:white;
    background-color: darkred;
}
.light{
    color:black;
    background-color: lightcoral;
}
</style>
