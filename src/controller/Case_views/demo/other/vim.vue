<template>
  <div id="Linux" class="DocWarp">
    <div class="InnerDocWarp">
        <div class='h1'>所有的中括号[  ]在vim配置中要写成尖括号&lt; &gt;</div>
      <div class='h1'>$ VIM快捷键</div>
      <pre class="docbody">
         <span class="h2">没分类</span>
         <span class="content">
             写入模式、i插入之前、a插入之后、A行尾插入、I行首插入、o下行插入、O上行插入
             
             动作
             d 删除 
             c 修改(删除并进入插入模式)  ci" 会删除"aaa bbb cc ddd" 引号里所有的字符
             y 复制
             f 查找  
             d + ←→删除光标←→字符（d +3←）、dd删除一行（其实是剪切，p粘贴）
             y+ ←→复制光标←→字符（y+3←）
         </span>
      </pre>
      <div class='h1'>$ .vimrc</div>
      <pre class="docbody">
         <span class="h2">基础配置</span>
         <span class="content">
         </span>
         <span class="h2">键位设置</span>
         <span class="content">
         </span>
         <span class="h2">插件</span>
         <span class="content">
         </span>
      </pre>
      <div class='h1'>$ 键位映射</div>
      <pre class="docbody">
      </pre>
      <div class='h1'>$ 谷歌浏览器插件vimium</div>
      <pre class="docbody">
         <span class="content">
            H：回到历史
            L：在历史上前
            K，gt：向右移动一个标签
            J，gT：左边的一个标签
            t：创建新选项卡
            x：关闭当前选项卡
            X：恢复关闭标签
            
            ？ ：显示帮助对话框
            j：向下滚动
            k：向上滚动
            h：向左滚动
            l：向右滚动
            gg：滚动到页面顶部
            G：滚动到页面底部
             
            u，[c-u]：向上滚动半页
            d，[c-d]：向下滚动半页
            [c-f]：向下滚动整页
            [c-b]：向上滚动整页
            f：在当前选项卡中打开一个链接
            F：在新选项卡中打开链接
            o：打开URL，书签或历史记录条目
            O：在新选项卡中打开URL，书签或历史记录条目
             
            r：重新加载页面
            gs：查看页面源代码
            /：进入查找模式
            n：前进到下一个查找比赛
            N：向后循环到上一个查找匹配
            yy：将当前URL复制到剪贴板
            gf：将焦点循环到下一帧
            i：进入插入模式
                     </span>
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

============================
<script>
export dlt {
  name: "Linux",
  data() {
    return {};
  },
  methods: {},
  mounted() {
