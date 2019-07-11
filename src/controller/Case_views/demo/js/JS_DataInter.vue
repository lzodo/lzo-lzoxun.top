<template>
  <div id="JS_DataInter" class="DocWarp">
    <div class="InnerDocWarp">
      <div class='h1'>一、跨域(指的是从一个域名去请求另外一个域名的资源)</div>
      <pre class="docbody">
         <span class="content">(1) 跨域，是因为受到了同源策略<span class="strong">(SOP)</span>的限制，同源策略要求源相同才能正常进行通信，即协议、域名、端口号都完全一致。</span>
         <span class="content">(2) 防止恶意网站随意操作别人的资源</span>
     </pre>
      <div class='h1'>二、http协议</div>
      <pre class="docbody">
         http
            http1.0 一次性连接
            http1.1 保存连接,不需要时在断开
            http2.0(草案)
              1.强制https
              2.自带双向通信
              3.多路复用(一个连接可以传输好多个数据文件)
            http原理
              1.三次握手(发送连接请求、接收服务器反馈如果接受、发送请求  后面就返回数据,断开连接)
              2.发送请求(request 头32k 体到1G)
              3.响应数据(response)
         https(security 安全)
     </pre>
      <div class='h1'>三、数据交互</div>
      <span class="h2">1、表单</span>
      <pre class="docbody">
         1.属性
           action
           enctype   //属性设置 content-type
                       content-type 类型常用的有三种,这东西与后台协商可以自己设置的
                       text/plain  纯文本
                       application/x-www-form-urlencoded  key=val&key=val&...方式提交的数据
                       multipart/form-data 定界符分隔各个数据(文件上传)
           method GET、POST、、、、、、
           name 
           submit按钮
         2.数据提交方法
           GET 数据在URL中
               容量小
               有缓存
               利于分享与收藏
           POST 数据在http request 请求体中
                容量大
                没缓存
         3.校验
            原生JS 调用from 的onsubmit 不满足条件是return false 停止提交
     </pre>
      <span class="h2">2、Ajax</span>
      <pre class="docbody">
         (1) 不用刷新,可以跨域,但是很麻烦
         (2) 单项通信 
         (3) 原生xhr写法
     </pre>
     <pre v-highlightjs>
        <code class="highlightjs_warp javascript">
    function ajax(){
        if(windwo.XMLHttpRequest){ //为了兼容IE6 一般可以直接new XMLHTTPRequest
            var xhr = new XMLHttpRequest();
        }else{
            var xhr = new ActiveXObject("Microsoft.XMLHttp")
        }
        //GET连接
        //xhr.open("GET","1.php?a=12&b=5",true) //连接方式,连接地址,是否异步
        //GET发送
        //xhr.send();

        //POST连接
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');//相当于表单的enctype
        xhr.open("POST","1.php",true) //连接方式,连接地址,是否异步

        //POST发送
        xhr.send('a=12&b=5')  ;

        //接收
        xhr.onreadystatechange = function(){ //当状态改变时触发函数
            //0 刚创建 1已连接 2已发送 3已接收响应头 4接收数据成功(404等错误也相当于接收成功)
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){ //请求状态码
                    console.log(xhr.responseText); //文本
                    console.log(xhr.responseXML);  //XML数据
                }
            }
        }
    }
        </code>
     </pre>
      <span class="h2">3、jsonp（没什么用）</span>
      <span class="h2">4、WebSocke</span>
      <pre class="docbody">
          (1) 性能高
          (2) 双向通信
          (3) 直接跨域 
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
    //    document.getElementById('JS_DataInter').innerHTML = marked(``);
  }
};
</script>

<style lang="scss" scoped>

</style>