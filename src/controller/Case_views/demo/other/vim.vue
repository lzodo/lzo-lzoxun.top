<template>
  <div id="Linux" class="DocWarp">
    <div class="InnerDocWarp">
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
