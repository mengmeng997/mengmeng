<!--
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2022-03-23 18:02:12
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2022-03-23 18:04:24
-->
<template>
  <div class="werp">
    <navBar />
    <div class="content">
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import navBar from "/src/components/navBar/navBar.vue";
export default {
  components: {
    navBar,
  },
  name: "Home",
  setup() {
    //这是vue3早期的写法 没直接在script标签上setup，
    //ref响应式对象
    const msg = ref("我乌鱼子");
    // 如果要定义多个可以使用reactive
    const state = reactive({
      size: 36,
      color: "red",
    });
    // 定义一个方法
    const increment = () => {
      state.size++;
    };
    //注意：如果不是直接在script上setup则把需要return出去
    return {
      msg,
      increment,
      ...toRefs(state), //...是es6的运算符
    };
  },
};
</script>
<style lang="scss"  scoped>
.werp{
  width: 750px;
  height: 1000px;
  // background-color: #f74344;
}
.content {
  width: 100%;
  height: 540px;
  background-image: url("../../assets/home/top.png");
  background-size: 750px 540px;
  background-position: 0 center;
  background-repeat: no-repeat;
  margin-top: 46px;
}
</style>
