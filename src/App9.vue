<script setup>
import { ref } from "vue";
const gender = ref(null);
const genders = ref();
const fruits = ref([]);

const content = ref("");
const clearcontent = function () {
  content.value = "";
};

const interests = ref([]);
const color=ref(null);
const colors=ref("");
</script>
<template>
  <nav>Class9</nav>
  <main>
    <div>單選</div>
    男<input type="radio" value="male" v-model="gender" /> 女<input
      type="radio"
      value="female"
      v-model="gender"
    />
    <div>選擇的性別：{{ gender }}</div>
  </main>
  <main>
    <div>多選</div>
    蘋果<input type="checkbox" value="apple" v-model="fruits" /> 香蕉<input
      type="checkbox"
      value="banana"
      v-model="fruits"
    />
    草莓<input type="checkbox" value="strawberry" v-model="fruits" />
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
  <main>
    <h3>單行輸入框</h3>
    <input type="text" v-model="content" />
    <div>輸入的文字為： {{ content }}</div>
    <button @click="clearcontent">清空輸入內容</button>
  </main>
  <main>
    <h3>多選框</h3>
    角色扮演<input type="checkbox" v-model="interests" value="角色扮演" />
    即時策略<input type="checkbox" v-model="interests" value="即時策略" />
    動作遊戲<input type="checkbox" v-model="interests" value="動作遊戲" />
    <div>喜歡的遊戲為(陣列顯示)： {{ interests }}</div>
    <div>喜歡的遊戲為(for顯示)： 
      <ul>
        <li v-for="interests in interests"> {{ interests }}</li>
      </ul>
    </div>
  </main>
  <main>
    <h3>單選框</h3>

    紅色<input type="radio" v-model="color" value="red" />
    綠色<input type="radio" v-model="color" value="green" />
    
    <div :class="color">喜歡的color： {{ color }}</div>
    
  </main>
  <main>
    <h3>下拉式</h3>

    <select v-model="colors">
      <option value="">===請選擇===</option>
      <option value="red">紅</option>
      <option value="green">綠</option>
    </select>
    
    <div :class="colors">喜歡的color： {{ colors }}</div>
    
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
.red{
  color:red;
}
.green{
  color:green;
}
</style>
