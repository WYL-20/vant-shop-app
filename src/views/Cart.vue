<template>
  <div class="cart">
    <van-nav-bar title="购物车" />
    <!-- 商品列表 -->
    <van-checkbox
    :label-disabled="true"
    v-model="cart.info[item.id].ischk"
    v-for="(item, index) in goods" :key="index"
    >
      <van-card
        :price="item.price"
        :title="item.goods_name"
        :thumb="item.image"
      >
      <!-- 把这个组件放到 num 插槽的位置  -->
      <van-stepper slot="num" v-model="cart.info[item.id].count" />
      <!-- 自定义右下角 -->
      <van-tag type="warning" slot="footer">
        小计：
        ￥{{ (cart.info[item.id].count*item.price).toFixed(2) }}
      </van-tag>
      </van-card>
    </van-checkbox>

    <van-submit-bar
      :price="totalPrice"
      button-text="结算"
    >
      <van-checkbox v-model="chkAll">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span>
    </van-submit-bar>

  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: JSON.parse(localStorage.getItem('cart')), // 购物车数据
      goods: [] // 保存所有的商品信息
    }
  },
  created () {
    // 购物车不为空调用接口
    if (this.cart !== null) {
      // 把商品ID 转成字符串并调用接口
      this.$http.get('/goods?id=' + this.cart.ids.join(',')).then(res => {
        this.goods = res.data.data
      })
    }
  },
  // 计算属性：当一个数据需要计算才能得到时
  computed: {
    // 全选按钮是否是选中状态
    //   说明：默认计算属性是只读的，高级用法：即有 getter 又有 setter
    chkAll: {
      // 当读取值时这个函数调用
      get: function () {
      // 循环所有的商品判断是否都是选中的
      // 说明：使用 for ... in 来循环对象
        for (let i in this.cart.info) {
          if (this.cart.info[i].ischk === false) {
          // 退出函数并返回 false
            return false
          }
        }
        // 如果程序能走出循环到 这里，说明没有 false 所以返回 true
        return true
      },
      // 当修改值 时这个函数调用，参数是新值
      set: function (newValue) {
        // 修改所有商品的勾选状态和当前新值一样
        for (let i in this.cart.info) {
          this.cart.info[i].ischk = newValue
        }
      }
    },
    totalPrice: function () {
      let sum = 0 // 保存总价
      // 循环所有的商品
      this.goods.forEach(v => {
        // 只有勾选的才计算、
        if (this.cart.info[v.id].ischk) {
          sum += v.price * this.cart.info[v.id].count
        }
      })
      // 结果返回（因为合计组件是以分为单元的，所以要转成元）
      return sum * 100
    }
  },
  // 监听器：监听一个数据，当这个数据发生变化时触发一个函数
  //       注意：如果监听的数据是一个对象，那么需要深度监听
  watch: {
    cart: {
      deep: true, // 深度监听（监听对象时）
      handler: function () {
        // 把 cart 写到浏览器中
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    }
  }
}
</script>

<style>
  .cart .van-submit-bar {
    bottom: 50px;
  }
</style>
