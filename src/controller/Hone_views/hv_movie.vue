<template>
  <div id="HvMovie">
     <div class="movies">
       <div class="puLine_title">{{datas.title}} {{datas.count}}</div>
       <waterfall class='waterfall clearfix' :line-gap="200" :watch="datas.subjects" :single-max-width='200' :align='Align' >
          <!-- each component is wrapped by a waterfall slot -->
          <waterfall-slot class='water'
            v-for="(item, index) in datas.subjects"
            :width="120"
            :height="180"
            :order="index"
            :key="item.id"
          >
          <div class="iitem" :title="item.title">
            <div class="img" :style='{"background":"url("+item.images.small+") no-repeat center"}'> </div>
            <div class="info">
              <span class="name">{{item.title}}</span>
              <div class="dataLine">
                  <span class="data">上映日期 : {{item.year}}</span>
                  <a class="det" :href='item.alt'>详情</a>
              </div>
            </div>
          </div>
          </waterfall-slot>
        </waterfall>
     </div>
     <div class="movies">
       <div class="puLine_title">{{datas2.title}}-- 找到{{datas2.count}}个</div>
       <waterfall class='waterfall clearfix' :line-gap="200" :watch="datas2.subjects" :single-max-width='200' :align='Align' >
          <!-- each component is wrapped by a waterfall slot -->
          <waterfall-slot class='water'
            v-for="(item, index) in datas2.subjects"
            :width="120"
            :height="180"
            :order="index"
            :key="item.id"
          >
          <div class="iitem" :title="item.title">
            <div class="img" :style='{"background":"url("+item.images.small+") no-repeat center"}'> </div>
            <div class="info">
              <span class="name">{{item.title}}</span>
              <div class="dataLine">
                  <span class="data">上映日期 : {{item.year}}</span>
                  <a class="det" :href='item.alt'>详情</a>
              </div>
            </div>
          </div>
          </waterfall-slot>
        </waterfall>
     </div>
  </div>
</template>
<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'HvMovie',
  data() {
    return {
      datas: '',
      datas2: '',
      Align:"center",
      Interval:'20px'
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  methods: {
    ...mapActions({
      getMovieInfo: 'getMovieInfo'
    }),
  },
  mounted() {
    let _this = this;
    this.getMovieInfo([{ 'codes': 1 }, function(res) {
      console.log(res);
      _this.datas=res;
    }])

    this.getMovieInfo([{ 'codes': 2 }, function(res) {
      console.log(res);
      _this.datas2=res;
    }])
  },
}

</script>
<style lang='scss' scoped>
</style>
