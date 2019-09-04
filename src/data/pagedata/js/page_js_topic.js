let datas = {
    Data: [
       {
            name:"301重定向与302的差别,与应用场景",
            type:"jc",
            tosumup:[
            '301 永久重定向',
            '302 临时重定向',
            '301应用场景: 域名到期不想继续用这个,换了地址',
            '302应用场景: 做活动时候,从首页跳到活动页面'
            ],
            jsCode:[{lang:'javascript',code:`
            
                `}
            ]
       },
       {
            name:"事件对象位置坐标属性",
            type:'jc',
            jsCode:[{lang:'javascript',code:`
            event.clientX、event.clientY

            // 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性

            event.pageX、event.pageY

            // 类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。

            event.offsetX、event.offsetY

            // 鼠标相对于事件源元素（srcElement）的X,Y坐标

            event.screenX、event.screenY

            // 鼠标相对于用户显示器屏幕左上角的X,Y坐标
                `}
            ]
       },
       {
            name: "箭头函数",
            type: "jc",
            jsCode: [{ lang: 'javascript', code: `
        /*
        * (1) 箭头函数比普通函数更加简洁  x=>x+10 
        * (2) 箭头函数没有自己的this,他的this是继承函数所属上下文的this,使用call,apply等方式是无法改变箭头函数中this指向的
        * (3) 箭头函数中没有argument(类数组)，只能基于...arg获取传递的参数集合(数组)
        * (4) 箭头函数不能被new执行,因为他没有自己的this也没有prototype属性 
        */
        let obj = {};
        let fn = (...arg)=>{
          console.log(this);
          console.log(...arg);
        }
        fn(10,20); //window    10 20
        fn.call(obj,30,40) //widow 30 40
                ` }]
        },
        {
            name: "函数自执行 前缀特殊符号的意义？",
            type: "jc",
            note: "应为定义函数是不能直接执行的,而函数表达式可以,如果在前面加入符号，解析器就会以函数表达式的方式调用定义的函数",
            jsCode: [{ lang: 'javascript', code: `
        ( function(){ /* code */ }() );
        ! function(){ /* code */ }();
        ~ function(){ /* code */ }();
            ` }]
        },
        {
            name: "indexOf功能实现",
            type: "sf",
            jsCode: [{ lang: 'javascript', code: `
        ~ function() {
            //循环原始字符串每一项 , 让每一项从当前位置向后截取T.length个字符，如果一样返回索引，否则继续循环
            function myIndexOf(T) {
                let lenT = T.length; //获取原始字符串长度
                let lenS = this.length; //获取查找字符串长度
                let res = -1; //定义返回值 默认-1

                for (let i = 0; i <= lenS - lenT; i++) { //循环原始字符串长度 - 查找字符串的长度  +1 次(这边从0开始的)
                    if (this.substr(i, lenT) === T) { //从每一项截取查找字符串长度个字符 进行对比
                        res = i; //如果全等 改变返回值为当前索引 并结束循环
                        break;
                    }
                }
                return res;
            }

            //通过正则实现  /findstr/.exec('yuanshizifuchuang') 如果匹配成功返回对象中含有index属性是匹配字符串首字符索引，否则返回null
            function myIndexOfReg(T) {
                let reg = new RegExp(T),
                    res = reg.exec(this);
                console.log(reg); //得到转换的结果直接是 /cd/ 
                return res === null ? -1 : res.index; //如何匹配不到取-1，否则取索引
            }
            String.prototype.myIndexOf = myIndexOf;
            String.prototype.myIndexOfReg = myIndexOfReg;
        }()

        //S中存在T返回索引,否则返回-1；
        let S = 'abcdef',
            T = 'cd';
        console.log(S.myIndexOfReg(T)) //2
            ` }]
        },
        {
            name: "数组 sort 排序",
            type: "sf",
            jsCode:[{lang:'javascript',code:`
        /* 一.sort排序规则,return大于0则交换数组相邻2个元素的位置
         *    
         *
         * 二.arr.sort(function (a,b) {})中
         *    a -->代表每一次执行匿名函时候，找到的数组中的当前项；
         *    b -->代表当前项的后一项；
         */

        // 数组
        var arr = [-50,-12,0,1,15,7];

        // 默认法,缺点:只根据首位排序
        console.log(arr.sort()); //[-12, -50, 0, 1, 15, 7] 首字母7最大

        /*
         * 1.升序 
         *    (1) 大的放在后面,小的放在前面
         *    (2) 因为是升序,所以如果前一个比后一个大就要交换位置  
         *    (3) 交换位置的条件是返回值要大于0, 所以返回值前一个 - 后一个要大于0, 否则不交换,反之降序
        */
        console.log(arr.sort(function(a, b) {
            return a - b; //若return返回值大于0(即a＞b),则a,b交换位置,把更大的放在后面所以是升序
        }));

        //2.降序
        console.log(arr.sort(function(a, b) {
            return b - a; //若return返回值大于零(即b＞a),则a,b交换位置,把更小的放到后面所以是降序
        }))

        //扩展:排序个数不相等、顺序不一致的红、黄、蓝三种颜色的球,例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝
        function sortBalls(str) {
            let arr = str.split('')
            arr.sort((a, b) => {
                return getNumByType(a) - getNumByType(b)  //前一个减后一个要大于0才交换,这是升序所以可以实现结果黄红其他
            })
            return arr.join('')

            function getNumByType(type) {
                switch (type) {
                    case '黄':
                        return 1
                    case '红':
                        return 2
                    default:
                        return 3
                }
            }
        }
        console.log(sortBalls('红蓝蓝黄红黄蓝红红黄红'));
                `}
            ]
        },
        {
            name: "字符串大小写转化 js实现",
            type: "sf",
            jsCode: [{ lang: 'javascript', code: `
        let str = 'aBcDeF'; //得到如何转化为AbCdEf
        str = str.replace(/[a-zA-Z]/g, res => { //匹配到字符串中的所欲字母,再进行操作(回调中会循环每一个匹配到的字符) 
            /*
             * res 每一次正则匹配到的结果
             * 实现方案:
             *    (1) 逐一将每个字符转为大写，如果与res全等则调用，说明本来就是大写,就可以调用 toLowerCase() 原生转小写方法,
             *        否则否则调用 toUpperCase() 转大写方法 
             *    (2) 或通过ASCLL字符码 res.charCodeAt()>=65 && res.charCodeAt()<=90 说明是大写字母, 否则就是小写字母
             */
             return res.toUpperCase() === res ? res.toLowerCase() : res.toUpperCase();

             //

        })
        console.log(str); //AbCdEf
                ` }]
        },
        {
            name: "bind方法",
            type: "jc",
            jsCode:[{lang:'javascript',code:`
        let obj = {};

        let test = function(){
          console.log(this)
        }.bind(obj)

        let test2 = function(){
          console.log(this);
        }

        test(10,20);  //{}
        test2.bind(obj)();  //{}
                `}
            ]
        },
        {
            name: "call与apply",
            type: "jc",
            jsCode: [{ lang: 'javascript', code: `
            /*
             * call 和 apply那个的区别哪个更好？
             * 共同点都是改变函数内this指向
             * 区别在于call可以传this作用域外多个参数
             *        apply只可以传this作用域外一个参数，如果有多个参数一般用一个数组代替
             * 
             * fn.call(obj,a1,a2,a3)
             * fn.apply(obj,[a1,a2,a3])
             * 听说call在性能好那么一点点,没有实测
             */
            let arr = [10,20,30];
            obj = {};
            function fn(x,y,z){
               console.log(this)
               console.log(x,y,z);  
            }
            fn.apply(obj,arr);  //10 20 30   这是fn里的this是指向obj的，本来是指向window的
            fn.call(obj,arr);  //[10,20,30] undefined undefined
            fn.call(obj,...arr); //call可以通过es6的展开运算符将数组元素展开传递 10 20 30

            //性能测试
            console.time("A");
            for(let i=0;i<1000000;i++){}
            console.timeEnd("A")
            //new Date() 方式 精确度没种方法高
                ` }]
        },
        {
            name: "caller 与 callee的区别",
            type: "jc",
            jsCode: [{ lang: 'javascript', code: `
            function test(a){
                console.log(test.caller) //返回的是，test函数在哪个函数中调用的。 如果函数是顶层调用，则返回null
                console.log(arguments) //形参列表函数自身引用等 
                console.log(arguments.callee) //函数自身引用 递归经常使用
                test2();
            }
            function test2(){
                 console.log(test2.caller) //因为test2是在test函数中调用的 所有返回test的引用
            }
            test(10);
                ` }]
        },
    ]
}


export default datas;
