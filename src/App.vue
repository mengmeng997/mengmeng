<!--
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2022-03-23 16:27:05
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2022-03-23 17:33:45
-->


<template> 
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2a2a2a; 
}
</style>

<script setup lang="ts">
  import {getList} from './api/index'
  getList().then(res=>{
    console.log(11111)
  })
</script>
