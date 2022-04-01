<template>
  <van-dialog
    style="width:8.34667rem;"
    :show="props.popShow.show"
    :showConfirmButton="false"
  >
    <div class="werp">
      <div class="bg">
        <div class="close" @click="popClose"></div>
        <div class="title"></div>
        <div class="content">
          <div class="msg">
            <div class="msg_title">停车优惠券</div>
            <div class="pieck">
              <p>￥</p>
              <p>8</p>
            </div>
            <div class="prompt">新用户见面礼~</div>
          </div>
        </div>
        <div class="rule_bg">活动规则</div>
        <div class="rule">
          <p>1.优惠券不能兑换，不能现金抵扣</p>
          <p>2.请注意优惠券使用时间，过期无效</p>
          <p>3.停车优惠券通用版即所有停车场适用，非通用版即制定停车</p>
          <p>4.如有问题请联系在线客服，0577-61885188</p>
        </div>
      </div>
    </div>
  </van-dialog>
  <!-- 也支持大驼峰命名 -->
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Dialog } from "vant";
const VanDialog = Dialog.Component;

const props = defineProps({
  popShow: {
    type: Object,
    default: {
      show: false,
    },
  },
});
const popClose = () => (props.popShow.show = false);
</script>
<style lang="scss"   scoped>
.werp {
  width: 626px;
  height: 874px;

  background-image: url("../../assets/home/popbg.png");
  background-size: 100% 874px;
  background-position: 0 center;
  background-repeat: no-repeat;
  .bg {
    width: 626px;
    height: 834px;
    overflow: hidden;
    .close {
      width: 24px;
      height: 24px;
      background-image: url("../../assets/home/close.png");
      background-size: 24px 24px;
      background-position: 0 center;
      background-repeat: no-repeat;
      margin: 28px 0 0 574px;
    }
    .title {
      margin: 0 0 0 19px;
      width: 586px;
      height: 106px;
      background-image: url("../../assets/home/poptitle.png");
      background-size: 586px 106px;
      background-position: 0 center;
      background-repeat: no-repeat;
    }
    .content {
      margin: 0 0 0 18px;
      width: 571px;
      height: 404px;
      background-image: url("../../assets/home/popcontent.png");
      background-size: 571px 404px;
      background-position: 0 center;
      background-repeat: no-repeat;
      overflow: hidden;
      .msg {
        width: 200px;
        height: 404px;
        display: flex;
        flex-direction: column;
        margin: 55px 0 0 200px;
        .msg_title {
          margin: 0 auto;
          width: 160px;
          height: 40px;
          font-size: 32px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: center;
          color: #7c2805;
          line-height: 40px;
        }
        .pieck {
          display: flex;
          margin: 0 auto;
          transform: translateX(-20px);
        }
        .pieck p:nth-child(1) {
          font-size: 40px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: center;
          color: #ff6a00;
          line-height: 40px;
        }
        .pieck p:nth-child(2) {
          font-size: 120px;
          font-family: DINCondensed, DINCondensed-Bold;
          font-weight: 700;
          text-align: center;
          color: #ff6a00;
          line-height: 120px;
        }
        .prompt {
          margin: 0 auto;
          opacity: 0.8;
          font-size: 22px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #8a3512;
          line-height: 30px;
        }
      }
    }
    .rule_bg {
      margin-left: 66px;
      padding-left: 40px;
      background-image: url("../../assets/home/gz.png");
      background-size: 32px 32px;
      background-position: 0 center;
      background-repeat: no-repeat;
      font-size: 30px;
      font-family: PingFangSC, PingFangSC-Medium;

      text-align: left;
      color: #b04732;
      line-height: 32px;
    }
    .rule {
      margin-left: 66px;
      width: 490px;
      height: 252px;

      p {
        margin: 14px 0;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Regular;

        text-align: left;
        color: #b04732;
        line-height: 32px;
      }
    }
  }
}
</style>