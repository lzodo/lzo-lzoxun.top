<template>
  <div class="mydemo css-flex">
     <span class="MTitle">1、容器与项目</span>
<!--      <div class="demo demo1">
        <ul>
           <li>Gird</li><li>Gird</li><li>Gird</li><li>Gird</li><li>Gird</li><li>Gird</li><li>Gird</li><li>Gird</li><li> </li>
        </ul>
     </div>
     <pre v-highlightjs>
        <code class="highlightjs_warp javascript">
        img{object-fit: cover;}
        ul{ //容器
           width: 300px;
           height: 300px;
           display: inline-grid; //设置容器 设置成功后容器项目的float、display: inline-block、display: table-cell、vertical-align和column-* 失效
           grid-template-columns: 33.33% 33.33% 33.33%; //定义每一列的列宽，可用px；
           grid-template-rows: repeat(3, 33.33%); //定义每一行的行高
           li{ //项目
             text-align: center;
             line-height: 100px;
             color:#fff;
           }
        }
        </code>
    </pre> -->
  
  </div>
</template>
<script>

export default {
  watch: {

  },
  data() {
    return {
    }
  },
  components: {

  },
  methods: {

  },
  mounted() {
     let that = this;

     $('.demo ul li').each(function(item){
         $(this).css('background',that.getRandomColor());
     })
  },

}

</script>
<style lang='scss' scoped>
.css-flex{
  padding: 0 10px;
}
// }
</style>
