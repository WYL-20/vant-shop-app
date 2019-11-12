<template>
  <div class="me">
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">

    <van-grid :border="false">
      <van-grid-item to="/order" icon="pending-payment" text="待付款" />
      <van-grid-item to="/order" icon="records" text="待评论" />
      <van-grid-item to="/order" icon="tosend" text="待发货" />
      <van-grid-item to="/order" icon="logistics" text="已发货" />
    </van-grid>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
</template>

<style>
  .me .user-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  .me .user-group {
    margin-bottom: 15px;
  }
  .me .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

  }
  .me .user-links .van-icon {
    display: block;
    font-size: 24px;
  }
</style>
