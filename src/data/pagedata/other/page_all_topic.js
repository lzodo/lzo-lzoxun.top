
let datas = {
    Data: [
        {
            name:'单多行溢出省略号',
            jsCode:[{lang:'css',code:`
            .div{   
                /*多行溢出省略号显示 不支持火狐*/
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                
                /*单行*/
                overflow: hidden;
                text-overflow: ellipsis;
                white-space:nowrap;
            }
                `}
            ]
        },
        {
            name:'CSS文档流 BFC',
            type:'css',
            note:'Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，如body、定位的元素、一块浮动元素或设置display或overflow属性的元素的区域是BFC区域,这些元素或属性就相当于官方说的触发BFC',
            tosumup:[
                '只要元素满足下面任一条件即可触发 BFC 特性',
                'body 根元素',
                '浮动元素：float 除 none 以外的值',
                '绝对定位元素：position (absolute、fixed)',
                'display 为 inline-block、table-cells、flex',
                'overflow 除了 visible 以外的值 (hidden、auto、scroll)'
            ],
            detailed:[
                '同一个 BFC 下外边距会发生折叠,所以说margin折叠解决方案可以是触发BFC的条件，将两个元素放在不同的BFC容器中,不同方式都带有每种方式的特性',
                'BFC元素子元素浮动父级不会塌陷,所以处理塌陷可以清除浮动',
                'BFC 可以阻止元素被浮动元素覆盖等情况'
            ],
        },
        {
            name:"doctype",
            type:"css",
            note:"htm中doctype标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。 主要分成严格版本,过滤版本,基于框架的html版本等",
            tosumup:[
            '<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。',
            '<!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。',
            '在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。',
            'HTML5 不基于 SGML，所以不需要引用 DTD。',
                '在 HTML 4.01 中有三种 <!DOCTYPE> 声明。在 HTML5 中只有一种 <!DOCTYPE html>',
            ]
        },
        {
            name:"样式优先级",
            type:"css",
            note:"!important > 行内 > id > class > 标签"
        },
        {
            name:"浏览器内核与兼容问题",
            type:"css",
            tosumup:[
                'Trident:ie/360/搜狗浏览器....',
                'Geoke:foxfire',
                'presto:opera',
                'webkit:google/safari',
                '......',
            ],
            warning:[
                '兼容问题',
                '解决浏览器内外边距不一致问题  *{margin:0;padding:0}',
                '有些浏览器中 a下的img有蓝色边框  img{border：0}或img{border：none}',
                'html5标签兼容问题:document.createElement("header") 或 使用html5shiv'
            ]
            
        },
        {
            name:"元素居中",
            type:"css",
            tosumup:[
                '有固定宽高:绝对定位+left:50%+margin-left:负宽度的一半，垂直方式一致',
                '没固定宽高:绝对定位:上下左右为0+margin:auto;',
                '或display:flex; align-items:center; justify-content:center;方式,  后两个属性设置的方向根据 flex-directio值的变化而变化',
            ]
        },
        {
            name:"浮动与清除浮动",
            type:"css",
            note:"当所有子元素设置float后,并且父级没有设置高度产生的现象",
            tosumup:[
                '最原始的解决方案:在所有子元素下方新建一个div，给该元素设置样式clear:both;',
                '其他的解决方案:给父级元素设置overflow:hidden;',
                '常用的解决方案:父元素:after{content:" ";clear:both;display:table;}',
            ],
            jsCode:[{lang:'css',code:`
            .clearfix{  /*给浮动元素的父级加*/
                & : before,
                & : after {
                    display:block;
                    clear:both;
                    content:"";
                    visibility:hidden;
                    height:0
                }
                & : after {
                    clear: both;
                }
            }

            .clearfix : after{
                    content:" ";
                    clear:both;
                    display:table;
                }
            }
                `}
            ]
        },
        {
            name: "双飞翼布局",
            type:'css',
            jsCode:[{lang:'html',code:`
    <!DOCCTYPE html>                                                                                                                                                         
    <html>  
        <head>  
            <meta charset="UTF-8">  
            <title></title>  
            <style type="text/css">      
                body {min-width: 550px;}      
                .col {float: left;}               
                #main {      
                    width: 100%;      
                    height: 200px;      
                }                 
                #main-wrap {      
                    /*这是圣杯和双飞翼最明显的区别，在main内部使用的是margin，而圣杯是直接在container部分使用padding*/              
                    margin: 0 190px;
                }      
                #left,#right {      
                    width: 190px;      
                    height: 200px;      
                }         
                #left{      
                    margin-left: -100%;     
                }             
                #right {      
                    margin-left: -190px;    
                }      
            </style>      
        </head>      
        <body>      
            <div id="container">      
                <div id="main" class="col">      
                    <div id="main-wrap"> #main </div>      
                </div>      
                <div id="left" class="col">#left</div>      
                <div id="right" class="col">#right</div>      
            </div>      
        </body>      
    </html>   
                `}
            ]
        },
    ]
}


export default datas;
