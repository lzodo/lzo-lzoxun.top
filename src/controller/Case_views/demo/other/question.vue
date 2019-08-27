<template>
   <div class="question">
      <scroll-doc :docHeight='pageHeight-96'></scroll-doc>
   </div>
</template>

<script>
export default {
   name:'question',
   data(){
      return {
         pageHeight:window.innerHeight
      }
   },
}
</script>
<style lang='scss' scoped>

</style>