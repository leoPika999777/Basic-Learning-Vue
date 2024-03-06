<script setup>
import Nav11comp from "./11-Nav.vue"
import main11compA from "./11-1-main.vue"
import main11compB from "./11-2-main.vue"
import { ref } from "vue";
const subtitleA=ref("這是副標題A")

const updatesubtitleA=function(){
  subtitleA.value="New副標題A已轉換"
}

const subtitleB=ref("這是副標題B")

const updatesubtitleB=function(){
  subtitleB.value="New副標題B已轉換"
}



</script>
<template>
  <Nav11comp title="NewClass11"
  :subtitleA="subtitleA"
  :subtitleB="subtitleB"
  ></Nav11comp>
  <div>{{ subtitleA }}</div>
  <main11compA
  newcolor="red"
  BGcolor="lightblue"
  @update="updatesubtitleA"
  ></main11compA>
  <div>{{ subtitleB }}</div>
  <main11compB
  newcolor="white"
  BGcolor="black"
  @update2="updatesubtitleB"
  ></main11compB>

 
</template>

<style scoped>
</style>./11-1-main.vue
