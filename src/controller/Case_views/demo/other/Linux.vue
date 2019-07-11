<template>
  <div id="Linux" class="DocWarp">
    <div class="InnerDocWarp">
      <div class="outlink"><a href="https://www.runoob.com/linux/linux-user-manage.html">参考</div>
      <div class='h1'>$ 关于linuxn</div>
      <pre class="docbody">
         <span class="content"><span class="strong">linux分为 linux内核与linux系统</span>

            linux内核是在官网开源的,每个人都能下载
            linux系统是商家通过下载的内核,进行开发如CentOs、Ubuntu等上千个系统,但基本操作差别不大
         </span>
      </pre>
      <div class='h1'>$ 目录</div>
      <pre class="docbody">
         <span class="h2">/bin/</span>
         <span class="content">
           存放系统命令的目录,普通用户和超级用户都可以执行。放在/bin 下的命令在单用户模式下也可以执行
         </span>
         <span class="h2">/sbin/</span>
         <span class="content">
           保存和系统环境设置相关的命令,只有超级用户可以使用这些命令进行系统环境设置，但是有些命令可以允许普通用户查看，
         </span>
         <span class="h2">/usr/bin/</span>
         <span class="content"></span>
         <span class="h2">/usr/sbin/</span>
         <span class="content"></span>
         <span class="h2"></span>
         <span class="content"></span>
         <span class="h2"></span>
         <span class="content"></span>
         <span class="h2"></span>
         <span class="content"></span>
         <span class="h2"></span>
         <span class="content"></span>
         


      </pre>
      <div class='h1'>$ 文件</div>
      <pre class="docbody">
         <span class="h2">1.文件属性</span>
         <span class="content">
         权限           访问次数  所属者  所属组  字节   最后修改时间   文件名
         - --- --- ---  100      root   root    1024  1月  3 08:00  filename
           u   g   o 

         访问次数 : 文件被访问过的次数
         所属者(u) : 创建文件的人(自己 或者转让给别人只会有一个)
         所属组(g) : 可一操作这个文件某项功能的一群人
         其他(o) : 除了前两者之外的

         权限 : rwx 读 写 执行的权限,横杆代表没有权限
         
         </span>
      </pre>
      <div class='h1'>$ 指令</div>
      <pre class="docbody">
         <span class="h2">cp 复制</span>
         作用 : 复制文件或文件夹
         格式 : cp [选项] 源文件或文件夹 目标文件或文件夹
         示例 : cp dir1/text.txt ~/   或 cp dir1/text.txt ~/text.changeName.txt
         常用选项 
             -a 复制文件夹中的全部内容
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
         <span class="h2">cp 复制</span>
        
     </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Linux",
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