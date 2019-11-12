<template>
  <div class="order">
    <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar
        title="我的订单"
        left-arrow
        @click-left="$router.back()"
      />
    </van-sticky>

    <!-- 订单分类 -->
    <van-tabs v-model="active">
      <van-tab title="待发货"></van-tab>
      <van-tab title="待评价"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="已关闭"></van-tab>
    </van-tabs>

    <!-- 订单列表 -->
    <van-panel title="标题" desc="描述信息" status="状态">
      <div slot="header">
        XXXXXX 店铺~~
      </div>
      <van-row>
        <van-col>
          <van-image src="https://img13.360buyimg.com/da/s1180x940_jfs/t1/80237/35/15141/93070/5dc904b0E32853db1/159c15286a8dfe0d.jpg.webp"></van-image>
        </van-col>
      </van-row>
      <div slot="footer">
        <van-button>去评价</van-button>
        <van-button>再次购买</van-button>
      </div>
    </van-panel>
  </div>
</template>

<style>
  .order {
    background-color: #000;
  }
</style>
