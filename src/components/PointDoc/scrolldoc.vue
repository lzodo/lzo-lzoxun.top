<template>
    <div class="PointDoc" :style="{height:docHeight+'px'}">
        <div class="container">
            <div class="wrapper">              
                <div class="section" v-for="(item, index) in list" :key="index">
                    <div class="itlte-warp">
                        <h2 class="sectitle">{{(index+1) + '、' + item.name}}</h2>
                        <div class="tags" v-show="item.tag">
                            <span v-for="(tagitem,tagindex) in item.tag" :key="tagindex" :style='{background:randomColor()}'>{{tagitem}}</span>
                        </div>
                        <!-- <div class="types" v-show="item.type">{{item.type}}</div> -->
                    </div>
                    <div class="bannerimg" v-show='item.img'>
                        <img :src='item.img' />
                    </div>
                    <div class="secnote" v-show="item.note">{{item.note}}</div>

                    <div class="secimgswarp" v-show='item.imgs'>
                        <div class="secimgs" v-for='(imitem,imindex) in item.imgs' :key='imindex'>
                            <div class="pic">
                                <img :src="imitem.src" :class='imitem.cla'>
                            </div>
                            <div class="name">{{imitem.name}}</div>
                        </div>
                    </div>
                    

                    <div class="tableStyle" v-show='item.tableStyle' v-for='(titem,index) in item.tableStyle' :key='index'>
                        <div class="tabtitle">{{titem.title}}</div>
                        <ul class="tabList">
                            <li class="tabitem" v-for='(tlist,tindex) in titem.val' :key='tindex'>
                                <span class="obj">{{tlist.obj}}</span> 
                                <span class="note">描述 : {{tlist.note}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="tosumup" v-show='item.tosumup'>
                        <div class='tosumupitem' v-for="(tsitem,tsindex) in item.tosumup" :key='tsindex'>
                            ({{tsindex+1}})&nbsp;&nbsp;{{tsitem}}
                        </div>
                    </div>

                    <div class="detailed" v-show='item.detailed'>
                        <div class='detaileditem' v-for="(deitem,deindex) in item.detailed" :key='deindex'>
                            ({{deindex+1}})&nbsp;&nbsp;{{deitem.title}}
                            <div class="detcontent" v-for="(decitem,decindex) in deitem.val" :key="decindex">
                                 👀 {{decitem}}
                            </div>
                        </div>
                    </div>

                    <div class='warning' v-show="item.warning">
                        <div v-for="(witem,index) in item.warning" :key='index'>
                            <span class='red bold'>*</span>{{witem}}
                        </div>
                    </div>

                    <pre v-highlightjs v-show='item.jsCode' v-for='(citem,cindex) in item.jsCode' :key='cindex' >
                        <span class='codenote'>{{citem.lang}} Code</span>
                        <code :class="citem.lang">{{citem.code}}</code>
                    </pre>
                    
                    <div class="listLinks" v-show='item.listLinks' v-for='(titem,index) in item.listLinks' :key='index'>
                        <!-- <div class="tabtitle">{{titem.title}}</div> -->
                        <ul class="tabList">
                            <li class="tabitem" :class='[titem.type]' v-for='(tlist,tindex) in titem.val' :key='tindex'>
                                <a class="obj" :href="tlist.link">{{tlist.obj}}</a> 
                                <span class="note" v-show='titem.type == "line"'>描述 : {{tlist.note}}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="seclinks" v-show='item.links'>
                        <div class='linkmodo' v-for='(ilinks,index) in item.links' :key='index'>
                            <div class="title">{{ilinks.title}} : </div>
                            <div class="linkList">
                                <a v-for='(ival,indexs) in ilinks.val' :key='indexs' :href='ival.href'>{{ival.name}}</a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <!-- <slot></slot> -->
            </div>
        </div> 
        <div class='nav' :style="{height:docHeight+'px'}">
            <ul class="scronav" :style="{top:scrollnavtop + 'px'}">
                <li>目录</li>
                <li class="scroitem" :title='item' v-for="(item, index) in navList" :key="index" @click="jump(index)"
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
        randomColor(){
            console.log('random')
           let colors = ['#E6A23C','#67C23A','#F56C6C','#909399','#409EFF'];
           return colors[Math.floor(Math.random()*5)];
        },
        loadSroll: function () {
            var self = this;
            var $navs = $(".scroitem");
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
        },
        getcatal(){
            let that = this;
            that.navList = [];
            that.list.map(function(item,index){
                that.navList.push((index+1) + '、' +item.name);
            })
        }
    },
    watch: {
        scroll: function () {
            this.loadSroll()
        },
        list:function(){
            this.getcatal(); 
        },
    },
    mounted() {
        let that = this;
        window.addEventListener('scroll', this.dataScroll);
        this.getcatal();
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
            li{
                width: 100%;
            }
        }
    }
    .section{
        width: 100%;
        background: #fff;
        padding:10px;
        margin-bottom: 2px;
        min-height: 200px;
        .itlte-warp{
            position: relative;
            width: 100%;
            height: 100%;
            .tags{
                position: absolute;
                top: 10px;
                right: 10px;
                span{
                    float: right;
                    padding:0 7px;
                    background: #ff6666;
                    margin-left: 2px;
                    color:#fff;
                    &:hover{
                        box-shadow:inset 0px 6px 7px rgba(0,0,0,.1);
                    }
                    &:first-child{
                        border-top-right-radius:4px;
                        border-bottom-right-radius:4px;
                    }
                    &:last-child{
                        border-top-left-radius:4px;
                        border-bottom-left-radius:4px;
      
                    }
                    &:not(:first-child):before{
                        content: " ";
                    }
                }
            }
            .types{
                position: absolute;
                top: 39px;
                right: 0px;
                background: #3CB371;
                padding: 0 7px;
                border-radius:0 0 5px 5px;
                font-size: 10px;
                z-index: 2;
                color:#fff;
            }
        }
        .sectitle{
            width:100%;
            font-size: 20px;
            font-weight: 800;
            color:#000;
            padding-bottom: 8px;
            border-bottom: 1px solid #ececec;
            letter-spacing: 1px;
        }
        .tableStyle,.listLinks{
            width:100%;
            margin: 10px 0;
            padding: 0 30px;
            .tabtitle{
                font-size: 17px;
                font-weight: 600;
                color:#333;
                height: 40px;
                line-height: 40px;
                display: block;
            }
            .tabList{
                width:100%;
                // border: 1px solid #F8FAFC;
                // border-bottom: none;
                overflow: hidden;
                .tabitem{
                    height: 40px;
                    line-height: 40px;
                    font-size: 15px;
                    display: flex;
                    &.block{
                        display: block;
                        float: left;
                        .obj{
                            border:none;
                        }
                    }
                    &:hover{
                        background: #ECF5FF;
                        .obj{
                            border-right-color:#7CCD7C;
                        }
                    }
                    &:last-child{
                        .obj{
                            border-bottom: 0;
                        }
                        .note{
                            border-bottom: 0;
                        }
                    }
                    .obj{
                        display: inline-block;
                        padding-right:15px;
                        border-bottom: 1px solid #eee;
                        border-right: 1px solid #eee;
                        color:#333;
                        font-weight: 600;
                        padding-left: 10px;
                    }
                    a.obj:hover{
                        color:#007fff;
                    }
                    .note{
                        padding-left: 15px;
                        border-bottom: 1px solid #eee;
                        display: inline-block;
                        flex: 1;
                    }
                }
            }
        }
        .secnote{
            padding:5px 10px;
            margin-top: 10px;
            border-left: 4px solid #dfe2e5;
        }
        .seclinks{
            width: 100%;
            margin: 10px 0;
            .linkmodo{
                width: 100%;
                display:flex;
                .linkList{
                    flex:1;
                    a{
                        display: inline-block;
                        padding: 0 10px;
                        border-right: 1px dashed #eee;
                        &:first-child{
                            padding-left:0;
                        }
                        &:last-child{
                            border-right: 0;
                        }
                    }
                } 
                .title{
                    margin-right: 10px;
                }
            } 
        }
        .bannerimg{
            width: 100%;
            max-height:300px;
            overflow: hidden;
            margin: 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
            }
        }
        .secimgswarp{
            width: 100%;
            margin: 10px 0;
            height:230px;
            .secimgs{
                width: 30%;
                height:230px;
                float:left;
                border-right: 5px solid #fff;
                position: relative;
                .pic{
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow:hidden;
                }
                .name{
                   position: absolute;
                   bottom: 0;
                   left:0;
                   width:100%;
                   height:30px;
                   line-height: 30px;
                   text-align: center;
                   background:#f0f0f0;
                }
                .AllHeight{
                    height:100%;
                }
            }
        }
        // .tosumup{
        //     width: 100%;
        //     min-height: 50px;
        //     padding: 10px 20px;
        //     font-size: 15px;
        //     line-height: 25px;

        // }
        .warning,.tosumup,.detailed{
            width: 100%;
            min-height: 50px;
            padding: 10px 20px;
            font-size: 15px;
            line-height: 25px;
            background: #F8F8F8;
            margin: 10px 0;
            border-left: 5px solid #ff6666;
            position: relative;
            letter-spacing: 1px;
            &.tosumup{
                border-left-color: #3CB371;
                .tosumupitem{
                    margin-bottom: 5px;
                }
            }
            &.tosumup:before{
                content:'总';
                background: #3CB371;
                font-size: 11px;
            }
            &.detailed{
               border-left-color:#436EEE;
               .detaileditem{
                   margin-bottom: 5px;
                   .detcontent{
                       padding-left: 35px;
                       font-size: 14px;
                       background: #ddd;
                       font-weight: bold;
                       color:#333;
                   }
               }
            }
            &.detailed:before{
                content: '详';
                font-size: 11px;
                background: #436eee;
            }
            &:before{
                content:'!';
                position: absolute;
                width:19px;
                height: 19px;
                background: #ff6666;
                border-radius: 50%;
                color:#fff;
                text-align: center;
                line-height: 19px;
                top:15px;
                left:-12px;
            }
        }
            
    }
    .scroitem {
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
.red{
    color:#f00;
}
.bold{
    font-weight: bold;
    display: inline-block;
    padding: 0 5px;
}
//highlightjs 样式
.hljs {
  border-radius: 3px;
  width:100%;
  padding: 0 !important;
  //background: #f0f0f0 !important;
  .hljs-comment,
  .hljs-quote {
     font-style: normal !important;
  }
}
pre{
    //line-height: 1.3rem;
    display: flex;
    width: 100%;
    padding: 10px 0;
    flex-direction: column;
    .codenote{
        color:#777;
        padding: 0 0 5px 5px;
    }
}
</style>
