<template>
  <div id="CvIndex">
    <div class='Hi_fixHead'>
      <ul class="list">
        <li class="items first"><span></span></li>
        <li class="items" @click="handleGoto('/')">首页</li>
        <li class="items active">案例</li>
        <!--         <li v-show='$store.state.admin' class="items">创意</li> -->
      </ul>
      <div class="right">
       <span class="iconfont" style="font-size: 20px; color:#4dd9d5;">&#xe718;</span>
       <mallki className="mallki-text" text="进入我的github" href='https://lzoxun.github.io'></mallki>
      </div>
    </div>
    <div class="CvMian">
      <sticky className="Hi_sticky" :zIndex='999' :stickyTop='flextop'>
        <div class="Hi_warp">
          <ul class="sti_ul CaseType">
            <li class="sti_ul_li" v-for='item in menuData'>{{item.name}}</li>
          </ul>
          <div ref ='det_menu' class="det_menu" :style="{height:MenuHeight + 'px'}" v-show='isShowMenu'>
            <div class="det_menu_cen">
              <span class="title"><span class="iconfont" style="margin-right: 5px;">&#xe602;</span>{{thisMenuName}}</span>
              <ul class="nav_menu">
                <li class="item" v-for="(item, index) in detMenuData" :key="item.id" v-if="detMenuType == 'All Codes'?true:item.type ==detMenuType">
                  <div class="item_cen" :title="item.name" @click='GoModo($event,item.link)'>
                    <div class="clickobj"></div>
                    <div class="mark"><img src="/static/images/loading.gif"/></div>
                    <div class="img" :style='{"background":"url("+item.url+") center center / contain no-repeat"}'> </div>
                    <div class="name">
                      {{item.name}}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </sticky>
      <!-- <transition :duration="0"> -->
      <div class="CvViews3">
        <router-view class='child-view' name='CvViews3'></router-view>
      </div>
    <!--   </transition> -->
    </div>
  </div>
</template>
<script>
import { Tool } from '../../utilities'
import Mallki from '@/components/TextHoverEffect/Mallki'
import Sticky from '@/components/Sticky'

import { code_menu_data } from '../../data';

import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'CvIndex',
  watch: {

  },
  data() {
    return {
      input1: '',
      flextop: 56,
      Align:"center",
      MenuHeight: window.innerHeight - 100,
      thisMenuName: '',
      transitionName: 'slide-left',
      isShowMenu:false,
      menuData: [
        {
          name:'All Codes'
        },
        {
          name: 'Javascript And Vue'
        },
        {
          name: 'Css To Css3'
        },
        {
          name: 'Html To Html5'
        },
        {
          name: 'Python'
        },
        {
          name: 'Other'
        },
      ],
      detMenuType:'All Codes',
      detMenuData:code_menu_data.Data,
    }
  },
  components: {
    Mallki,
    Sticky,
  },
  methods: {
    GoModo(e,type){
      let that = this;
      $(e.target).siblings('.mark').show();
      that.handleGoto(type);
      setTimeout(function(){
        that.isShowMenu = false;
        $('.item_cen .mark').hide();
      },500)
    },
    handleGoto(type) {
      this.$router.push({
        path: type,
      });
    },
  },
  mounted() {
    let that = this;
  
    $('.CaseType li').click(function(e) {
      $(e.target).addClass('active').siblings('li').removeClass('active');
    })

    if(this.$route.path == '/CvIndex'){
      console.log(this.$route.path)
      that.isShowMenu = true;
    }

    this.thisMenuName = this.menuData[0].name;
    $('.CaseType li').first().addClass('active');

    $('.CaseType li').click(function(e, index) {
      that.thisMenuName = that.menuData[$(e.target).index()].name;
      that.isShowMenu = true;
      that.detMenuType = that.thisMenuName;
      let typeCount = 0;

      if(that.detMenuType == 'All Codes'){
         $('.nav_menu .item').css('width','100%');
      }else{
        that.detMenuData.map(function(item){
          if(item.type == that.detMenuType){
             typeCount ++;
          }
        })
        if(typeCount < 2){
            $('.nav_menu .item').css('width','180px');
        }else{
            $('.nav_menu .item').css('width','100%');
        }
      }
    })
  },
}

</script>
<style lang='scss' scoped>
.CvMian {
  padding-top: 56px;
  .CaseMain {
    padding: 10px;
  }
}

</style>
