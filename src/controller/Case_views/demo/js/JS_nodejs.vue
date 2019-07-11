<template>
  <div id="JS_nodejs" class="DocWarp">
    <div class="InnerDocWarp">
      <div class='h1'>$ 基础知识</div>
      <pre class="docbody">
        <span class="content">
          <span class="h2">(1) node线程</span>
          Nodejs和Js一样单线程、单进程
          采用非阻塞异步交互 单线程非阻塞事件驱动
        </span>
      </pre>
      <div class='h1'>$ crypto 加密模块</div>
      <pre class="docbody">
         <span class="content">单项散列,只有加密方法没有解密方法,除非暴力破解(网上解密的都是一些常用的词有记录下来的库而已)
         const crypto = require('crpyto'); //引入模块

         let sha1obj = crypto.creatHash('sha1'); //sha1方式加密
         let md5obj = crypto.creatHash('md5'); //md5方式加密

         md5obj.update("123");
         md5obj.update("456");
         console.log(md5obj.digest("hex")) //以十六进制方式打印出123456 MD5加密结果结果 e10adc3949ba59abbe56e057f20f883e
         </span>
     </pre>
     <div class='h1'>$ 进程与线程</div>
      <pre class="docbody">
         区别:进程拥有独立的执行、存储空间,而同一个进程内所有线程共享一套空间代码
         <span class="h2">(1) 进程</span>
         <span class="content">
            一个程序中一般有多个进程
            所有进程中一般有一个主进程,主进程结束程序就结束了

            多进程特点:成本高(慢)、安全(进程间隔离)、进程间通信麻烦、写代码简单(数据隔离)
         </span>
         <span class="h2">(2) 线程</span>
         <span class="content">
            一个进程中包含多个线程
            一般第一个开起来的叫主线程

            多线程特点:成本低(快)、相等安全低、线程间通信容易、写代码复杂(数据交错)
         </span>
     </pre>
     <div class='h1'>$ 域名解析</div>
      <pre class="docbody">
         <span class="h2">(1) DNS</span>
         <span class="content">
            作用 : 当用户输入网址时候第一步先找DNS解析出对应IP地址才有后面的请求等操作
            const dns = require('dns');

            dns.resolve('baidu.com',(err,res)=>{
                if(err){
                    console.log("解析失败")
                }else{
                    console.log(res); //对应IP地址
                }
            })
         </span>
     </pre>
     
      <span class="h2"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "JS_DataInter",
  data() {
    return {};
  },
  methods: {},
  mounted() {
  }
};
</script>

<style lang="scss" scoped>

</style>