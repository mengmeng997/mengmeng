<template>
  <div>
    <div class="ticket">
      <div class="content">
        <div class="price">
          <span>{{ props.propsData.pice }}</span>
          <span>￥</span>
        </div>
        <div class="text">
          <div class="text_top">
            <p>抵价券</p>
            <p>(剩余{{ props.propsData.quantity }}张)</p>
          </div>
          <div class="text_bottom">
            <span>{{ props.propsData.title }}</span>
          </div>
        </div>
        <div class="receive">
          <div class="btn" @click="onClick"></div>
          <div class="date">{{ props.propsData.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";


const props = defineProps({
  propsData: { type: Object, default: {} },
});
const emit = defineEmits(["openPop"]);
const onClick = () => emit("openPop");
</script>
<style lang="scss"  scoped>
.ticket {
  width: 709px;
  height: 220px;
  background-image: url("../../assets/home/ticket.png");
  background-size: 709px 220px;
  background-position: 0 center;
 background-repeat: no-repeat;
  .content {
    padding: 50px 30px;
    display: flex;
    .price {
      width: 140px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      padding: 20px 0;

      color: #ff6a00;
    }
    .price span:nth-child(1) {
      font-weight: 700;
      font-size: 90px;
    }
    .price span:nth-child(2) {
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      font-size: 40px;
    }
    .text {
      width: 230px;
      height: 80px;
      margin-left: 10px;
      .text_top {
        line-height: 40px;
        padding: 20px 0 0 0;
        display: flex;
      }
      .text_top p:nth-child(1) {
        font-size: 32px;
        color: #7c2805;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 550;
      }
      .text_top p:nth-child(2) {
        font-size: 22px;
        color: #ef3132;
        font-weight: 530;
      }
      .text_bottom {
        overflow: hidden;
        margin-top: 6px;
        width: 230px;
        height: 64px;
        opacity: 0.8;
        font-size: 24px;
        font-weight: 400;
        color: #7c2805;
      }
    }
    .receive {
      width: 198px;

      margin-left: 73px;

      .btn {
        width: 198px;
        height: 64px;
        margin-top: 10px;
        background-image: url("../../assets/home/btn.png");
        background-size: 198px 64px;
        background-position: 0 center;
         background-repeat: no-repeat;
      }
      .date {
        margin-top: 7px;
        width: 198px;
        text-align: center !important;
        height: 30px;
        opacity: 0.8;
        font-size: 22px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #fff1c6;
        line-height: 30px;
        letter-spacing: 0.25px;
      }
    }
  }
}
</style>