<template>
  <div class="goods-detail">
    <van-sticky>
      <van-nav-bar
        left-arrow
        @click-left="$router.back()"
      >
        <van-tabs slot="title" v-model="active">
          <van-tab title="商品"></van-tab>
          <van-tab title="详情"></van-tab>
          <van-tab title="评价"></van-tab>
        </van-tabs>
      </van-nav-bar>
    </van-sticky>

    <div class="goods-info" v-if="active==0">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>

      <div class="container">
        <div class="title">
          2015冬季新款韩版加厚中长款小鹿毛呢大衣女系带加厚羊毛呢外套
        </div>
        <div class="price">
          ￥324
        </div>

        <van-cell-group>
          <van-cell
          icon="star-o"
          title="已选"
          value="红色，4G" />
          <van-cell
          icon="location-o"
          title="送至"
          value="江苏省宿迁市沭阳县传智专修学院18级全栈1班" />
        </van-cell-group>
      </div>
    </div>
    <div class="goods-detail" v-else-if="active==1">
      <van-tabs :border="false">
        <van-tab title="商品介绍">
          <van-image v-for="(item, index) in 20" :key="index" src="https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"></van-image>
        </van-tab>
        <van-tab title="规格参数" class="spec-table">
          <van-row v-for="(item, index) in 10" :key="index">
            <van-col span="8">工艺</van-col>
            <van-col span="16">水洗</van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </div>
    <div class="goods-comment" v-else>
      <van-panel v-for="(item, index) in 10" :key="index">
        <div slot="header">
          <van-row slot="header">
            <van-col span="12">
              <van-image
              width="30"
              round
              src="https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"></van-image>
            </van-col>
            <van-col span="12">
              jd_324r09u23s
            </van-col>
          </van-row>
          <van-row>
            <van-col span="12">
              <van-rate size="12px" />
            </van-col>
            <van-col span="12">
              2019-10-02
            </van-col>
          </van-row>
        </div>

        <div class="content">
          服务态度很好，穿了几天很满意，下小雨时真的淋不湿，衣服面料和样式均不错，还保暖，这天气穿着正合适。
        </div>
        <van-row slot="footer">
          <van-col span="12">
            黑色，180/XL
          </van-col>
          <van-col span="12">
            <van-icon name="good-job-o" />
          </van-col>
        </van-row>
      </van-panel>
    </div>

    <van-sku
      v-model="showSku"
      :sku="goods.sku"
      :goods="goods.goods"
      :goods-id="goods.goodsId"
      :initial-sku="goods.initialSku"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showSku=true" />
      <van-goods-action-button type="danger" text="立即购买" @click="showSku=true" />
    </van-goods-action>

  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      showSku: true,
      goods: {
        id: 31,
        sku: {
          tree: [
            {
              k: '颜色',
              v: [
                {
                  id: '1216', // skuValueId：规格值 id
                  name: '红色', // skuValueName：规格值名称
                  imgUrl: 'https://img.yzcdn.cn/2.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                  previewImgUrl: 'https://img.yzcdn.cn/2.jpg' // 用于预览显示的规格类目图片
                },
                {
                  id: '1215',
                  name: '蓝色',
                  imgUrl: 'https://img.yzcdn.cn/2.jpg',
                  previewImgUrl: 'https://img.yzcdn.cn/2.jpg'
                }
              ],
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            },
            {
              k: '尺寸',
              v: [
                {
                  id: '3334', // skuValueId：规格值 id
                  name: 'XL', // skuValueName：规格值名称
                  imgUrl: 'https://img.yzcdn.cn/2.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                  previewImgUrl: 'https://img.yzcdn.cn/2.jpg' // 用于预览显示的规格类目图片
                },
                {
                  id: '3335',
                  name: 'XXL',
                  imgUrl: 'https://img.yzcdn.cn/2.jpg',
                  previewImgUrl: 'https://img.yzcdn.cn/2.jpg'
                }
              ],
              k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
          ],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [
            {
              id: 2259, // skuId，下单时后端需要
              price: 100, // 价格（单位分）
              s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '3334', // 规格类目 k_s 为 s2 的对应规格值 id
              stock_num: 110 // 当前 sku 组合对应的库存
            },
            {
              id: 4123, // skuId，下单时后端需要
              price: 321, // 价格（单位分）
              s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '3335', // 规格类目 k_s 为 s2 的对应规格值 id
              stock_num: 110 // 当前 sku 组合对应的库存
            },
            {
              id: 2259, // skuId，下单时后端需要
              price: 2343, // 价格（单位分）
              s1: '1216', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '3334', // 规格类目 k_s 为 s2 的对应规格值 id
              stock_num: 110 // 当前 sku 组合对应的库存
            },
            {
              id: 4123, // skuId，下单时后端需要
              price: 223, // 价格（单位分）
              s1: '1216', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '3335', // 规格类目 k_s 为 s2 的对应规格值 id
              stock_num: 110 // 当前 sku 组合对应的库存
            }
          ],
          price: '1.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          hide_stock: false // 是否隐藏剩余库存
        },
        initialSku: {
          // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
          // 值：skuValueId（规格值 id）
          s1: '1216',
          s2: '3335',
          // 初始选中数量
          selectedNum: 3
        },
        goods: {
          // 商品标题
          title: '测试商品',
          // 默认商品 sku 缩略图
          picture: 'https://img.yzcdn.cn/2.jpg'
        }
      }
    }
  },
  methods: {
    onBuyClicked (skuData) {
      console.log(skuData)
    },
    onAddCartClicked (skuData) {
      console.log(skuData)
    }
  }
}
</script>

<style>
  .goods-detail+.van-tabbar {
    display: none !important;
  }
  .goods-detail .title {
    font-size: 18px;
  }
  .goods-detail .price {
    color: #ff605f;
    padding: 10px 0 10px 0;
  }
  .goods-detail .van-swipe {
    height: 300px;
    background-color: #f00;
  }
  .goods-detail .top-btn {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    padding: 5px 0 0 5px;
  }
  .goods-detail .top-btn .van-button {
    opacity: .5;
  }
  .goods-detail .spec-table {
    padding: 20px;
  }
  .goods-detail .spec-table .van-col {
    color: #999;
    padding: 10px;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
  }
  .goods-detail .spec-table .van-col:nth-child(even) {
    border-right: 1px solid #eee;
  }
  .goods-detail .spec-table .van-row:last-child {
    border-bottom: 1px solid #eee;
  }
  .goods-detail .goods-comment {
    padding: 20px;
  }
  .goods-detail .goods-comment .content {
    padding: 10px 0;
  }
</style>
