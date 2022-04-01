<!--
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2022-03-23 18:02:12
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2022-03-23 18:04:24
-->
<template>
  <navBar />
  <div class="werp">
    <div class="top" :style="'margin-top:' + state.top + 'px;'"></div>
    <div class="title"></div>
    <div class="content">
      <Ticket :propsData="props1" @openPop="openPop"></Ticket>
      <Ticket :propsData="props2"></Ticket>
      <div class="text" @click="open">
        <P class="text_msg" :class="state.show ? 'show' : ''">
          适用于广场停车，公交停车场，清河公园停车场，欣怡停河公园停河公园停河公园停河公园停河公园停
        </P>
        <div
          class="text_btn"
          :class="state.show ? 'btn_open' : 'btn_close'"
        ></div>
      </div>
      <Ticket :propsData="props3"></Ticket>
      <div class="explain">
        <div class="explain_content">
          <div class="explain_msg">
            <div class="pay one_bg"></div>
            <div class="explain_msg_text">
              <p>车牌缴费</p>
              <p>车费补缴</p>
            </div>
          </div>
          <div class="yjt"></div>
          <div class="explain_msg">
            <div class="pay two_bg"></div>
            <div class="explain_msg_text">
              <p>选择可用</p>
              <p>优惠券</p>
            </div>
          </div>
          <div class="yjt"></div>
          <div class="explain_msg">
            <div class="pay three_bg"></div>
            <div class="explain_msg_text">
              <p>提交订单</p>
              <p>完成支付</p>
            </div>
          </div>
          <!-- <div class="coupon"></div>
        <div class="paysucces"></div> -->
        </div>
      </div>
      <div class="rule">
        <div class="rule_content">
          <P>优惠券不能兑换，不能现金抵扣</P>
          <P>请注意优惠券使用时间，过期无效</P>
          <P>停车优惠券通用版即所有停车场适用，非通用版即制定停车</P>
          <P>如有问题请联系在线客服，0577-61885188</P>
        </div>
      </div>
    </div>
  </div>
  <Pop :popShow="popShow"></Pop>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import NavBar from "/src/components/navBar/navBar.vue";
import Ticket from "/src/components/ticket/ticket.vue";
import Pop from "../coupon/pop.vue";
import { getList } from "../../api/index";
getList({
  current: 1,
  size: 1,
}).then((res) => {
  console.log(res);
});
interface DataType {
  top: number;
  show: boolean;
}
interface propsData {
  pice: number;
  quantity: number;
  title: string;
  date: string;
}
interface popData {
  show: boolean;
}
const popShow = reactive<popData>({
  show: false,
});
const state = reactive<DataType>({
  top: 46,
  show: true,
});
const props1 = reactive<propsData>({
  pice: 8,
  quantity: 202,
  title: "所有停车场通用",
  date: "(06.17-07.17)",
});
const props2 = reactive<propsData>({
  pice: 88,
  quantity: 202,
  title: "规定停车场通用",
  date: "(06.17-07.17)",
});
const props3 = reactive<propsData>({
  pice: 68,
  quantity: 202,
  title: "超市全场（除早餐） 满10减4",
  date: "(06.17-07.17)",
});
// 定义一个方法
const open = () => {
  state.show = !state.show;
};
const openPop = () => {
  popShow.show = true;
};
const getStatusBarHeight = () => {
  let u = navigator.userAgent;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isIOS) {
    state.top = 94;
    // if (screen.height == 812 && screen.width == 375) {
    //   alert(state.top)
    // } else {
    //   alert(state.top)
    // }
  } else {
    state.top = 46;
  }
  console.log(state.top);
};

onMounted(() => {
  getStatusBarHeight();
});

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
