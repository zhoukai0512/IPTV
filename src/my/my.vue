<template>
  <div class="my">
    <div class="top">
      <div class="portrait" @click="$router.push('/personal')">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
      </div>
      <div class="name">
        <span class="text">妮爸乐爸团</span>
        <span class="text1">绑定机顶盒即可开通VIP</span>
      </div>
      <div class="code">
        <i slot="icon" class="iconfont icon-weibiaoti--"></i>
      </div>
    </div>

    <div class="integral">
      <div class="sde">你有9999积分可兑换</div>
      <van-swipe class="my-swipe" :autoplay="2000" touchable :show-indicators="false" width="240" :lazy-render="true">
        <van-swipe-item v-for="(item, index) in arr" :key="index">
          <span class="title_x">优品影视会有30天</span>
          <br />
          <span class="digital">{{ item }} 积分</span>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="libraries">
      <div class="sde">我的片库</div>
      <van-tabs scrollspy class="tabs" disabled>
        <van-tab v-for="(i, index) in 8" :key="index">
          <div slot="title" class="title_t">已预约</div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="bottom">
      <van-tabs disabled>
        <van-tab v-for="(i, index) in 8" :key="index">
          <div slot="title" class="title_pentagram">
            <span class="pentagram">
              <i class="iconfont icon-wujiaoxing"></i>
            </span>
            <br />
            <span class="control">我的遥控器</span>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      arr: ['1000', '2000', '3000', '4000']
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
.my {
  padding: 40px 30px 0 30px;
  background-color: #eee;
  height: 1200px;
  .top {
    height: 100px;
    width: 100%;
    // background-color: red;
    .portrait {
      float: left;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #49e878;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      float: left;
      display: flex;
      // font-display: column;
      flex-flow: column;
      margin-left: 15px;
      width: 360px;
      height: 100px;
      // background-color: #2e80f7;
      .text {
        top: 5px;
        left: 15px;
        width: 280px;
        height: 40px;
        font-size: 40px;
        color: #000;
        flex: 1;
      }
      .text1 {
        flex: 1;
        padding-top: 15px;
        margin-left: 15px;
        width: 280px;
        height: 40px;
        font-size: 18px;
        color: #f6bd4d;
        // flex: 1;
      }
    }
    .code {
      margin-top: 28px;
      margin-right: 15px;
      float: right;
      width: 48px;
      height: 48px;
      // background-color: pink;
      i {
        text-align: center;
        font-size: 48px;
      }
    }
  }
  .integral {
    border-radius: 30px;
    margin-top: 40px;
    height: 360px;
    background-color: #6c6c6c;
    .my-swipe {
      margin-top: 40px;
      height: 220px !important;
      .van-swipe__track {
        .van-swipe-item {
          width: 440px !important;
          height: 180px !important;
          border-radius: 20px;
          margin: 0 20px;
          background-color: #3b3b3b;
          .digital {
            margin-top: 25px;
            margin-left: 25px;
            color: #ff6800;
            font-size: 68px;
          }
        }
      }
      .title_x {
        margin-left: 25px;
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .sde {
    padding-top: 30px;
    padding-left: 25px;
    font-size: 34px;
    color: #fff;
  }
  .libraries {
    border-radius: 30px;
    margin-top: 40px;
    height: 360px;
    background-color: #6c6c6c;
    .tabs {
      margin-top: 50px;
      padding-right: 30px;
      // height: 180px !important;
      /deep/.van-tabs__wrap {
        height: 180px;
        .van-tabs__nav--complete {
          background-color: #6c6c6c !important;
        }
        .van-tab {
          margin-left: 20px;
          // border: 1px solid #000;
          position: relative;
          width: 128px;
          background-color: #e8e8e8;
          .van-tab__text {
            display: block;
            width: 100%;
            height: 40px;
            background-color: #ff9800;
            position: absolute;
            bottom: 0;
            .title_t {
              text-align: center;
              color: #fff;
            }
          }
        }
      }
    }
    /deep/.van-tabs__line {
      width: 0 !important;
    }
  }
  .bottom {
    margin-top: 65px;
    .van-tabs {
      /deep/.van-tabs__wrap {
        height: 170px;
        .van-tabs__nav--complete {
          background-color: #eeeeee !important;
        }
        .van-tab {
          width: 170px;
          border-radius: 20px;
          margin-left: 20px;
          // border: 1px solid #000;
          background-color: #6c6c6c;
          .title_pentagram {
            width: 170px;
            position: relative;
            top: -25px;
            .pentagram {
              top: 20px;
              left: 40px;
              width: 90px;
              height: 90px;
              display: block;
              border-radius: 50%;
              background-color: #fff;
              position: relative;
              .icon-wujiaoxing {
                position: absolute;
                top: 20px;
                left: 10px;
                font-size: 66px;
              }
            }
            /deep/.control {
              display: block;
              width: 170px;
              text-align: center;
              font-size: 22px !important;
              color: #fff;
              position: absolute;
              bottom: -25px;
            }
          }
        }
        /deep/.van-tabs__line {
          width: 0 !important;
        }
      }
    }
  }
}
</style>
