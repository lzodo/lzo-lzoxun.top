let datas = {
    Data: [
        // {
        //     name: '钩子函数(生命周期函数)',
        //     tosumup: [
                
        //     ],
        // },
        {
            name: 'axios 拦截器',
            note: '发送请求 => inteceptor(拦截器) => 处理请求 => 接收响应 => inteceptor ==> 成功或失败回调',
            jsCode: [{ 
                lang: 'javascript', code: `
            // request拦截器 第一个请求拦截
            axios.interceptors.request.use(config => {
                if(store.state.token){ // 判断是否存在token，如果存在就给每个请求加上token
                    config.headers.Authorization = 'token ' + store.state.token;
                }
                return config;
            },err => {
                return Promise.reject(err)
            })

            // response 第二个响应拦截
                axios.interceptors.response.use(response => {
                    return response;
                },error => {
                    ......      
                })
                `}
            ]
        },
        {
            name: "vue style ?",
            tosumup:[
                'vue组件中通过lang设置样式语言,如css与处理器sass、less、stylus等',
                '通过scoped属性实现组件样式私有化,不会污染其他组件样式',
            ],
            warning:[
                '如果使用了scoped想要设置第三方组件库的样式时需要scoped穿透代码如下'
            ],
            jsCode:[{
                lang:'scss',
                code:`
            <style lang = 'scss' scoped >
                //scss less stylus 都能用 /deep/
                .warp /deep/ .zhujianstyle{
                    color:#f00;
                }

                //stylus  还能用 >>>
                .warp >>> .style{
                    color:#f00; 
                }
            </style>
                `
            }]
        },
        {
            name: "v-if , v-show 作用与差别",
            tosumup:[
                'v-if    创建删除元素',
                'v-show  显示隐藏元素',
                '一般频繁切换适合使用v-show,否则适合用v-if'
            ], 
            detailed:[
                'v-if 才是真正的条件渲染，可配合v-else,v-else-if 使用，只有当条件为true是才开始创建元素。v-show控制的元素一开始就存在页面上的，条件只是控制css显示隐藏元素的动作'
            ]

        },
        {
            name: "webpack loader",
            note:'webpack本身只能打包Javascript文件，对于其他资源例如 css，图片，或者其他的语法集比如jsx，是没有办法加载的。 这就需要对应的loader将资源转化，加载。',
            tosumup:[
                'loader类似一个资源转化器,将不同类型的文件进行翻译，返回webpack能够处理的有效模块', 
                '如果webpack想要除了vue文件,就需要安装并设置设置vue-loader,css等 设在方法如下:',
            ],
            jsCode:[{lang:"javascript",code:`
            module: {
                rules: [
                    {
                        test: /\.css$/,  // 正则匹配所有.css后缀的样式文件
                        use: ['style-loader', 'css-loader'] // 使用这两个loader来加载样式文件
                    }
                ]
            } 
                `}
            ],
        },
        {
            name: "移动端点击事件300s延迟问题",
            note:'移动的如@click 有300s延迟可通过fastclick插件处理',
            jsCode:[{lang:'shell',code:`
            npm install fastclick
            `},{lang:"javascript",code:`
            import FastClick from “fastclick”
            FastClick.attach(document.body)
                `}
            ]
        },
        {
            name: "NextTick的作用",
            note: "$nextTick 是在下次DOM更新循环结束后执行延迟回调(因为vue数据发生变化之后DOM并不是立刻就更新的,如果数据变化之后想要操作DOM这时的数据依然是旧的数据),所以在修改数据之后使用$nextTick,在它的回调中操作的就是更新后的DOM了",
            warning:[
                '应用场景:如果视图更新之后，需要基于这个试图进行操作的话使用',
            ],
            jsCode:[{lang:'javascript',code:`
                this.$nextTick(()=>{
                     console.log(this.$refs.newdom.innerHTML)
                })    

                //swiper
                watch:{
                    swiperList(){       
                        this.$nextTick(()=>{
                            new Swiper('.swiper-container')
                        })
                    }
                }
                `}
            ]
        },
        {
            name: "vue组件data为什么必须是函数",
            note: "由于javascript本身特性,如果data是一个对象,因为对象是引用类型，当改变数据时会影响到所以vue实例的数据，所以data用一个函数返回一个对象，这样每个实例data属性就是独立不会互相影响了"
        },
        {
            name: "$route和$router的区别?",
            tosumup:[
                '$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。',
                '$router是“路由实例”对象包括了路由的跳转方法，钩子函数等' 
            ]
        },
        {
            name:'vue组件插槽slot',
            tosumup:[
                'vue 插槽有可以直接使用的匿名插槽(直接在组件标签间写元素，组件中<slot></slot>位置显示的插槽)',
                '通过 name 与 slot 属性配对的具名插槽',
                '通货 say 与 slot-scopt配对传递数据的插槽' 
            ],
            jsCode:[{lang:'javascript',code:`
            //template 中调用 
            <about>
                <span>默认匿名插槽</span>
                <span slot = 'slotname'>这里的数据将会出现在name为slotname的slot标签位置</span>
                <span slot-scope='abc'>
                    {{abc}}
                </span>
            </about>
            
            //abotu组件中设置
            <slot></slot>
            <slot name='slotname'></slot>
            <slot say='saydata'></slot>
                `}
            ]
        },
        {
            name:'虚拟DOM(vdom)',
            tosumup:[
                '用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象(先用javascript对象方式模拟添加dom元素)',
                'diff 算法 — 比较两棵虚拟 DOM 树的差异；',
                'pach 算法 — 将两个虚拟 DOM 对象的差异一次性应用到真正的 DOM 树',

                '优势:相对于DOM 操作，js 计算是非常便宜的。',

                '适用于操作量大的项目'
            ]
        },
        {
            name: "vue中 key 值的作用？",
            note: "当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素到后面使用，而是把当前节点销毁再重建新的节点，使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素",
            tosumup:[
                'key主要作用是为了高效更新虚拟DOM',
                'key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点'
            ]
        },
    ]
}


export default datas;
