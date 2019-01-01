import { Api ,Tool} from '../../utilities';
import { Toast } from 'mint-ui';

const DevInfoMutations = {
  state: {

  },
  actions: {
    ['getMovieInfo']({ commit, state }, params) { //调用豆瓣接获取信息口
      Api.getMovieInfo(params[0].codes).then(function(res) {
        params[1](res);
      })
    },
    ['getToken']({ commit, state }, params) { 
      Api.getToken().then(function(res) {
        params(res);
      })
    },
    ['youdaoAPI']({ commit, state }, params) { //调用有道接口
      Api.youdaoAPI(params[0]).then(function(res) {
        params[1](res);
      })
    },
  },
  mutations: {
  
  },
}
export default DevInfoMutations
