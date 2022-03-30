<template>
  <div>
    <van-nav-bar
    
      left-arrow="true"
      @click-left="onClickLeft"
      fixed="true"
      safe-area-inset-top="ture"
    >
      <template #left>
        <div class="left"></div>
      </template>
      <template #title>
        <div class="title">领取满减优惠券</div>
      </template>
    </van-nav-bar>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { NavBar } from "vant";
export default {
  name: "navBar",
  components: {
    [NavBar.name]: NavBar,
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>
<style scoped>
.left{
  width: 44px;
  height: 44px;
  background-image: url("../../assets/home/fh.png");
  background-size: 44px 44px;
  background-position: 0 center;
  background-repeat: no-repeat;
}
.title{
font-size: 36px;
color: #333333;
font-weight: 500;
}
</style>