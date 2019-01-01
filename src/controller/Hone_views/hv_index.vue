<template>
  <div id="HvIndex">
    <div class='Hi_fixHead'>
      <ul class="list">
        <li class="items first"><span></span></li>
        <li class="items active">首页</li>
        <li v-show='$store.state.admin' class="items">技术</li>
        <li v-show='$store.state.admin' class="items">创意</li>
      </ul>
      <div class="right">
        <mallki className="mallki-text" text="进入我的github博客" href='https://lzoxun.github.io'></mallki>
      </div>
    </div>
    <div class="Hi_binner">
      <div class="Hi_img" :style="{'background': 'url('+bannerpic+') no-repeat center','background-size':'cover'}">
        <div ref='Hi_banfont' class="font"></div>
      </div>
      <sticky className="Hi_sticky" :zIndex='999' :stickyTop='flextop'>
        <ul class="sti_ul">
          <li ref='sy' class="sti_ul_li active" @click="handleGoto('/HvChildVindex')">首页</li>
          <li v-show='$store.state.admin' ref='gz' class="sti_ul_li" @click="handleGoto('/HvWorks')">方式/方法</li>
          <li v-show='$store.state.admin' ref='js' class="sti_ul_li" @click="handleGoto('/HvSkill')">工作简历</li>
          <li ref='dy' class="sti_ul_li" @click="handleGoto('/HvMovie')">电影</li>
          <li ref='gyxg' class="sti_ul_li" @click="handleGoto('/HvResume')">关于勋戈</li>
        </ul>
      </sticky>
    </div>
    <transition :name="transitionName" :duration="400">
      <router-view class='child-view' name='HvViews2'></router-view>
    </transition>
    <el-tooltip placement="top" content="回到顶部">
      <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50"></back-to-top>
    </el-tooltip>
  </div>
</template>
<script>
import {Tool} from '../../utilities'
import Sticky from '@/components/Sticky'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'
import BackToTop from '@/components/BackToTop'

import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'HvIndex',
  watch: {
    '$route'(to, from) {
      if (from.fullPath != '/') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  },
  data() {
    return {
      bannerpic:'/static/images/banner.jpg',
      flextop: 56,
      transitionName: 'slide-left',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色 The background color of the button
      }
    }
  },
  components: { Sticky, PanThumb, Mallki, BackToTop },
  methods: {
    ...mapActions({}),
    handleGoto(type) {
      this.$router.push({
        path: type,
      });
    },
    getCity(){
      let _this=this;
      Tool.getLatLong(function(longlat){
        if(longlat){
          _this.$store.state.isPosition = true;
          // 使用百度地图JS API
          // let point = new BMap.Point(longlat.long,longlat.lat);   
          // let geoc = new BMap.Geocoder();
          // geoc.getLocation(point, function(rs){
          //   let addComp = rs.addressComponents;
          //   console.log('您所在城市：'+addComp.city);
          // });
        }else{
          _this.$store.state.isPosition = false;
        }
      });
    },
    resetPage() {
      let _this = this;
      _this.setClass('.sti_ul_li');
      $('.sti_ul_li').click(function() {
        _this.setClass($(this));
      })
      switch (this.$store.state.thisRouter) {
        case '/':
          _this.setClass(_this.$refs.sy);
          break;
        case '/HvChildVindex':
          _this.setClass(_this.$refs.sy);
          break;
        case '/HvMovie':
          _this.setClass(_this.$refs.dy);
          break;
        case '/HvResume':
          _this.setClass(_this.$refs.gyxg);
          break;
        case '/HvWorks':
          _this.setClass(_this.$refs.gz);
          break;
      }

    },
    setClass(el) {
      $(el).addClass('active').siblings('li').removeClass('active');
    }
  },
  mounted() {
    let _this = this;
    let banpics = ['/static/images/banner.jpg','/static/images/banner2.jpg','/static/images/banner3.jpg'];
    let banpicCont = 0;
    document.onselectstart = function(){
        event.returnValue = false;
    }
    setInterval(function(){
      banpicCont++;
      if(banpicCont==banpics.length){
        banpicCont = 0;
      }
      _this.bannerpic = banpics[banpicCont];
    },12000)
    Tool.littleChar('2018年，是很不好的一年，这年结束了，不好也就结束了',this.$refs.Hi_banfont,150);
    this.resetPage()
    this.getCity();
  },
}

</script>
<style lang='scss' scoped>
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

</style>
