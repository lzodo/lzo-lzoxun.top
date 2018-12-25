<template>
  <div id="Hv_ChildInd" class="Hv_ChildInd clearfix">
    <div class="CiMain">
      <div class="Ci_left">
        <ul class="Ci_list">
           <li class="Ci_item" v-for="item in Hv_Datas">{{item}}</li>

        </ul>
      </div>
      <div class="Ci_right">
        <div class="Ci_right_card">
          <div class="name">勋</div>
          <div class="sm">职业 : web前端开发</div>
          <div class="sm">地区 : 福建-福州</div>
          <div class="sm">Email : 869664233@qq.com</div>
          <ul class="card_ico clearfix">
            <li>
              <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="qq:869664233">
                <a href="javascript:;" slot="reference"></a>
              </el-popover>
            </li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
          </ul>
        </div>
      </div>
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
  name: 'Hv_ChildInd',
  data() {
    return {
      Hv_Datas:10
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
