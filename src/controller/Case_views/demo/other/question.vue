<template>
   <div class="question">
      <scroll-doc :docHeight='pageHeight-96' :list='lists'></scroll-doc>
   </div>
</template>

<script>
export default {
   name:'question',
   data(){
      return {
         pageHeight:window.innerHeight,
         lists: [{
               name: "第一条",
               backgroundcolor: "#90B2A3"
         }, {
               name: "第二条",
               backgroundcolor: "#A593B2"
         }, {
               name: "第三条",
               backgroundcolor: "#A7B293"
         }, {
               name: "第四条",
               backgroundcolor: "#0F2798"
         }, {
               name: "第五条",
               backgroundcolor: "#0A464D"
         }],
      }
   },
}
</script>
<style lang='scss' scoped>

</style>