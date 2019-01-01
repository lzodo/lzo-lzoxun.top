import Axios from './Ajax';

const getMovieInfo = 'https://api.douban.com/v2/movie/us_box';
const getToken = 'http://api.huihezn.com/securityApi/auth/login?username=123456&password=111111&t=' + new Date().getTime();
const BaseApi = {
  getMovieInfo: (count) => { //获取豆瓣电影接口
    switch(count){
      case 1:
             return Axios.jqAjax('https://api.douban.com/v2/movie/in_theaters');// 正在热映 
             break;
      case 2:
             return Axios.jqAjax('https://api.douban.com/v2/movie/coming_soon');// 即将上映
             break;
      case 3:
             return Axios.jqAjax('https://api.douban.com/v2/movie/top250');// TOP 250 
             break;
      default:
             return Axios.jqAjax('https://api.douban.com/v2/movie/subject/'+count);// 电影详情 
             break;
    }
  },
  getToken:() => { 
     return Axios.res('get',getToken);
  },
  youdaoAPI:(opts)=>{
    return Axios.jqAjax('http://openapi.youdao.com/api',{
      'q':opts.q,
      'from':'auto',
      'to':'auto',
      'salt':opts.salt,
      'appKey':'0bb93b5b0493d77f',
      'sign':opts.sign
    });
  },
 }
export default BaseApi;
