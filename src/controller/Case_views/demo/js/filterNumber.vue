<template>
  <div class="mydemo filterNumber">
    <el-input placeholder="请输入内容" v-model="input1" size='mini' @keyup.native='filterNumber'>
      <template slot="prepend">请输入数字</template>
    </el-input>
    <pre v-highlightjs>
        <code class="highlightjs_warp html">
           @keyup.native='filterNumber'
        </code>
    </pre>
    <pre v-highlightjs>
        <code class="highlightjs_warp javascript">
            //input只输入数字和点
            Vue.prototype.filterNumber = function(e){
               // 通过正则过滤小数点后两位
              if(e.target.value != "" && e.key == '.' && -1 == e.target.value.indexOf('.')){
                //兼容火狐，数字输入框输入点 value 值自动隐藏‘.’，再进行正则会丢失‘.’
                return
              }
              if( e.target.value.toString() !== (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0])) {
                e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
              }
            }
        </code>
    </pre>
  </div>
</template>
<script>

import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'filterNumber',
  watch: {

  },
  data() {
    return {
      input1: '',
    }
  },
  components: {

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
.filterNumber{
  padding: 10px;
}
</style>
