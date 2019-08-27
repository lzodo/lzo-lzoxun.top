import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store/store'
import { Api, Tool } from '../utilities'
import Modeules from '../controller/index'


Vue.use(Router)

const route = [{
  path: '/',
  component: resolve => require(['@/controller/Hone_views/hv_index'], resolve),
  children: [
      {
        path:'/',
        components: {
            HvViews2: resolve => require(['@/controller/Hone_views/hv_childVindex'],resolve) //视图名:显示的组件
         },
      },
      {
        path:'/HvChildVindex',
        name:'HvChildVindex',
        components: {
            HvViews2: resolve => require(['@/controller/Hone_views/hv_childVindex'],resolve) 
         },
      },
       {
        path:'/HvResume',
        name:'HvResume',
        components: {
            HvViews2: resolve => require(['@/controller/Hone_views/hv_resume'],resolve) 
         },
      },
       {
        path:'/HvWorks',
        name:'HvWorks',
        components: {
            HvViews2: resolve => require(['@/controller/Hone_views/hv_works'],resolve) 
         },
      },
       {
        path:'/HvSkill',
        name:'HvSkill',
        components: {
            HvViews2: resolve => require(['@/controller/Hone_views/hv_skill'],resolve) 
         },
      },
      {
         path: '/HvMovie',
         name: 'HvMovie',
         components: {
            HvViews2: resolve => require(['@/controller/Hone_views/hv_movie'],resolve) //视图名:显示的组件
         },
      },
    ]
  },
  {
    path: '/HvIndex',
    name: 'HvIndex',
    component: resolve => require(['@/controller/Hone_views/hv_index'], resolve)
  },
  {
    path: '/CvIndex',
    name: 'CvIndex',
    component: resolve => require(['@/controller/Case_views/cv_index'], resolve),
    children:[
      {path:'/filterNumber',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/js/filterNumber'],resolve)}},
      {path:'/Css_Grid',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/css/Css_Grid'],resolve)}},
      {path:'/Css_Flex',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/css/Css_Flex'],resolve)}},
      {path:'/Css_Flex',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/css/Css_Flex'],resolve)}},
      {path:'/JS_DataInter',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/js/JS_DataInter'],resolve)}},
      {path:'/JS_nodejs',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/js/JS_nodejs'],resolve)}},
      {path:'/PY_Document',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/python/PY_Document'],resolve)}},
      {path:'/Linux',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/other/Linux'],resolve)}},
      {path:'/question',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/other/question'],resolve)}},
      {path:'/vim',components: {CvViews3: resolve => require(['@/controller/Case_views/demo/other/vim'],resolve)}},
    ]
  },
  {
    path: '/HvErrey',
    name: 'HvErrey',
    component: resolve => require(['@/controller/Hone_views/hv_errey'], resolve)
  },
]
const router = new Router({
  routes: route
})

router.beforeEach((to, from, next) => {
  let admin = window.localStorage.getItem("isAdmin");
  if(admin != null){
      if(admin == 'false'){
        store.state.admin = false;
      }else{
        store.state.admin = true;
      }
  }else{
    store.state.admin = false;
  }
  store.state.thisRouter = to.path;

  console.log(store.state.thisRouter)
  switch (to.name) { //设置标题
    case 'HonePage':
      Tool.setTitle("首页");
      break;
    default:
      Tool.setTitle("学习资料总结");
      break;
  }

  if (true) {
    next();
  } else {
    if (to.path === '/notTokenPage') {
      next();
    } else {
      next({
        path: '/notTokenPage'
      })
    }
  }
})

export default router;
