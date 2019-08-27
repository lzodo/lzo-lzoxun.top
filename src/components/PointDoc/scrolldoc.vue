<template>
    <div class="PointDoc" :style="{height:docHeight+'px'}">
        <div class="container">
            <div class="wrapper">
                <div class="section" v-for="(item, index) in list" :key="index" :style="{'height':index==0||index==4?'1000px':'500px'}">
                    <div class="title" :style="{'background':item.backgroundcolor}">{{item.name}}</div>
                </div>
            </div>
        </div> 
        <ul class='nav' :style="{height:docHeight+'px'}">
            <li class="nav1" v-for="(item, index) in navList" :key="index" @click="jump(index)"
                :class="index==0?'current':''">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'ScrollDoc',
    props:{
        docHeight:{
            type:Number,
            default:500
        }
    },
    data(){
        return {
            scroll: '',
            list: [{
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
            navList: []
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
            for (var i = sections.length - 1; i >= 0; i--) {
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
        that.list.map(function(item){
            that.navList.push(item.name);
        })

    }
}

</script>
<style lang="scss">
.PointDoc{
    width:100%;
    height: 100%;  
    position:relative;
    .container{
        width: 100%;
        height: 100%;
    }
    .nav{
        width: 200px;
        height: 100%;
        position: fixed;
        right:0;
        bottom:0;
    }
}
.section{
    height: 500px;
    width: 100%;
}
.nav1 {
    display: block;
}
.current {
    color: #fff;
    background: red;
}
.title{
    width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;
}
</style>