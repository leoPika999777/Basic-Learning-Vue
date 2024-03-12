<script setup>
//https://cwpeng.github.io/live-records-samples/data/products.json

import { onMounted, ref } from "vue";
import List from "./List.vue"
let products = ref(null); //一開始是空的 還沒抓到資料的意思

//組建掛載之後 會呼叫onMounted，開始呼叫fetch 串接後端資料
onMounted(async function () {
  let response = await fetch(
    "https://cwpeng.github.io/live-records-samples/data/products.json"
  );

  let data = await response.json();
  console.log(data);

  //data放哪？ 放在響應式網站裡面
  products.value = data;
});
</script>

<template>
  <div class="headline">產品資料列表</div>
  <div v-if="products === null">資料載入in</div>
  <List v-else :products="products"></List>

</template>

<style scoped>
.headline{
font-size: 30px;
font-weight: bold;
}

</style>



