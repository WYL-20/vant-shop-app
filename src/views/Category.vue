<template>
  <div class="category">
    <van-tree-select
      :items="items"
      :main-active-index.sync="activeIndex"
      @click-item="itemClicked"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: '家用电器',
          children: [
            {
              text: '电脑',
              id: 1
            },
            {
              text: '冰箱',
              id: 2
            }
          ]
        },
        {
          text: '服装',
          children: [
            {
              text: '男装',
              id: 3
            },
            {
              text: '女装',
              id: 4
            }
          ]
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    itemClicked (data) {
      this.$router.push('/goods_list?id=' + data.id + '&keywords=' + data.text)
    }
  }
}
</script>

<style>
  .category .location,.category .message {
    margin-top: 15px;
  }
</style>
