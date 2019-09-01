import Vue from 'vue'

//input只输入数字和点
Vue.prototype.filterNumber = function(e){
   // 通过正则过滤小数点后两位
  if(e.target.value != "" && e.key == '.' && -1 == e.target.value.indexOf('.')){
    //兼容火狐，数字输入框输入点 value 值自动隐藏‘.’，再进行正则会丢失‘.’
    return
  }
  if( e.target.value.toString() !== (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0])) {
    e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
  }
}

//获取随机颜色
Vue.prototype.getRandomColor =function(){ 
   return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
} 
