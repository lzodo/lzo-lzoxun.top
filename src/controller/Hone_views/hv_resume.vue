<template>
  <div id="HvResume" class="HR Hv_ChildInd">
    <div class="HR_cen CiMain">
      <div class="HR_left Ci_left">
         <div class="Hl_name">
           <div class="namepy">[zhòng xūn]</div>
           <div class="namefont">仲 勋<span>(一介的代码搬运工)</span></div>
         </div>
         <div class="Hl_jianjie">
              <p class="everyPhase">仲勋,男,汉族，1994年6月，福建南平人，2016年9月毕业于福州职业技术学院，计算机应用技术专业，于大二无意间接触web前端行业，开始精心专研究.</p>
              <p class="everyPhase">期间由于刚接触想要学到精髓异常艰难，于是接二连三找到了网上多久培训机构与网上学习网站坚持进修，其中他觉得<a href='javascript:;'>《传智播客》</a><a href='javascript:;'>《腾讯课堂》</a><a href='javascript:;'>《慕课网》</a><a href='javascript:;'>《百度传课》</a><a href='javascript:;'>《妙味课堂》</a><a href='javascript:;'>《潭州学院》</a>等等机构课程内容比较丰富，所以也在这些斯身上去了好些时间，最后终于以web方向毕业设计作品完成学业.</p>
              <p class="everyPhase">但实际上是对于他来说搬运工之路才刚刚开始。</p>
              <p class="everyPhase">几年下，搬运工也接连入过房产公司，长乐布管，车位管家，辉和科技等公司，完成了好几个项目..........</p>
         </div>
         <div class="Hl_workjl">
          <el-table :data="tableData5" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="网站名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="网站地址">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="时间">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="所用技术">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="工作内容">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                  <el-form-item label="地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="时间"
              prop="id">
            </el-table-column>
            <el-table-column
              label="公司"
              prop="name">
            </el-table-column>
            <el-table-column
              label="工作内容"
              prop="desc">
            </el-table-column>
          </el-table>
         </div>
         
      </div>
      <div class="Ci_right">
        <div class="Ci_right_card">
           <div class="cardphoto">
              <img src="/static/images/photo.jpg" width="100%" />
           </div>
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
  name: 'App',
  data() {
    return {
        tableData5: [{
          id: '2016年1月',
          name: '福建福家房产股份有限公司',
          desc: '公司自己的网站,房源 租赁等',
          address: '安淡-->台万-->马尾',
          shop: 'http://www.99fujia.com/',
          shopId: 'javascript ps jQuery ajax'
        }, {
          id: '2016年7月',
          name: '长乐座视布管',
          desc: '公司自己的网站,布料生意商城',
          address: '仓万',
          shop: '忘记了',
          shopId: '加 Vue'
        }, {
          id: '2017年5月',
          name: '车位管家科技',
          desc: '停车业务',
          address: '台江海峡电子商务基地',
          shop: '公众号开发',
          shopId: '好多好多'
        }]
    }
  },
  methods: {

  },
  mounted() {

  },
}

</script>
<style lang='scss' scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
