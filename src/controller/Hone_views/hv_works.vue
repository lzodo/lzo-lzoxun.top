<template>
  <div id="HvWorks">
    <div class="HW_cen">
      <div class="HW_rightCen">
          <textarea class="getTokenStyle">localStorage.setItem('loginInfoJson', JSON.stringify({'token': '{{token}} '}))</textarea>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from 'md5'

import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      token: ''
    }
  },
  methods: {
    ...mapActions({
      getToken: 'getToken',
    }),

  },
  mounted() {
    let _this = this;
    
    // this.getToken(function(res) {
    //   _this.token = res.data.result.token;
    // })
  },
}

</script>
<style lang='scss' scoped>
.HW_cen{
  width: 100%;
  padding: 20px 40px;
  box-shadow: 0 1px 6px #ddd;
  display: flex;
  .HW_rightCen{
    flex:1;
    background:#fff;
    padding: 10px;
  }
}
.getTokenStyle{
  width: 100%;
  height: 130px;
  // border-radius: 7px;
  border:1px solid #ccc;
  padding: 10px;

}
</style>
