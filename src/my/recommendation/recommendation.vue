<template>
  <div class="recommendation">
    <van-nav-bar>
      <div slot="left" class="lefts">
        <div class="dateof">10月29日星期二</div>
        <!-- <br /> -->
        <div class="text">今日推荐</div>
      </div>
      <div slot="right" class="rights">
        <div class="users">
          <div class="textuser">用户XXXX</div>
          <div class="textcole">XXXX积分可兑换</div>
        </div>
        <div class="portrait">
          <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
      </div>
    </van-nav-bar>
    <van-cell>
      <div class="headtitle">大片首映</div>
      <div class="filmtitle">影视剧标题名称</div>
      <div class="exhibit">
        <i class="iconfont icon-tupian"></i>
      </div>
      <div class="introduction">
        <div class="introductiontext">影视剧简介文字或副标题影视剧简介文字或副标题影视剧简介文字或副标题......</div>
        <div class="screen">
          <div class="screenicon">
            <i class="iconfont icon-diannao"></i>
          </div>
          <div class="screentext">投屏播放</div>
        </div>
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'recommendation',
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
.van-nav-bar {
  margin: 30px 0;
  background-color: #f5f7f9;
  height: 104px;
  .lefts {
    height: 104px;
    position: relative;
    .text {
      font-size: 50px;
      color: #101010;
      width: 224px;
      position: absolute;
      left: -15px;
      top: 45px;
      height: 80px;
    }
    .dateof {
      font-size: 24px;
      color: #101010;
      width: 174px;
      height: 34px;
    }
  }
  .rights {
    width: 326px;
    .users {
      width: 216px;
      float: left;
      text-align: right;
      margin-top: 15px;
      margin-right: 10px;
      .textuser {
        font-size: 24px;
      }
      .textcole {
        color: #ff9800;
        font-size: 28px;
      }
    }
    .van-image {
      width: 100px;
      height: 100px;
    }
  }
}
.van-cell {
  margin-left: 30px;
  width: 690px;
  height: 780px;
  border-radius: 25px;
  .headtitle {
    font-size: 12px;
  }
  .filmtitle {
    margin-top: 20px;
    font-size: 56px;
  }
  .exhibit {
    margin-top: 20px;
    text-align: center;
    line-height: 450px;
    height: 450px;
    .icon-tupian {
      font-size: 32px;
    }
  }
  .introduction {
    margin-top: 10px;
    height: 128px;
    position: relative;
    .introductiontext {
      position: absolute;
      bottom: 0;
      width: 436px;
      height: 65px;
      line-height: 32px;
      font-size: 24px;
    }
    .screen {
      position: absolute;
      right: 25px;
      border-radius: 20px;
      width: 128px;
      height: 128px;
      border: 1px solid #000;
      background-color: #eeeeee;
      text-align: center;
      .screenicon {
        height: 78px;
        line-height: 78px;
        .icon-diannao {
          font-size: 48px;
        }
      }
      .screentext {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
}
</style>
