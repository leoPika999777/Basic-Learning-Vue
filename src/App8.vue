<script setup>
import { ref } from "vue";

const text = ref("預設文字");
</script>
<template>
  <nav>Class8</nav>
  <main>
    <input type="text" v-model="text" />
    <div>輸入文字: {{ text }}</div>
  </main>

</template>
<style scoped>
nav {
  background-color: rgb(231, 97, 15);
  margin: 5px;
  font-size: 36px;
}
.title {
  margin-top: 5px;
  background-color: blanchedalmond;
}
.newtitle {
  font-weight: bold;
  color: darkcyan;
}

.highlight {
  color: red;
}
</style>
