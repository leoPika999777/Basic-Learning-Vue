<script setup>
import { ref } from "vue";
const gender=ref(null);
const genders=ref();

const fruits=ref([]);

const text = ref("預設文字");
</script>
<template>
  <nav>Class9</nav>
  <main>
    <div>單選</div>
    男<input type="radio" value="male" v-model="gender">
    女<input type="radio" value="female" v-model="gender">
    <div>選擇的性別：{{ gender }}</div>
  </main>
  <main>
    <div>多選</div>
    蘋果<input type="checkbox" value="apple" v-model="fruits">
    香蕉<input type="checkbox" value="banana" v-model="fruits">
    草莓<input type="checkbox" value="strawberry" v-model="fruits">
    <div>選擇的水果：{{ fruits }}</div>
  </main>
  <main>
    <div>下拉</div>
  <select v-model="genders">
    <option value="">===請選擇===</option>
    <option value="boy">男</option>
    <option value="girl">女</option>
  </select>
  <div>選擇的性別：{{ genders }}</div>
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
