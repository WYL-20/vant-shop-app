<template>
  <div class="order-confirm">
    <van-sticky>
      <van-nav-bar
      title="填写订单"
      left-arrow
      @click-left="$router.back()" />
    </van-sticky>

    <van-cell
    is-link
    to="/addresses"
    >
      <div slot="title">
        <div>
          <van-tag size="medium" type="danger">默认</van-tag>
          &nbsp;
          <van-tag size="medium" type="primary">家</van-tag>
          江苏省宿迁市沭阳县沐城街道
        </div>
        <div class="address">城市花园城市花园城市花园城市花园城市花园城市花园</div>
      </div>
      <div slot="label">
        吴英雷 136****9467
      </div>
    </van-cell>

    <van-card
      v-for="(item, index) in 8" :key="index"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />

    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<style>
  .order-confirm .address {
    font-size: 16px;
    font-weight: bold;
  }
</style>
