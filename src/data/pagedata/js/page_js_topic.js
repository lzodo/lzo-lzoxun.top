let datas = {
    Data: [
        {
            name:'防抖与节流',
            type:'jc',
            tosumup:[
                '防抖:如果一个动作后会触发某个方法,当连续发生触发方法的动作时,如果两个动作间隔时间小于指定时间,则取消前一个动作触发方法的操作',
                '节流:如果一个动作后会触发某个方法,当第一次触发成功,再次触发如果在指定时间内,则取消该方法执行,再次触发如果大于指定时间再执行该方法'
            ],
            jsCode:[{lang:'javascript',code:`

            /*
             * (1) 防抖
             * 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
             * 每次触发事件时都取消之前的延时调用方法
             *
             */
            
            function debounce(fn) {
                let timeout = null; // 创建一个标记用来存放定时器的返回值
                return function() {
                    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
                    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
                        fn()
                    }, 500);
                };
            }

            function sayHi() {
                console.log('防抖成功');
            }

            var inp = document.createElement('input');
            inp.addEventListener('input', debounce(sayHi)); // 防抖
            console.log(inp);
            document.body.appendChild(inp);

            /*
             * （2）节流
             *  高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
             *  每次触发事件时都判断当前是否有等待执行的延时函数
             *
            */
            function throttle(fn) {
                let canRun = true; // 通过闭包保存一个标记
                return function() {
                    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
                    canRun = false; // 立即设置为false
                    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
                        fn.apply(this, arguments);
                        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
                        canRun = true;
                    }, 500);
                };
            }

            function sayHi(e) {
                console.log(e.target.innerWidth, e.target.innerHeight);
            }
            window.addEventListener('resize', throttle(sayHi));


                `}
            ]
        },
        {  
            name:'class 封装 拖拽',
            type:'al',
            jsCode:[{lang:'html',code:`
            <body>
                <div id='modelc' class='model'>
                    <div id='dialgoObj' class="dialgoObj">拖拽对象</div>
                    <div id='dialgoObj2' class="dialgoObj">拖拽对象2</div>
                </div>
            </body>
                `},{lang:'javascript',code:`
            class Dialog {
                constructor(maskid, dialogid) {
                    this.isMoving = false //判断鼠标是否是在拖动对象上按下的
                    this.dialog //定义一个对象容器
                    this.maskid = maskid //接收maskid
                    this.dialogid = dialogid //接收拖拽对象id

                    this.startX
                    this.startY
                    this.currentX
                    this.currentY
                }
                open() {
                    let model = document.querySelector('#' + this.maskid);
                    model.addEventListener('click', this.close.bind(this))

                    this.dialog = document.querySelector('#' + this.dialogid);
                    this.dialog.addEventListener('click', e => { e.stopPropagation() }) //阻止事件冒泡防止冒到遮罩隐藏了

                    //绑定鼠标在对象上按下，移动抬起要做的事情
                    this.dialog.addEventListener('mousedown', this.handleMousedown.bind(this))
                    document.addEventListener('mousemove', this.handleMousemove.bind(this))
                    document.addEventListener('mouseup', this.handleMouseup.bind(this))
                }
                close() {
                    //取消绑定鼠标在对象上按下，移动抬起要做的事情
                    this.dialog.removeEventListener('mousedown', this.handleMousedown)
                    document.removeEventListener('mousemove', this.handleMousemove)
                    document.removeEventListener('mouseup', this.handleMouseup)

                    document.body.removeChild(document.querySelector('#' + this.maskid)) //移除遮罩
                }
                handleMousedown(evnet) {
                    this.isMoving = true  //鼠标按下

                    //使对象移动后距离左边的距离 = 移动的距离(this.currentX - event.clientX) 加上 本来就距离左边的距离(offsetLeft)
                    this.startX = event.clientX - this.dialog.offsetLeft;
                    this.startY = event.clientY - this.dialog.offsetTop;
                    console.log(this.startX,this.startY)

                }
                handleMousemove(event) {
                    if(!this.isMoving){
                       return;
                    }
                    this.currentX = event.clientX;
                    this.currentY = event.clientY;

                    //计算xy改变的距离 + 鼠标按下时对象左上的距离 
                    var left = this.currentX - this.startX;
                    var top = this.currentY - this.startY;

                    // 限制移出可视区
                    var bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
                    var bodyHeight = document.documentElement.clientHeight || document.body.cliengHeight;
                    if(left <= 0){
                        left = 0;
                    }else if(left >= bodyWidth - this.dialog.offsetWidth){
                        left = bodyWidth - this.dialog.offsetWidth;
                    }
                    if(top <= 0){
                        top = 0;
                    }else if(top >= bodyHeight - this.dialog.offsetHeight){
                        top = bodyHeight - this.dialog.offsetHeight
                    }

                    this.dialog.style.left = left + 'px';
                    this.dialog.style.top = top + 'px';
                }
                handleMouseup(event) {
                    this.isMoving = false //鼠标抬起
                    document.removeEventListener('mousemove', this.handleMousemove);
                    document.removeEventListener('mouseup',this.handleMouseup);

                }
            }
            let dialog = new Dialog('modelc', 'dialgoObj')
            let dialog2 = new Dialog('modelc', 'dialgoObj2')
            dialog.open()
            dialog2.open()
                `},{lang:'css',code:`
            <style type="text/css">
            .model {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: rgba(0, 0, 0, .3);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .dialgoObj {
                padding: 20px;
                background-color: white;
                cursor: pointer;
                position: absolute;
                left:0;
                top:0;
            }
            </style>
                `}
            ]
        },
        {
            name:'js 内存管理',
            type:'jc',
            note:'JavaScript是在创建变量（对象，字符串等）时自动进行了分配内存，并且在不使用它们时“自动”释放。 释放的过程称为垃圾回收。 内存生命周期一般都是 分配 执行(读写) 释放三个步骤的',
            
        },
        {
            name:'js 严格模式',
            type:'jc',
            note:"通过 'use strict' 设置严格模式,放在某个作用域最前面",
            tosumup:[
              '消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;',
            　　'消除代码运行的一些不安全之处，保证代码运行的安全；',
            　　'提高编译器效率，增加运行速度；',
            　　'为未来新版本的Javascript做好铺垫'
            ],
        },
        {
            name: "301重定向与302的差别,与应用场景",
            type: "jc",
            tosumup: [
                '13250255782',
                '301 永久重定向',
                '302 临时重定向',
                '301应用场景: 域名到期不想继续用这个,换了地址',
                '302应用场景: 做活动时候,从首页跳到活动页面'
            ],
        },
        {
            name: "事件对象位置坐标属性",
            type: 'jc',
            jsCode: [{ lang: 'javascript', code: `
            event.clientX、event.clientY

            // 鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性

            event.pageX、event.pageY

            // 类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。

            event.offsetX、event.offsetY

            // 鼠标相对于事件源元素（srcElement）的X,Y坐标

            event.screenX、event.screenY

            // 鼠标相对于用户显示器屏幕左上角的X,Y坐标
                ` }]
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
            jsCode: [{ lang: 'javascript', code: `
        /* 一.sort排序规则,return大于0则交换数组相邻2个元素的位置
         *    
         *
         * 二.arr.sort(function (a,b) {})中
         *    a -->代表每一次执行匿名函时候，找到的数组中的当前项；
         *    b -->代表当前项的后一项；
         */

        // 数组
        var arr = [-50,-12,0,1,15,7];

        // 默认法,缺点: 根据字符串中字符的UTF-16编码顺序来进行排序
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
                ` }]
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

        })
        console.log(str); //AbCdEf
                ` }]
        },
        {
            name: '闭包',
            type: "jc",
            note: "两个互相嵌套的函数，内部函数如果被return出来就形成了闭包 或 函数当做子参数传入其他函数中 或者说 闭包就是指有权访问另一个函数作用域中的变量的函数",
            warning: [
                '外部可以访问行数内部变量',
                '同一个闭包赋值给多个变量，彼此都是独立的互不影响',
                '通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止'
            ],
            jsCode: [{ lang: 'javascript', code: `
            // 创建闭包最常见方式，就是在一个函数内部创建另一个函数。下面例子中的 closure 就是一个闭包
            function test(){
                var a = 1,b = 2;
                function closure(){
                    return a+b;
                }
                return closure;
            }

            // =================================================
            function makeAdder(x) {
                return function(y) {
                    return x + y;
                };
            }

            var add5 = makeAdder(5);
            var add10 = makeAdder(10);

            console.log(add5(2));  // 7
            console.log(add10(2)); // 12

            // 释放对闭包的引用
            add5 = null;
            add10 = null;

            // ====================================================
            //闭包出来for循环中i的问题
            var arr = [];
             for(var i=0;i<4;i++){
                arr[i] = (function(n){
                    return function(){
                        console.log(n);
                    }
                })(i)  
                /*
                 * 如果不立即执行,那么数组arr[i]只是存了一个函数定义,没有执行就不会取i,等执行的时候去取i已经是最后一个了
                 * 每次匿名函数表达式执行时, 都会保存一个不同的n ，return语句中的匿名函数每次也引用着不同的n。
                */
             }
             console.log(arr[0]())  
             console.log(arr[1]())
             console.log(arr[2]())
             console.log(arr[3]())

             // ===============================================
             function fun(n,o){
                console.log(n,o);
                return {
                    fun2: function(m){
                        return fun(m,n);
                    }
                };
             }

             var a = fun(0);  // ?
             a.fun2(1);        // ?        
             a.fun2(2);        // ?
             a.fun2(3).fun2(4);        // ?

             var b = fun(0).fun2(1).fun2(2).fun2(3);  // ?
             var c = fun(0).fun2(1);  // ?
             c.fun2(2);        // ?
             c.fun2(3); 
                ` }]
        },
        {
            name: "bind方法",
            type: "jc",
            jsCode: [{ lang: 'javascript', code: `
        let obj = {};

        let test = function(){
          console.log(this)
        }.bind(obj)

        let test2 = function(){
          console.log(this);
        }

        test(10,20);  //{}
        test2.bind(obj)();  //{}
                ` }]
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
