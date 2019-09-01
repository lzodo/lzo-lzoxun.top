let datas = {
    Data: [{
            name: "第一条",
            note: '这是一个描述信息,述信息,述信息,这真的只是一个描述信息啊啊没有其他作用的啊啊啊啊啊啊啊这真的只是一个描述信息啊啊没有其他作用的啊啊啊啊啊啊啊这真的只是一个述信息,这真的只是一个描述信息啊啊没有其他作用的啊啊啊啊啊啊啊描述信息啊啊没有其他作用的啊啊啊啊啊啊啊 啊啊啊啊。。。',
            links: [{
                    title: '相关链接',
                    val: [
                        { name: '百度', href: 'http://www.baidu.com' },
                        { name: 'Github', href: 'https://github.com' }
                    ]
                },
                {
                    title: '其他链接',
                    val: [
                        { name: '百度2', href: 'http://www.baidu.com' },
                        { name: 'Github2', href: 'https://github.com' }
                    ]
                },
            ],
            jsCode: [{
                lang: 'javascript',
                code: `
        let a = '5';
            //备注
        let b = '3';
        `
            }],

            listLinks: [

            ],
            twoList: [

            ],
            //img: 'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg',
            imgs: [
                { name: '加载 图一', src: '/static/images/loading.gif' },
                { name: '加载 图一', src: '/static/images/preview2.gif', cla: 'AllHeight' },
            ],
            warning: [
                "这是第一条特别提示", "这是第二条特别提示", "还有第三天提别提示第三条是如果很长的那种"
            ]
        },
        {
            name: "第二条",
            tableStyle: [{
                title: 'vue 这里如果有汉字',
                val: [
                    { obj: 'a 如果', note: 'zhe shi a' },
                    { obj: 'b 这里也有行子', note: 'zhe shi b' },
                    { obj: 'c', note: 'zhe shi c' },
                    { obj: 'dfdsafs', note: 'zhe shi d' },
                ]
            }, ],
        },
        {
            name: "第三条",
            tosumup:[
               '他是如何工作的呢?到底是怎么工作的呢他是如何工作他是如何工作的呢?到底是怎么工作的他是如何工作的呢?到底是怎么工作的他是如何工作的呢?到底是怎么工作的他是如何工作的呢?到底是怎么工作的他是如何工作的呢?到底是怎么工作的的呢?到底是怎么工作的',
               '第二点事正阳的',
               '然后可能还有第三条结论'
            ],
        },
        {
            name: "这是狠狠很很很很长的一条目录",
            detailed:[
               '这是第一个的详细描述',
               '第二个',
               '第三个'
            ]
        },
        {
            name: "第三条"
        },
        {
            name: "第三条"
        },
        {
            name: "第三条"
        },
        {
            name: "第三条"
        },
    ]
}


export default datas;
