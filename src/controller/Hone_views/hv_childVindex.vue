<template>
  <div id="Hv_ChildInd" class="Hv_ChildInd clearfix">
    <div class="CiMain">
      <div class="Ci_left">
        <ul class="Ci_list">
          <li class="Ci_item" v-for="item in Hv_Datas_play">
            <a class="goBlogLink" :href="item.url" target='_blank'>
                <div class="g_left" :style="{'background': 'url('+item.images+') center center no-repeat','background-size':'cover'}"></div>
                <div class="g_right">
                   <div class="g_title">{{item.title}}</div>
                   <div class="g_cen">
                     <span class="tags">标签: {{item.tags}}</span>
                     <span class="time">时间: {{item.time | sliptTime}}</span>
                   </div>
                   <div class="g_description">{{item.desc}}</div>
                </div>
              </a>
          </li>
          <li class="Ci_item2" v-show='!Hv_Datas_play.length'></li>
        </ul>
      </div>
      <div class="Ci_right">
        <!-- 搜索 -->
        <el-form :model="demo" :rules="demoRules">
          <el-form-item prop="title">
            <md-input v-model="demo.title" @input='searchkey' icon="search" name="title" placeholder="输入标题">标题</md-input>
          </el-form-item>
        </el-form>
        <!-- +++++++++++++++++++++ -->
        <!--  管理员登入 -->
        <el-card class="box-card adminset">
          <div slot="header" class="clearfix head">
            <span @click="goAdmin" class="loginin"> <span class="iconfont" style="float: left;margin-right:2px;font-size:16px;">&#xe601;</span>管理员登入</span>
            <span v-show="$store.state.admin" @click="loginoutfn" class="loginout">退出</span>
          </div>
          <div style="" v-show="true" class="cen">
            <el-button disabled v-if='!$store.state.admin'>这里有秘密</el-button>
            <div class="newAtc" @click='isShowAtc=true' v-if='$store.state.admin'>新建文章</div>
          </div>
        </el-card>
        <!--有道翻译-->
        <div class="Ci_translate">
          <div class="TL_title">快捷翻译:</div>
          <div class="TL_cent">
            <input class="TL_enter" v-model='yd.ydValue' placeholder="请输入要翻译的词" />
            <div class="TL_show" v-show="yd.res.translation[0]">{{yd.res.translation[0]}}</div>
            <div class="TL_save" @click='setYoudao'>翻译</div>
          </div>
        </div>
        <!--名片-->
        <div class="Ci_right_card">
          <div class="name">勋</div>
          <div class="sm">职业 : web前端开发</div>
          <div class="sm">地区 : 福建-福州</div>
          <div class="sm">Email : 869664233@qq.com</div>
          <ul class="card_ico clearfix">
            <li> 
                <div class="ico_pop">
                  <div class="wx_pop"><img src="/static/images/qqcode.jpg"></div>
                </div>
                <a href="tencent://message/?uin=869664233&Site=QQ交谈&Menu=yes" target="blank" slot="reference">
                  <span class="usico" :style="{'background': 'url(./static/images/icoqq.png) center center no-repeat','background-size':'cover'}"></span>
                </a>
            </li>
            <li>
                <div class="ico_pop">
                  <div class="wx_pop"><img src="/static/images/wxcode.jpg"></div>
                </div>
                <a href="javascript:;">
                  <span class="usico" :style="{'background': 'url(./static/images/icowx.png) center center no-repeat','background-size':'cover'}"></span>
                </a>
            </li>
            <li>
                <a href="https://github.com/liaozhongxun">
                  <span class="usico" :style="{'background': 'url(./static/images/icogithub.png) center center no-repeat','background-size':'cover'}"></span>
                </a>
            </li>
<!--             <li>
                <a href="javascript:;">
                  <span class="usico" :style="{'background': 'url(/static/images/icogithub.png) center center no-repeat','background-size':'cover'}"></span>
                </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div refs="AddAtc" class="AddAtc_mack" v-show='isShowAtc'>
      <div class="AddAtc_cen">
        <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" size='mini'>
          <el-form-item label="文章标题" prop='title'>
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="文章连接" prop="url">
            <el-input v-model="form.url"></el-input>
          </el-form-item>
          <el-form-item label="图片地址">
            <el-input v-model="form.images"></el-input>
          </el-form-item>
          <el-form-item label="文章标签" prop="tags">
            <el-select v-model="form.tags" placeholder="请选择标签">
              <el-option label="调试" value="调试"></el-option>
              <el-option  label="技术" value="技术"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间" prop='time'>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" v-model="form.time" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="文章描述" prop='desc'>
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="createAtc('ruleForm')" size='mini'>立即创建</el-button>
            <el-button type="primary" @click="resetAtc('ruleForm')" size='mini'>重置</el-button>
            <el-button @click="isShowAtc=false" size='mini'>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import MdInput from '@/components/MDinput'
import md5 from 'md5'
// import { saveAs } from 'file-saver';
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
export default {
  name: 'Hv_ChildInd',
  components: {
    MdInput,
  },
  data() {
    const validate = (rule, value, callback) => {
      // if (value.length !== 6) {
      //   callback(new Error('请输入六个字符'))
      // } else {
      callback()
      // }
    }
    return {
      form: {
        url:'',
        images:'/static/images/default.jpg',
        time:'',
        tags:'',
        title:'',
        desc:'',
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
        ],
        url: [
          { required: true, message: '请输入文章连接', trigger: 'blur' },
        ],
        time:[
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        tags:[
          { required: true, message: '请选择标签', trigger: 'change' }
        ],
        desc:[
          {  required: true, message: '请输入文章描述', trigger: 'blur'}
        ]
      },
      demo: {
        title: ''
      },
      demoRules: {
        title: [{ required: true, trigger: 'change', validator: validate }]
      },
      Hv_Datas_play: [],
      Hv_Datas_play_save: [],
      isShowAtc:false,
      yd:{
        ydValue:'',
        res:{
          translation:[]
        }  
      },
    }
  },
  filters: {
    sliptTime(val) {
      return val.split("T")[0];
    }
  },
  methods: {
    ...mapActions({
      youdaoAPI:'youdaoAPI'
    }),
    setYoudao(){
      let _this = this;
      let Salt = Math.random();
      let ydData ={
        'q':_this.yd.ydValue,
        'salt':Salt,
        'sign':md5('0bb93b5b0493d77f'+_this.yd.ydValue+Salt+'wZDb4XCAtvebTzJ4XxgZuhhFfAYVPUZN')
      }
      this.youdaoAPI([ydData,function(res){
        console.log(res)
        _this.yd.res=res;
      }])
    },
    createAtc(rulesForm) {
        let _this = this;
        this.$refs[rulesForm].validate((valid) => {
          if (valid) {
            // console.log(_this.form)
            // console.log(_this.form.time)
            console.log(_this.form.time)
            _this.Hv_Datas_play.unshift(_this.form);
            localStorage.setItem('LocalStoAtc', JSON.stringify(_this.Hv_Datas_play))
           
            _this.isShowAtc = false;
            _this.resetAtc(rulesForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetAtc(rulesForm){
      this.$refs[rulesForm].resetFields();
    },
    loginoutfn(){
      this.$store.state.admin = false;
      console.log(this.$store.state.admin);
      window.localStorage.setItem("isAdmin",false)
    },
    goAdmin() {
      if (!this.$store.state.admin) {
        this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          console.log(md5(123456))
          if (md5(value) == "e10adc3949ba59abbe56e057f20f883e") {
            this.$store.state.admin = true;
            window.localStorage.setItem("isAdmin", true)
            this.$message({
              type: 'success',
              message: '震惊: 真的是你'
            });
          } else {
            this.$store.state.admin = false;
            this.$message.error('你又淘气了！！！');
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      } else {
        this.$message({
          message: '愤怒 已经给您权限了还想怎样',
          type: 'warning'
        });
      }
    },
    searchkey() {
      let _this = this;
      let sa = [];
       this.Hv_Datas_play_save.map(function(item, i) {
        console.log(item.title.indexOf(_this.demo.title))
        if (item.title.indexOf(_this.demo.title.trim()) != -1) {
          sa.push(item);
        }
      })
      if (sa.length == 0) {
        console.log('hhhhhhhhh')
        this.Hv_Datas_play = [];
      } else {
        this.Hv_Datas_play = sa;
      }
    }
  },
  mounted() {
    let _this = this;
    let LocalStoAtc = JSON.parse(window.localStorage.getItem("LocalStoAtc"));
    // if (window.localStorage.getItem("isAdmin")) {
    //   this.$store.state.admin = true;
    // }
     // localStorage.removeItem('LocalStoAtc')
     // window.localStorage.removeItem("isAdmin")
    if(LocalStoAtc){
       this.Hv_Datas_play = LocalStoAtc;
       this.Hv_Datas_play_save = LocalStoAtc;
    }else{  
       this.Hv_Datas_play = this.$store.state.ArticData;
       this.Hv_Datas_play_save = this.$store.state.ArticData;
    }
  },
}

</script>
<style lang='scss' scoped>
/*侧边栏天气*/
.Ci_translate{
  padding-bottom: 10px;
  .TL_title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #777;
  }
  .TL_cent{
    .TL_enter{
      border: none;

      border-bottom:1px dashed #e2e2e2;
      width: 100%;
      padding: 5px;
    }
    .TL_show{
      //box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1), inset 0px 1px 1px rgba(0, 0, 0, 0.7);
      padding: 5px;
      border-radius: 3px;
      border-bottom:1px solid #e2e2e2;
      margin-top: 5px;
    }
    .TL_save{
      width: 20%;
      background: #EAA25C;
      height: 26px;
      text-align: center;
      color:#fff;
      border-radius: 3px;
      line-height: 26px;
      margin-top: 5px;
      cursor: pointer;
    }
  }
}
</style>
