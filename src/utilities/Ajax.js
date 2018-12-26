// import axios from 'axios';
import store from '../vuex/store/store';
import router from '../router'
import xfdToast from '../components/dialog/index';

/*--服务类AJAX-Promise--*/
class Axios {
  constructor() {}

  static res(typ e, url, param) {
      let resParam = {};
      // Toast.loading.open();
      if (param) {
        resParam = {'method': type, 'url': url, 'data': param }
      } else {
        resParam = {'method': type, 'url': url }
      }
      return axios(resParam).then(function(response) {
            return response;
        })
        .catch(function(error) {
            console.log(error);
        });
  } 

  static jqAjax(url,callback){
    return $.ajax({
        url:url,
        type:'get',
        dataType:'jsonp', //指定服务器返回的数据类型
        success: function (data) {
            return data;
        }
    });
  }
}

export default Axios;
