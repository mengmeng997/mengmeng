
<template>

  <div class="werp">

  </div>

</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";

//注意：如果不是直接在script上setup则把需要return出去
</script>
<style lang="scss"  scoped>
.werp {
  width: 750px;
  // height: 1000px;
  background-color: #f74344;
}
.top {
  width: 100%;
  height: 540px;
  background-image: url("../../assets/home/top.png");
  background-size: 750px 540px;
  background-position: 0 center;
  background-repeat: no-repeat;
}
.content {
  width: 700px;
  padding: 9px 25px 25px;
}
.title {
  margin: 28px auto 9px;
  width: 409px;
  height: 83px;
  background-image: url("../../assets/home/title.png");
  background-size: 409px 83px;
  background-position: 0 center;
  background-repeat: no-repeat;
}
.ticket {
  width: 709px;
  height: 220px;
  background-image: url("../../assets/home/ticket.png");
  background-size: 709px 220px;
  background-position: 0 center;
  background-repeat: no-repeat;
}
.explain {
  width: 699px;
  height: 378px;
  background-image: url("../../assets/home/explain.png");
  background-size: 699px 378px;
  background-position: 0 center;
  background-repeat: no-repeat;
  overflow: hidden;
  .explain_content {
    width: 699px;
    height: 214px;
    margin-top: 112px;
    display: flex;
    justify-content: space-around;
  }
  .explain_msg {
    width: 130px;
    height: 214px;
    .pay {
      width: 130px;
      height: 130px;

      background-size: 130px 130px;
      background-position: 0 center;
      background-repeat: no-repeat;
    }
    .one_bg {
      background-image: url("../../assets/home/pay.png");
    }
    .two_bg {
      background-image: url("../../assets/home/coupon.png");
    }
    .three_bg {
      background-image: url("../../assets/home/paysucces.png");
    }
    .explain_msg_text {
      margin: 12px auto;
      width: 130px;
      height: 72px;
      font-size: 26px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: #7c2805;
      line-height: 36px;
    }
  }

  .yjt {
    width: 16px;
    height: 33px;
    margin-top: 42px;
    background-image: url("../../assets/home/yjt.png");
    background-size: 16px 33px;
    background-position: 0 center;
    background-repeat: no-repeat;
  }
}

.rule {
  width: 699px;
  height: 349px;
  background-image: url("../../assets/home/rule.png");
  background-size: 699px 349px;
  background-position: 0 center;
  background-repeat: no-repeat;
  overflow: hidden;
  .rule_content {
    width: 639px;
    height: 249px;
    margin: 84px 30px 0;

    P {
      margin: 16px 0;
      font-size: 26px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #7c2805;
      background-size: 30px 30px;
      background-position: 0 center;
      background-repeat: no-repeat;
      padding-left: 46px;
    }
  }
}
.rule_content P:nth-child(1) {
  background-image: url("../../assets/home/1.png");
}
.rule_content P:nth-child(2) {
  background-image: url("../../assets/home/2.png");
}
.rule_content P:nth-child(3) {
  background-image: url("../../assets/home/3.png");
}
.rule_content P:nth-child(4) {
  background-image: url("../../assets/home/4.png");
}

.text {
  width: 698px;
  // height: 56px;
  background: linear-gradient(360deg, #c91718, #e62c2d 51%, #ce1a1b);
  border-radius: 8px;

  // line-height: 56px;
  display: flex;
  justify-content: space-around;
  .text_msg {
    padding: 10px 0;
    width: 620px;
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffc385;
    line-height: 36px;
  }
  .show {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text_btn {
    width: 20px;
    height: 20px;
    margin-top: 18px;

    background-size: 20px 20px;
    background-position: 0 center;
    background-repeat: no-repeat;
  }
  .btn_open {
    background-image: url("../../assets/home/jt.png");
  }
  .btn_close {
    background-image: url("../../assets/home/sjt.png");
  }
}
</style>
