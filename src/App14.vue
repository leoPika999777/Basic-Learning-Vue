<script setup>
//https://cwpeng.github.io/live-records-samples/data/reviews.json

import { onMounted, ref } from "vue";
import ProductPage from "./App13.vue";
import ReviewPage from "./ReviewPage.vue";

let page = ref("product");
//記錄一個page的響應式狀態  用來決定要看哪一個內容 product or review 預設product

let change=function(clickPage){
  page.value=clickPage;
};
</script>

<template>
  <nav>
    <span :class="page === 'product' ? 'current' : ''"
    @click="change('product')"
    >產品資料</span>
    <span :class="page === 'review' ? 'current' : ''"
    @click="change('review')"
    >評論訊息</span>
  </nav>
  <main>
    <ProductPage v-if="page==='product'"></ProductPage>
    <ReviewPage v-if="page==='review'"></ReviewPage>
  </main>
</template>

<style scoped>
nav {
  font-size: 20px;
}
nav > span {
  margin-right: 10px;
}
nav > span.current {
  font-weight: bold;
}
</style>
