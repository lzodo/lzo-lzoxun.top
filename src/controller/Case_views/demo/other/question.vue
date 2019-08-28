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
//list height
lists: [
{
      name: "第一条",
      jsCode:`
      let a = '5';
         //ccckdfjalfj
      let b = '3';
      `,
      htmlCode:`
      <html>
            <body>body</body>
      </html>
      `,
      scssCode:`
      body{
          background:#f00;
          font-size:56px;
          .class{
              color:#f0f;
          }
      }
      `,
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
      name: "如果是非常长的一个标题会怎样",
      backgroundcolor: "#0A464D"
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
      name: "第二条",
      backgroundcolor: "#A593B2"
}, {
      name: "第三条",
      backgroundcolor: "#A7B293"
}, {
      name: "第四条",
      backgroundcolor: "#0F2798"
}, {
      name: "第二条",
      backgroundcolor: "#A593B2"
}, {
      name: "第三条",
      backgroundcolor: "#A7B293"
}
],
      }
   },
}
</script>
<style lang='scss' scoped>

</style>