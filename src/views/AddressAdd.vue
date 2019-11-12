<template>
  <div class="address-add">
    <van-sticky>
      <van-nav-bar
      title="新建收货地址"
      left-arrow
      @click-left="$router.back()" />
    </van-sticky>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import pca from '../pca'
export default {
  data () {
    return {
      areaList: pca,
      searchResult: []
    }
  },

  methods: {
    onSave () {
      this.$toast('save')
    },
    onDelete () {
      this.$toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>
