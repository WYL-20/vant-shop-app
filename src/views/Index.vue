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
    <van-grid :border="false">
      <van-grid-item
      v-for="(item, index) in categories"
      :key="index"
      :text="item.cat_name"
       />
    </van-grid>
    <!-- 商品列表 -->
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
      <van-grid :border="false" :column-num="2">
        <van-grid-item
        :to="'/goods_detail?id='+item.id"
        v-for="(item, index) in goods"
        :key="index">
          <!-- 把这个图片放到 icon 这个插槽的位置 （图标所在的位置） -->
          <van-image slot="icon" :src="item.image"></van-image>
          <!-- 使用 text 插槽自定义文字部分的内容 -->
          <div slot="text">
            <div class="goods_name">{{item.goods_name}}</div>
            <div class="price">￥{{item.price}}</div>
            <van-button
            @click="addToCart(item.id)"
            size="small"
            type="warning">加入购物车</van-button>
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
  },
  methods: {
    // 加入购物车的方法
    addToCart (id) {
      // 先从浏览器中把这个对象取出来，然后转回对象
      let cart = JSON.parse(localStorage.getItem('cart'))
      // 如果购物车是空的，就创建一个新的购物车对象
      if (cart === null) {
        // 创建购物车对象
        cart = {
          ids: [id],
          info: {
            [id]: { // [id]：解析id的值，使用 id 的值做为键
              count: 1,
              ischk: true
            }
          }
        }
      } else {
        // 判断购物车中是否已经有这件商品的ID
        // 如果没有就加入新商品信息，否则把数量+1
        if (cart.ids.indexOf(id) === -1) {
          // 把新的商品的 ID 追回到商品ID 数组中
          cart.ids.push(id)
          // 用户商品 ID 做为下标，保存这件商品的数量和勾选状态
          cart.info[id] = {
            count: 1,
            ischk: true
          }
        } else {
          // 商品数量+1
          cart.info[id].count++
        }
      }
      // 先转成字符串，然后再保存到浏览器中
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    // 在滚动到底时触发
    loadGoods () {
      // 调用接口取下一页数据
      this.$http.get(`/index_goods?page=${this.page}&per_page=${this.per_page}`).then(res => {
        // 设置为已经加载完
        this.loading = false

        if (res.data.data.length <= 0 || this.goods.length >= 50) {
          this.finished = true
          return
        }
        // 把返回的数据合并到原来的数据上（合并数组）
        this.goods = this.goods.concat(res.data.data)

        this.page++
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
