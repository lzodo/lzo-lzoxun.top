<template>
   <div class="question">
      <scroll-doc :docHeight='pageHeight-96' :list='lists'></scroll-doc>
   </div>
</template>

<script>
import { page_pointdoc } from '../../../../data';

export default {
   name:'question',
   data(){
      return {
           pageHeight:window.innerHeight,
           lists:[],
      }
   },
   mounted(){
         this.lists = page_pointdoc.Data;
   }
}
</script>
<style lang='scss' scoped>

</style>
