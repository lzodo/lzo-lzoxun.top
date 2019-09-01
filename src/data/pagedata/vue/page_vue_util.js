
let datas = {
    Data: [
        {
            name: "限制input输入内容",
            jsCode:[{lang:'javascript',code:`
            //input只输入数字和点
            Vue.prototype.filterNumber = function(e){
                 // 通过正则过滤小数点后两位
                 if( e.target.value.toString() !== (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0])) {
                    e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
                 }
            }
                `}
            ]
        },
        {
            name: "获取随即颜色",
            jsCode:[{lang:'javascript',code:`
            //获取随机颜色
            Vue.prototype.getRandomColor =function(){ 
                 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
            } 
                `}
            ]
            
        },
        {
            name: "wait",
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
            
        },
        {
            name: "wait",
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
            
        },
        {
            name: "wait",
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
            
        },
        {
            name: "wait",
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
            
        },
        {
            name: "wait",
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
            
        },
        {
            name: "wait",
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
            
        },
    ]
}


export default datas;
