<template>
  <div id="app">
    <router-view/>

    <van-tabbar :route="true">
      <van-tabbar-item to="/" icon="home-o">商城</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/me" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
  #app {
    padding-bottom: 100px;
  }
</style>
