<script setup>
defineProps(["products"])</script>

<template>
  <div class="list">
    <p class="load">資料已載入</p>
    <div class="product" v-for="products in products">
      <div class="name">{{ products.name }}</div>
      <div class="description">{{ products.description }}</div>
      <div class="price">單價：{{ products.price }}</div>
    </div>
  </div>
</template>

<style scoped>
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
