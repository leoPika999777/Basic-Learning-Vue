//載入 createApp函式
import { createApp } from "vue";
//載入 跟組件
import App3 from "./App3.vue";
//建立 Vue App3物件
const app=createApp(App3);
//掛載到HTML 標籤底下
app.mount("#app");
