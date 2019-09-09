let datas = {
 Data: [
  {
    name: 'vue题型',
    url: "",
    link: '/question?pagtag=page_vue_topic',
    type: 'Javascript And Vue'
  },
  {
    name: '资源连接',
    url: "",
    link: '/question?pagtag=page_links',
    type: 'Other'
  },
  {
    name: 'js题型',
    url: "",
    link: '/question?pagtag=page_js_topic',
    type: 'Javascript And Vue'
  },
  {
    name: '前端所有题型',
    url: "",
    link: '/question?pagtag=page_all_topic',
    type: 'All Codes'
  },
  {
    name: 'vue util',
    url: "",
    link: '/question?pagtag=page_vue_util',
    type: 'Javascript And Vue'
  },
  {
    name: 'Css_Grid基本布局',
    url: './static/images/demo/Css_Grid.jpg',
    link: '/Css_Grid',
    type: 'Css To Css3'
  },
  {
    name: 'Css_Flex基本布局',
    url: '',
    link: '/Css_Flex',
    type: 'Css To Css3'
  },
  {
    name: 'JS数据交互',
    url: '',
    link: '/JS_DataInter',
    type: 'Javascript And Vue',
  },
  {
    name: 'JS_nodejs相关',
    url: "",
    link: '/JS_nodejs',
    type: 'Javascript And Vue'
  },
  {
    name: 'Linux 资料',
    url: "",
    link: '/Linux',
    type: 'Other'
  },
  {
    name: '文档组件说明',
    url: "",
    link: '/question?pagtag=page_pointdoc',
    type: 'Other'
  },
  {
    name: 'vim',
    url: "",
    link: '/vim',
    type: 'Other'
  },
  ]
}
let urls = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
]
let types = [
  "Javascript And Vue",
  "Css To Css3",
  "Html To Html5",
  "Python",
  "Other",
]
function seturl() {
  let wartLength =100;
  let addcount = wartLength-datas.Data.length;
  let datalength = datas.Data.length;

  if (datas.Data.length < wartLength) {
    for (let i = 0; i < addcount; i++) {
      datas.Data.push(
        {
          name: `(${i+datalength +1})、案例不够,模板来代`,
          url: '',
          link: '404.thml',
        },
      )
    }
  }
  datas.Data.map(function (item, index) {
    if (!item.url) {
      //Math.floor(Math.random()*n) //获取0到n的随机整数
      item.url = './static/images/defuImg/' + urls[Math.floor(Math.random() * urls.length)];
    }
    if (!item.type) {
      item.type = types[Math.floor(Math.random() * types.length)];
    }
  })

}
seturl();
export default datas;
