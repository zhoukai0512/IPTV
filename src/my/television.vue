<template>
  <div class="television">
    <van-nav-bar title="标题" right-text="按钮">
      <div slot="left" class="loign">IPTVLOGO</div>
      <div slot="title">
        <van-tabs title-active-color="#FF9800" v-model="active" @rendered="onchange">
          <van-tab ref="ress" title="今日推荐" to="/television"></van-tab>
          <van-tab title="精选" to="/television/selects"></van-tab>
          <van-tab title="今日推荐"></van-tab>
          <van-tab title="今日推荐"></van-tab>
          <van-tab title="今日推荐"></van-tab>
        </van-tabs>
      </div>
      <div slot="right">
        <i class="iconfont icon-erweima"></i>
      </div>
    </van-nav-bar>
    <div class="search">
      <van-search v-model="value" shape="round" right-icon="search" :left-icon="null" show-action @focus="onfocus" @blur="onblur">
        <div slot="label" class="placeholder" v-if="aa">
          <van-swipe style="height: 30px" vertical :autoplay="1500" :show-indicators="false">
            <van-swipe-item>热门影视1111</van-swipe-item>
            <van-swipe-item>热门影视2222</van-swipe-item>
            <van-swipe-item>热门影视3333</van-swipe-item>
            <van-swipe-item>热门影视4444</van-swipe-item>
          </van-swipe>
        </div>
        <div slot="action">
          <i class="iconfont icon-erweima1"></i>
          <span>扫一扫</span>
        </div>
      </van-search>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Television',
  data () {
    return {
      active: null,
      value: '',
      aa: true
    }
  },
  created () {
    this.$router.push('/television')
  },
  mounted () {
  },
  methods: {
    onchange (name) {
      this.active = name
    },
    onfocus () {
      this.aa = false
    },
    onblur () {
      this.aa = true
    }
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
.television {
  .loign {
    width: 120px;
    height: 56px;
    background-color: #939393;
    font-size: 20px;
  }
  /deep/.van-tab--active {
    font-size: 36px !important;
  }
  /deep/.van-tab {
    font-size: 28px;
  }
  /deep/.van-tabs__line {
    width: 100px;
    height: 10px;
    background-color: #ff9800;
  }
  .icon-erweima {
    font-size: 48px;
  }
  .search {
    height: 88px;
    background-color: #ffffff;
    position: relative;
    .van-search {
      width: 506px;
      height: 60px;
      .van-search__content {
        margin-top: 30px;
      }
    }
    .van-search__action {
      position: absolute;
      top: 10px;
      right: 10px;
      .icon-erweima1 {
        font-size: 50px;
        font-weight: 700;
        // margin-right: 25px;
      }
      span {
        margin-left: 35px;
        font-size: 28px;
      }
    }
    .placeholder {
      margin-left: 25px;
      .van-swipe-item {
        font-size: 28px;
        color: #939393;
      }
    }
  }
}
</style>
