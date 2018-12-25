import { Api ,Tool} from '../../utilities';
import * as DevinfoTypes from '../types/devinfo.types';
import { Toast } from 'mint-ui';

import xfdToast from '../../components/dialog/index';

const DevInfoMutations = {
  state: {
    DevData: '',
    map: '',
    massMarks: '',
    InfoWindow: '',
    mapCallBack: '',
    mapDatas: [],
    DevIp: '',
  },
  actions: {
    [DevinfoTypes.DEVINFO_GETDEV]({ commit, state }, params) { //获取数据
      Api.showDeviceAll().then(function(response) {
        state.DevData = response.data.result;
        state.mapDatas = [];
        for (let item in state.DevData) {
          if (state.DevData[item].lng != null || state.DevData[item].lat != null) {
            state.mapDatas.push(Tool.listItem(state.DevData[item]));
          }
        }
        xfdToast.loading.open();
        commit(DevinfoTypes.SMETMET) //调用mutation方法
        params(state.mapDatas); //回调
      })
    },
    [DevinfoTypes.SER_DEVBY]({ commit, state }, params) { //搜索设备
      Api.showDeviceBy(params[0]).then(function(res) {
        params[1](res);
      })
    },
  },
  mutations: {
    [DevinfoTypes.SMETMET](state, data) { //设置地图
      state.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 9, //级别
      });

    AMap.plugin([
        'AMap.ToolBar',
    ], function(){
        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        state.map.addControl(new AMap.ToolBar({
            // 简易缩放模式，默认为 false
            liteStyle: true,
            offset: new AMap.Pixel(17, 150),
        }));
    });
      this.commit(DevinfoTypes.ADDMARKERS) //mutatiion间方法相互调用


    },
    [DevinfoTypes.ADDMARKERS](state, data) { //添加点标记
      let _this = this;
      let style = [{
          url: './static/images/Online.png',
          size: new AMap.Size(22, 28),
          anchor: new AMap.Pixel(13, 8)
        },
        {
          url: './static/images/Offline.png',
          size: new AMap.Size(22, 28),
          anchor: new AMap.Pixel(13, 8)
        },
        {
          url: './static/images/Warning.png', // 图标地址
          size: new AMap.Size(22, 28),
          anchor: new AMap.Pixel(13, 8)
        },
        {
          url: './static/images/Errey.png',
          size: new AMap.Size(22, 28),
          anchor: new AMap.Pixel(13, 8)
        }
      ];

      state.massMarks = new AMap.MassMarks(state.mapDatas, {
        opacity: 1,
        zIndex: 999,
        cursor: 'pointer',
        style: style
      });
      state.massMarks.on('click', function(e) {
        _this.commit(DevinfoTypes.CREAT_MARKERS, e);
      });
      state.massMarks.setMap(state.map);
      xfdToast.loading.close();
    },
    [DevinfoTypes.CREAT_MARKERS](state, e) { //穿件信息窗体，弹出详细链接入口

      if (e.data) {
        e = e.data;
      } else {
        e = e;
      }
      /*信息窗体*/
      let lnglat = new AMap.LngLat(e.lnglat.lng, e.lnglat.lat);
      let info = [];
      state.map.setCenter(lnglat);
      for (let i in e.dname) {
        //info.push("<a href='" + process.env.Wx_Path + "DeviceDetInfo?ucode=" + e.dname[i][0] + "'>" + e.dname[i][1] + "</div>");
        info.push("<a href='" + location.origin + "/#/DeviceDetInfo?ucode=" + e.dname[i][0] + "'>" + e.dname[i][1] + "</div>");

      }

      state.InfoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(-17, -7),
        content: info.join("<br/>"), //使用默认信息窗体框样式，显示信息内容
      });

      state.InfoWindow.setPosition(lnglat);
      state.InfoWindow.open(state.map);

    }
  },
}
// Action 提交的是Mutations,可以是异步操作。
// Mutations 是修改数据的，必须同步。
// 组件里调用Actions,然后Actions触发Mutations,最终Mutations修改数据。
export default DevInfoMutations
