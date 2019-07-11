<template>
  <div class="InnerDocWarp css-grid">
     <span class="h1">1、容器与项目</span>
     <div class="demo demo1">
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
    </pre>
    <span class="h1">2、auto-fit 跳过固定列实现响应式</span>
    <div class="demo demo3">
        <ul>
           <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>
        </ul>
     </div>
     <pre v-highlightjs>
        <code class="highlightjs_warp javascript">
        ul{
          width: 100%;
          height: 300px;
          display: inline-grid;
          grid-template-columns: repeat(auto-fit, 200px); //当宽度达不到父级宽度会空白现象
          grid-template-rows: repeat(3, 33.33%);
          li{color:#fff;}
        }
        </code>
    </pre>
    <span class="h1">3、fraction 简写 fr</span>

    <div class="demo demo2">
        <ul>
           <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>
        </ul>
     </div>
     <pre v-highlightjs>
        <code class="highlightjs_warp javascript">
        ul{
          width: 300px;
          height: 300px;
          display: inline-grid;
          grid-template-columns: 1fr 2fr 1fr; //定义每一列的列宽，可用px；
          grid-template-rows: 1fr 2fr 1fr; //定义每一行的行高
          li{
              color:#fff;
          }
        }
        </code>
    </pre>
    <span class="h1">4、minmax 定义的范围大于或等于 min， 小于或等于 max。</span>
    <div class="demo demo4">
        <ul>
           <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>
        </ul>
     </div>
     <pre v-highlightjs>
        <code class="highlightjs_warp javascript">
        ul{
          width: 100%;
          height: 300px;
          display: inline-grid;
          grid-template-columns: repeat(auto-fit,minmax(200px, 1fr)); //当宽度达不到父级宽度会空白现象解决
          grid-template-rows: repeat(3, 33.33%);
          li{color:#fff;}
        }
        </code>
    </pre>
  </div>
</template>
<script>

export default {
  name: 'css-grid',
  watch: {

  },
  data() {
    return {
      input1: '',
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
.css-grid{
  padding: 0 10px;
}
.demo1{
  padding: 10px 0;
   ul{
      width: 300px;
      height: 300px;
      display: inline-grid;
      grid-template-columns: 33.33% 33.33% 33.33%; //定义每一列的列宽，可用px；
      grid-template-rows: repeat(3, 33.33%); //定义每一行的行高
      li{
        text-align: center;
        line-height: 100px;
        color:#fff;
      }
   }
}
.demo2{
  padding: 10px 0;
  ul{
    width: 300px;
    height: 300px;
    display: inline-grid;
    grid-template-columns: 1fr 2fr 1fr; //定义每一列的列宽，可用px；
    grid-template-rows: 1fr 2fr 1fr; //定义每一行的行高
    li{
        color:#fff;
    }
  }
}
.demo3{
  padding: 10px 0;
  ul{
    width: 100%;
    height: 300px;
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-template-rows: repeat(3, 33.33%);
    li{color:#fff;}
  }
}
.demo4{
  padding: 10px 0;
  ul{
    width: 100%;
    height: 300px;
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(3, 33.33%);
    li{color:#fff;}
  }
}
// .h1{
//   padding: 10px 0 0px;
//   display: block;
//   font-size: 16px;
//   font-weight: bold;
// }
</style>
