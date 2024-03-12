<script setup>
//https://cwpeng.github.io/live-records-samples/data/reviews.json

import { onMounted, ref } from "vue";

let reviews = ref(null); //一開始是空的 還沒抓到資料的意思

//組建掛載之後 會呼叫onMounted，開始呼叫fetch 串接後端資料
onMounted(async function () {
  let response = await fetch(
    "https://cwpeng.github.io/live-records-samples/data/reviews.json"
  );

  let data = await response.json();
  console.log(data);

  //data放哪？ 放在響應式網站裡面
  reviews.value = data;
});
</script>

<template>
  <div class="headline">產品資料列表</div>
  <div v-if="reviews === null">資料載入in</div>
  <div v-else >
    <div class="list">
    <p class="load">資料已載入</p>
    <div class="product" v-for="reviews in reviews">
      <div class="name">{{ reviews.name }}</div>
      <div class="description">{{ reviews.message }}</div>
      <div class="price">單價：{{ reviews.star }}</div>
    </div>
  </div>
  </div>

</template>

<style scoped>
.headline{
font-size: 30px;
font-weight: bold;
}
.list {
  line-height: 1.5rem;
}
.product {
  padding: 15px 0px;
  border-bottom: 1px solid blue;
}
.load {
  color: red;
}
.name {
  font-weight: bold;
}

</style>



