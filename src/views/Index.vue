<template>
  <div class="index">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
      v-for="(item, index) in swipes"
      :key="index"
      >
        <van-image :src="item.image"></van-image>
      </van-swipe-item>
    </van-swipe>
    <!-- 分类列表 -->
    <van-grid>
      <van-grid-item
      v-for="(item, index) in categories"
      :key="index"
      :text="item.cat_name"
       />
    </van-grid>

    <van-list
    finished-text="我是有底线的~"
    v-model="loading"
    :finished="finished"
    @load="loadGoods"
    >
      <!-- 可以滚动的商品列表 -->
      <!-- 使用 icon 插槽自定义图标位置的内容
      1. 删除原icon属性
      2. 把单标签改成双标签
      3. 在双标签中间写自定义的内容
      4. 把内容使用 slot 指定要放到哪个插槽中
      -->
      <van-grid :column-num="2">
        <van-grid-item v-for="(item, index) in goods" :key="index">
        <!-- 把这个图片放到 icon 这个插槽的位置 （图标所在的位置） -->
        <van-image slot="icon" :src="item.image"></van-image>
        <!-- 使用 text 插槽自定义文字部分的内容 -->
        <div slot="text">
          <div class="goods_name">{{item.goods_name}}</div>
          <div class="price">￥{{item.price}}</div>
          <van-button size="small" type="warning">加入购物车</van-button>
        </div>
        </van-grid-item>
      </van-grid>
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false, // 是否正中加载中，如果是true 就不能再触发加载事件了
      finished: false, // 是否所有数据已经全部加载完，刚开始必须设置 false 否则无法再加载
      swipes: [], // 轮播图
      categories: [], // 保存分类
      goods: [], // 保存所有的商品
      page: 1, // 当前的页数
      per_page: 10 // 每页条数
    }
  },
  created () {
    this.$http.get('/main_ad_images').then(res => {
      this.swipes = res.data.data
    })

    this.$http.get('/index_categories').then(res => {
      this.categories = res.data.data
    })

    // this.$http.get(`/index_goods?page=${this.page}&per_page=${this.per_page}`).then(res => {
    //   this.goods = res.data.data
    // })
  },
  methods: {
    // 在滚动到底时触发
    loadGoods () {
      // 调用接口取下一页数据
      this.$http.get(`/index_goods?page=${this.page}&per_page=${this.per_page}`).then(res => {
        // 把返回的数据合并到原来的数据上（合并数组）
        this.goods.push(...res.data.data)
        // 设置为已经加载完
        this.loading = false

        // 判断是否已经50条了
        if (this.goods.length >= 50) {
          // 标记为已经没有更多 数据了，禁止加载事件
          this.finished = true
        } else {
          // 先把页码+1
          this.page++
        }
      })
    }
  }
}
</script>

<style>
  .index .price {
    color: red;
    font-size: 14px;
    margin: 5px 0;
    font-weight: bold;
  }
</style>
