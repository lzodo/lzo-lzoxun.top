<template>
    <div class="PointDoc" :style="{height:docHeight+'px'}">
        <div class="container">
            <div class="wrapper">
                <div class="section" v-for="(item, index) in list" :key="index">
                    <h2 class="sectitle">{{(index+1) + '、' + item.name}}</h2>
                    <pre v-highlightjs v-show='item.jsCode'>
                        <code class="javascript">{{item.jsCode}}</code>
                    </pre>
                    <pre v-highlightjs v-show='item.cssCode'>
                        <code class="css">{{item.cssCode}}</code>
                    </pre>
                    <pre v-highlightjs v-show='item.scssCode'>
                        <code class="scss">{{item.scssCode}}</code>
                    </pre>
                    <pre v-highlightjs v-show='item.htmlCode'>
                        <code class="html">{{item.htmlCode}}</code>
                    </pre>
                </div>
                <!-- <slot></slot> -->
            </div>
        </div> 
        <div class='nav' :style="{height:docHeight+'px'}">
            <ul class="scronav" :style="{top:scrollnavtop + 'px'}">
                <li>目录</li>
                <li class="nav1" :title='item' v-for="(item, index) in navList" :key="index" @click="jump(index)"
                    :class="index==0?'current':''">
                    <span class='beforeShape'></span>
                    <span class="navfont">{{item}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'ScrollDoc',
    props:{
        docHeight:{
            type:Number,
            default:500
        },
        list:{
            type:Array,
            default:[]
        },
    },
    data(){
        return {
            scroll: '',
            navList: [],
            scrollnavtop:10
        }
    },
    filters:{
        trim(val){
            if(val){
                return val.replace(/^\s*|\s*$/g,"");
            }
        }
    },
     methods: {
        dataScroll: function () {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scroll)
        },
        jump(index) {
            let jump = document.getElementsByClassName('section');
            // 获取需要滚动的距离
            let total = jump[index].offsetTop;
            // Chrome
            document.body.scrollTop = total;
            // Firefox
            document.documentElement.scrollTop = total;
            // Safari
            window.pageYOffset = total;
        },
        loadSroll: function () {
            var self = this;
            var $navs = $(".nav1");
            console.log($navs);
            var sections = document.getElementsByClassName('section');
            console.log(sections);
            for (let i = sections.length - 1; i >= 0; i--) {
                if($navs.eq(i).index()>9){
                    self.scrollnavtop= -($navs.eq(i).index() - 9)*30;
                }else{
                    self.scrollnavtop= 9;
                }

                if (self.scroll >= sections[i].offsetTop) {
                    $navs.eq(i).addClass("current").siblings().removeClass("current")
                    break;
                }
            }
        }
    },
    watch: {
        scroll: function () {
            this.loadSroll()
        },
    },
    mounted() {
        window.addEventListener('scroll', this.dataScroll);
        let that = this;
        that.list.map(function(item,index){
            that.navList.push((index+1) + '、' +item.name);
        })

    }
}

</script>
<style lang="scss">
*{
    font-family: "Microsoft Yahei";
}
.PointDoc{
    width:100%;
    height: 100%;  
    position:relative;
    .container{
        width: 100%;
        height: 100%;
        padding-right: 200px;
    }
    .nav{
        width: 200px;
        overflow: hidden;
        position: fixed;
        right:0;
        bottom:0;
        padding: 10px;
        cursor: pointer;
        .scronav{
            position: absolute;
            left: 10px;
            top:-100px;
        }
    }
    .section{
        width: 100%;
        background: #fff;
        padding:10px;
        margin-bottom: 2px;
        min-height: 200px;
        .sectitle{
            width:100%;
            font-size: 20px;
            font-weight: 800;
            color:#000;
            padding-bottom: 8px;
            border-bottom: 1px solid #ececec;
            letter-spacing: 1px;
        }
    }
    .nav1 {
        display: block;
        font-weight: 600;
        color: #000;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        position: relative;
        &:after{ 
           content:" ";
           position: absolute;
           width:1px;
           height: 100%;
           top:0;
           left:12px;
           background: #ccc;
           z-index: -1;

        }
        .navfont{
            width: 150px;
            height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
        }
        .beforeShape{
            width:5px;
            height: 5px;
            border-radius:50%;
            background: #ccc;
            float: left;
            margin-right: 10px;
        }
    }
    .current {
        color: #007fff;
        background-color: #ebedef;
        .beforeShape{
            background-color: #007fff;
        }
        
    }
}
//highlightjs 样式
.hljs {
  border-radius: 3px;
  padding: 0 !important;
  //background: #f0f0f0 !important;
  .hljs-comment,
  .hljs-quote {
     font-style: normal !important;
  }
}

</style>