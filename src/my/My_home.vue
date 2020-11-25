<template>
  <div class="Myhome">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/television">
        <i slot="icon" class="iconfont icon-dianyingshipin"></i>
        影视
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/video">
        <i slot="icon" class="iconfont icon-duanshipin"></i>
        短视频
      </van-tabbar-item>
      <van-tabbar-item>
        <div class="yellow">
          <i slot="icon" class="iconfont icon-maikefeng1 text"></i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/members">
        <i slot="icon" class="iconfont icon-huiyuan-"></i>
        会员
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/">
        <i slot="icon" class="iconfont icon-ziyuan"></i>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Myhome',
  data () {
    return {
      active: 3
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
.Myhome {
  padding: 0;
  margin: 0;
  .yellow {
    position: relative;
    top: -35px;
    width: 130px;
    height: 130px;
    border-radius: 100%;
    background-color: #ff9800;
  }
  /deep/.text {
    position: relative;
    top: 29px;
    left: 28px;
    font-size: 76px;
    color: #fff;
  }
}
</style>
