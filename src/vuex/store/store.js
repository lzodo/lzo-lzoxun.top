import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import DevInfoMutations from '../mutations/DevInfoMutations';
import HoneViewsMutations from '../mutations/HoneViewsMutations';
import {Data} from '../../utilities';


const state = {
   thisRouter:'',
   notdata_url:'./static/images/notdata.png', //没得到数据小图标
   notpowe_url:'./static/images/notpower.png', //没权限图标
   admin:'',

   isPosition:false,
   ArticData:Data.ArticData
}
const actions = {
    increment ({ commit, state }) {
      console.log(state)
      state.globalTitle = 'you';
      Tool.getIPs(function(ip){console.log(ip)});
      //context.commit('increment')
    },
  }

export default new Vuex.Store({
  state,
  actions,
  modules:{
    DevInfoMutations,
    HoneViewsMutations
  }
})
