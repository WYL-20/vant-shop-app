<template>
  <div id="app">
    <router-view/>
    <!-- 底部导航条 -->
    <van-tabbar :route="true">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" :info="5" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/me" icon="setting-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
  #app {
    padding-bottom: 110px;
  }
</style>
