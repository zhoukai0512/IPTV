<template>
  <div class="personal">
    <van-nav-bar left-arrow>
      <i slot="left" class="iconfont icon-arrowLeft" @click="$router.back()"></i>
      <span slot="title" class="text">修改资料</span>
    </van-nav-bar>
    <van-cell title="头像">
      <van-image class="avatar" fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-cell>
    <van-cell title="昵称" value="abc" is-link />
    <van-cell title="性别" value="男" is-link />
    <van-cell title="生日" value="2019-9-27" is-link />
    <van-cell title="所在地" value="湖南长沙" is-link />
    <van-cell title="签名" is-link />
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  watch: {
  },
  computed: {
  },
  props: {
  }
}
</script>

<style scoped lang="less">
.personal {
  .van-nav-bar {
    background-color: #232323;
    .text {
      color: #fff;
      display: block;
      position: absolute;
      left: 120px;
      top: 25px;
    }
    .icon-arrowLeft {
      font-size: 50px;
      font-weight: 700;
      color: #fff;
    }
  }
  .avatar {
    width: 60px;
    height: 60px;
  }
}
</style>
