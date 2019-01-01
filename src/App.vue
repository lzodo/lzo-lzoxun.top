<template>
  <div id="app">
    <transition :name="transitionName" :duration="400">
      <router-view class='child-view'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {  
    '$route' (to, from ) {
      if(from.fullPath != '/'){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  },
  data(){
      return {
        transitionName: 'slide-left'
      }
  }
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%; 
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
