import Mock from 'mockjs'

Mock.mock(/http:\/\/localhost:9999\/api\/v1\/index_goods\?page=\d+&per_page=\d+/, 'get', {
  'ok': 1,
  'data|10': [{
    'id|+1': 1,
    'goods_name': '@ctitle',
    'price': '@integer(10,9999)',
    'image': '@dataImage(130x130)'
  }]
})
