<template>
  <div id="app">
     <div class="notdata_div">
        <img :src="notdata_url" alt="">
        <span class='massfont'></span>
     </div>
  </div>
</template>
<script>
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'App',
  data() {
    return {
       notdata_url:'./static/images/notdata.png',
    }
  },
  methods: {
  
  },
  mounted() {

  },
}

</script>
<style lang='scss' scoped>


</style>
