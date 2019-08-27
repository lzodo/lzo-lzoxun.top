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

export default {
  name: 'CvIndex',
  watch: {

  },
  data() {
    return {
    }
  },
  methods: {
    handleGoto(type) {
      this.$router.push({
        path: type,
      });
    },
  },
  mounted() {
  },
}

</script>
<style lang='scss' scoped>

</style>
