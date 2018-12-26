import Axios from './Ajax';

// 正在热映 ：https://api.douban.com/v2/movie/in_theaters 

// 即将上映 ：https://api.douban.com/v2/movie/coming_soon 

// TOP 250 ：https://api.douban.com/v2/movie/top250

// 电影详情 ：https://api.douban.com/v2/movie/subject/:id

const getMovieInfo = 'https://api.douban.com/v2/movie/us_box';
const getToken = 'http://api.huihezn.com/securityApi/auth/login?username=123456&password=111111&t=' + new Date().getTime();
const BaseApi = {
  getMovieInfo: (count) => { //获取豆瓣电影接口
    switch(count){
      case 1:
             return Axios.jqAjax('https://api.douban.com/v2/movie/in_theaters');
             break;
      case 2:
             return Axios.jqAjax('https://api.douban.com/v2/movie/coming_soon');
             break;
      case 3:
             return Axios.jqAjax('https://api.douban.com/v2/movie/top250');
             break;
      default:
             return Axios.jqAjax('https://api.douban.com/v2/movie/subject/'+count);
             break;
    }
  },
  getToken:() => { 
     return Axios.res('get',getToken);
  }
 }
export default BaseApi;
