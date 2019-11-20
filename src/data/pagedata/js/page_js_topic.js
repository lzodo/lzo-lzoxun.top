let datas = {
    Data: [
        {
            name:'XSS',
            tag:['web安全'],
            note:'XSS攻击是Web攻击中最常见的攻击方法之一，它是通过对网页注入可执行代码且成功地被浏览器 执行，达到攻击的目的，形成了一次有效XSS攻击，一旦攻击成功,就能对网站进行恶意操作了',
            tosumup:[
                'XSS需要具备连个条件:　　一、需要向web页面注入恶意代码，二、这些恶意代码能够被浏览器成功的执行。',
            ],
            jsCode:[{
                lang:'javascript',code:`
                //如果前端需要显示代码的话可以先转义
                const escapeHTML = str =>
                    str.replace(
                        /[&<>'"]/g,
                        tag =>
                        ({
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            "'": '&#39;',
                            '"': '&quot;'
                        }[tag] || tag)
                    );

                    escapeHTML('<a href="#">Me & you</a>'); 
                `
            }],
        },
        {
            name:' CSRF',
            tag:['web安全'],
            tosumup:[
                '用户C打开浏览器，访问受信任网站A，输入用户名和密码请求登录网站A；',
                '在用户信息通过验证后，网站A产生Cookie信息并返回给浏览器，此时用户登录网站A成功，可以正常发送请求到网站A；',
                '用户未退出网站A之前，在同一浏览器中，打开一个TAB页访问网站B；',
                '网站B接收到用户请求后，返回一些攻击性代码，并发出一个请求要求访问第三方站点A；',
                '浏览器在接收到这些攻击性代码后，根据网站B的请求，在用户不知情的情况下携带Cookie信息，向网站A发出请求。网站A并不知道该请求其实是由B发起的，所以会根据用户C的Cookie信息以C的权限处理该请求，导致来自网站B的恶意代码被执行。 ',
            ],
        },
        {
            name:'什么是跨域?',
            tag:['web安全'],
            note:'由于同源策略(same-origin policy)规定将协议/主机/端口都相同,视为具有相同的源,如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。即便两个不同的域名指向同一个ip地址，也非同源,跨域是指一个域下的文档或脚本试图去请求另一个域下的资源'
        },
        {
            name:'JS事件循环 Event Loop',
            tag:['浏览器运行机制'],
            note:'Event Loop 与 浏览器渲染进程(浏览器内核),五个中的JS引擎线程、事件触发线程、定时触发器线程、异步http请求线程有关,而GUI渲染线程主要负责布局和绘制等,或重绘回流时也会执行,它与JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。',
            tosumup:[
                'JS分为同步任务和异步任务',
                '同步任务都在主线程(JS引擎线程)上执行，形成一个执行栈',
                '主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件',
                '主线程之外, 异步http请求线程理着一个任务队列,栈中的代码调用某些api时，它们也会在事件队列中添加各种事件（当满足触发条件后，如ajax请求完毕)',
                '主线程之外, 定时触发器线程理着一个任务队列,当使用setTimeout或setInterval时，它需要定时器线程计时，计时完成后就会将特定的事件推入事件队列中(第二个参数中标准低于4ms的时间间隔算为4ms,有些了浏览器会不一致)',
                '一旦执行栈中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行',
                '如此循环',
                '注意，总是要等待栈中的代码执行完毕后才会去读取事件队列中的事件'
            ],
            warning:[
                '任务类型分为macrotask(task 宏任务)和microtask(jobs 微任务)',
                '宏任务:可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行),会在一个宏任务执行结束后，在下一个 宏任务 执行开始前，对页面进行重新渲染',
                '微任务:可以理解是在当前宏任务执行结束后立即执行的任务(在当前宏任务任务后，下一个宏任务之前，也就是在渲染之前执行的任务)',
                '所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染',
                '也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask(微任务列队)都执行完毕（在渲染前）',
                '主要微任务有Promise，process.nextTick(node中process.nextTick优先级高于Promise)'
            ],
        },
        {
            name:'对象深浅克隆?',
            tosumup:[
                '浅克隆:复制对象第一层属性,如果第一层中某个属性的值还是一个对象,这边复制的还是属于引用地址,新对象会影响老对象',
                '深克隆:完全克隆老对象,与克隆出的对象互不影响'
            ],
        },
        {
            name:'webpack 中 loader 和 plugin 的区别是什么?',
            tag:['webpack'],
            tosumup:[
                'loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。',
                'plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务'
            ],
        },
        {
            name:'js 对象转基本类型',
            tag:['类型转换'],
            tosumup:[
                '如果转换与数值有关',
                '对象转基本类型,如果有重置[Symbol.toPrimitive],和valueOf与toString会先调用[Symbol.toPrimitive],如果[Symbol.toPrimitive]返回的不是原始值会再继续调用valueOf,如果还不是原始值就会调用toString,如果还不是原始值就会报错',
                '如果没有[Symbol.toPrimitive]并且有valueOf和toString方法，先调用valueOf,如果valueOf返回的不是原始值会再继续调用toString,如果还不是原始值就会报错',
                '如果没有valueOf并且有toString方法会调用toString方法,如果返回值不是原始值也会报错',
                '得到这两个方法的返回值进行类型转换',
                '如果转换与字符串更相关toString优先级打印valueOf,但[Symbol.toPrimitive]还是最高德',
            ],
            jsCode:[{lang:'javascript',code:`
            var obj = {
                toString () {
                    console.log('toString')
                    return 
                },
                valueOf () {
                    console.log('valueOf')
                    return {}
                },
                // [Symbol.toPrimitive] () {
                //     console.log('primitive')
                //     return 'primi'
                // }
            }
            console.log(String(obj)) //先toString
            console.log(Number(obj)) //先valueOf
            //console.log('1' + obj) //数值运算先valueOf
            `}]

        },
        {
            name:'[] == ![]?',
            tag:['类型转换'],
            tosumup:[
                '[]转换为数字为0',
                '![] 首先是转换为布尔值，由于[]作为一个引用类型转换为布尔值为true,',
                '![]为false，进而在转换成数字，变为0',
                '0 == 0'
            ],

        },
        {
            name:'Object.is(a,b) 与 a === b 的差别?',
            tag:['方法'],
            note:'判断更为准确一些,如+0和-0，NaN和NaN',
            jsCode:[{lang:'javascript',code:`
                console.log(Object.is(-0,+0)) //false
                console.log(-0 === +0) //true
                
                console.log(Object.is(NaN,NaN)) //true
                console.log(NaN === NaN) //false
            `}]

        },
        {
            name:'parseInt(string, radix)',
            type:'fn',
            tag:['函数','测试','基础'],
            note:'方法将字符转十进制数值,string 需要转换的字符, radix基数指定string是几进制,如parseInt(4f,16),16代表前面字符串是十六进制数,方法将字符转十进制数值,string 需要转换的字符, radix基数指定string是几进制,如parseInt(4f,16),16代表前面字符串是十六进制数'
        },
        {
            name:'js 兼容问题',
            tag:['兼容性'],
            jsCode:[{lang:'javascript',code:`
            //标准 与 IE
            //事件冒泡
            stopPropagation 与 cancelBubble

            function stopPropagation(e){
                e=window.event||e;
                if(document.all){  //只有ie识别
                    e.cancelBubble=true;
                }else{
                    e.stopPropagation();
                }
            }

            //函数监听 
            addEventListener、removeEventListener 与   attachEvent 、detachEvent

            //事件对象   
            e 与 window.event 

            //获取事件的源对象
            e.target 与 e.srcElement
            
            //获取可视区宽度(？？)
            document.documentElement.clientwidth和document.body.clientWidth
                `}
            ],
            links: [
                {
                    title: '相关链接',
                    val: [
                        { name: '浏览器兼容', href: 'https://juejin.im/post/59a3f2fe6fb9a0249471cbb4#heading-21' },
                        { name: '兼容问题2', href:'https://www.cnblogs.com/zhoudawei/p/7497544.html'},
                        { name: '兼容问题3', href:'https://www.jianshu.com/p/f971aae86f4d'}
                    ]
                },
            ],
        },
        {
            name:'dom事件流',
            tosumup:[
                'IE提出事件冒泡:目标元素 => body => html => document',
                '网景提出事件捕获:document => html => body => 目标元素',
                'DOM2 target.addEventListener(type, fn, boolean); 第三个参数设置false冒泡,true捕获 默认false',
                'IE9之前使用attachEvent(on + type,fn);直接用自己的冒泡了,所以没有第三个参数'
            ],
            warning:[
                '这说明 DOM0级(直接在标签上或直接给元素onclick那种)添加事件。后面的事件会覆盖前面的事件，而 DOM2级则不会，多个事件都会执行；'
            ],
            jsCode:[{lang:'javascript',code:`
            function addEvent(node, type, handler) {
                if(!node) return false;
                if(node.addEventListener) {
                    node.addEventListener(type, handler, false);
                    return true;
                }
                else if(node.attachEvent) {
                    node['e' + type + handler] = handler;
                    node[type + handler] = function() {
                        node['e' + type + handler](window.event);
                    };
                    node.attachEvent('on' + type, node[type + handler]);
                    return true;
                }
                return false;
             }
             
             function removeEvent(node, type, handler) {
                if(!node) return false;
                if(node.removeEventListener) {
                    node.removeEventListener(type, handler, false);
                    return true;
                }
                else if(node.detachEvent) {
                    node.detachEvent('on' + type, node[type + handler]);
                    node.[type + handler] = null;
                }
                return false;
             }
             
             e.stopPropagation(); e.cancelBubble=true;(ie) //阻止事件冒泡
             e.preventDefault(); //阻止默认事件
                `}
            ],
            links: [
                {
                    title: '相关链接',
                    val: [
                        { name: 'dom 事件流', href: 'https://juejin.im/post/5a731204f265da4e8a31b9f6' },
                        { name: '事件流2', href:'https://www.jianshu.com/p/f62e94479fbc'}
                    ]
                },
            ],
        },
        {
            name:'字符串转驼峰',
            note:'aaa-bbb-ccc-ddd 格式字符串转驼峰',
            jsCode:[{lang:'javascript',code:`
            let str = 'this-is-a-teststr';
            function tuofeng(str){
                // 切割 => 循环 => 取第一个转大写 => 加上字符串中第二个开始的字符 => join连接
                return str.split('-').map((item,index)=>{ 
                if(index == 0){
                    return item;
                }else{
                    return item.charAt(0).toUpperCase() + item.substr(1,item.length-1)
                }
                }).join('')
            }
            console.log(tuofeng(str))
                `}
            ]

        },
        {
            name:'a==1&&a==2&&a==3',
            tag:['类型转换'],
            note:'对象与数字比较,对象转字符串会先调用toString方法',
            tosumup:[
                '通过新建对象toString方法实现',
                '通过Object.defineProperty实现'
            ],
            jsCode:[{lang:'javascript',code:`

            // 通过私有toString
            let a = {
                value:0,
                toString(){
                    this.value = this.value + 2;
                    return this.value
                },
             }
             
             if(a==2&&a==4&&a==6){
                console.log('ok')
             }

             // ===================================================
             let a = [2,4,6];
             a.toString = a.shift; //从原始前面删除一个元素,并返回删除的元素

             if(a==2&&a==4&&a==6){
                console.log('ok')
             }

             // 通过definePropetry
             Object.defineProperty(window,"a",{
                get(){
                   this.val ? ++this.val : this.val = 1;
                   return this.val
                }, // 如果访问obj的a属性触发get
                set(newval){
                   console.log('set',newval);
                   // this.val = newval;
                }, // 如果设置obj的a属性触发set
            })

            if(a==1&&a==2&&a==3){
               console.log('ok')
            }
                `}
            ]

        },
        {
            name: 'js 数据类型',
            type: 'jc',
            note: '最新的 ECMAScript 标准定义了 8 种数据类型Boolean、Null、Undefined、Number、BigInt、String、Symbol 和 Object,通过typeof 操作数据 返回操作数据的类型(注意typeof null 返回object,函数 返回 function)',
            tosumup: [
                'Boolean => true 和 false',
                'Null => 类型只有一个值： null',
                'Undefined => 没有被赋值的变量',
                'Number',
                'BigInt => 使用 BigInt，您可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制',
                'String',
                'Symbol => 符号类型(Symbols)是ECMAScript 第6版新定义的。符号类型是唯一的并且是不可修改的,',
                'Object'
            ],
            links: [
                {
                    title: '相关链接',
                    val: [
                        { name: 'MDN JavaScript 数据类型', href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures' },
                        { name: 'MDN JavaScript typeof', href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof' },
                    ]
                },
            ],
        },
        {
            name: '块级作用域',
            note:'块级作用域 {},如for中的{},if中的,let支持块级作用域就是说{}中用let生明的变量出不来'
        },
        {
            name: 'substring、substr、slice的区别?',
            jsCode: [{
                lang: 'javascript', code: `
            /*
             * 都是从字符串中提取新的字符,
             * str.slice(start, end) 提取一个字符串(开始索引,结束索引)
             * str.substring(start, end) 提取一个字符串,end不支持负数(开始索引,结束索引)
             * 
             * str.substr(start, len) 提取一个长度为len的字符串(开始索引,截取长度)
             * substr 是可以负的
             * 
             * slice和substring
             *    slice的参数可以是负数(从后面开始数)，而substring如果有负值会当作0解析
             *    slice第一个参数不能比第二个小,substrin可以,放回两个下标之间的字符串
             * 
             */

             let str = 'this is a test';
             str.substring(1,1) // ""  slice 一样
             
             str.substring(0,-1) // ""
             str.slice(0,-1) // this is a tes

             str.substring(4,2) // is
             str.slice(4,2) // ""
                `}
            ]
        },
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
            name: "立即执行函数表达式(IIFE) 前缀特殊符号的意义？",
            type: "jc",
            note: "应为定义函数是不能直接执行的,而函数表达式可以,如果在前面加入符号，解析器就会以函数表达式的方式调用定义的函数",
            jsCode: [{ lang: 'javascript', code: `
        ( function(){ /* code */ }() );
        ! function(){ /* code */ }();
        ~ function(){ /* code */ }();
            ` }]
        },
        {
            name:'数组乱序',
            type:'sf',
            jsCode:[{lang:'javascript',code:`
            var arr = [1,2,3,4,5,6,7,8,9]

            function resetsort(arr,callback){
                let newarr = [];
                for(let i = 0; i < arr.length; i++){
                    setTimeout(() => {
                        newarr.push(arr[i]);
                        if(arr.length == newarr.length){
                            callback(newarr);
                        }
                    }, Math.floor(Math.random() * 1000)); // 打乱执行的时间,如果后面时间比前面时间小,就更早执行,起到乱序的作用
                }
            }
            resetsort(arr,function(newarr){
                console.log(newarr);
            });
            
            // ========================================

            function resetsort(arr){
                arr.sort(()=>{
                    return Math.random() - 0.5
                })
                return arr;
             }
             console.log(resetsort(arr));
                `}
            ]
        },
        {
            name:'数组push实现',
            tag:['算法','原生原理'],
            jsCode:[{lang:'javascript',code:`
            Array.prototype.pusha = function(val){
                //因为最后一个索引是this.length - 1;在加一个就是length了
                this[this.length] = val;
                //由于数组特性,执行完之后this.length会在原来的基础上自动加1
                return this.length; 
            }
            
            let arr2 = [8];
            console.log(arr2.pusha(3)); //与原生push一样
            console.log(arr2); //结果也与原生一样
            
            // 计算以下结果
            let obj = {
                2:3,
                3:4,
                length:2,
                push:Array.prototype.push
            
            };
            
            obj.push(1);
            // 因为this[this.length] = val; => obj.length = 1 => obj.2 = 1 => this.length自增1
            obj.push(2);
            // 因为this[this.length] = val; => obj.length = 2 => obj.3 = 2 => this.length自增1
            console.log(obj) //?
                `}
            ],
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
            name:'数组最大最小值',
            tag:['数组','算法'],
            tosumup:[
                '排序法:排序后取第一个或最后一个值',
                'Math.max.apply(Math, array)  => 必须全是数值,apply作用是让参数展开',
                'Math.max(...array)  => 必须全是数值,...array作用是让参数展开',
                '假设法:假设第一个最大,从数组第一项开始循环后面每一项,如何有比这个更大的就让最大值等于该项'
            ],
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
