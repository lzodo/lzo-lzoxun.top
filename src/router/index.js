import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store/store'
import { Api, Tool } from '../utilities'
import Modeules from '../controller/index'


Vue.use(Router)

const route = [{
    path: '/',
    component: resolve => require(['@/controller/Hone_views/hv_index'], resolve),
    children:[
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
      Tool.setTitle("仲勋的博客--web前端");
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
