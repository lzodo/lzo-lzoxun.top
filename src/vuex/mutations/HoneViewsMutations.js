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
  },
  mutations: {
  
  },
}
export default DevInfoMutations
