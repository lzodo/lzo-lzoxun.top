/*-工具类-*/
export default class Tool {
  constructor() {}



  //时间转换
  static dateFormat(val) {
    let value = new Date(val);
    let year = value.getFullYear();
    let month = this.padDate(value.getMonth() + 1);
    let day = this.padDate(value.getDate());
    let hour = this.padDate(value.getHours());
    let minutes = this.padDate(value.getMinutes());
    let seconds = this.padDate(value.getSeconds());
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
  }
  static padDate(val) {
    val = val < 10 ? '0' + val : val;
    return val
  }


  //获取?后面所有参数
  static getUrlParams() {
    let url = window.location.search;
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
      let str = url.substr(1);
      let strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }

  //一字一字出来效果
  static littleChar(str,show,time) {
    // var story = document.getElementById('word');
    // var  = document.getElementById('show');
    let i = 0;
    let timer = setInterval(function() {
      show.innerHTML = str.substring(0, i);
      i++;
      if (show.innerHTML == str) {
        clearInterval(timer);
      }
    }, time);
  }


  //滚动到底部
  static scrollpage(ele, pageEle, top, callback) {
    $(ele).scroll(function(e) {
      var scrollTop = $(this).scrollTop();
      var docHeight = $(document).height();
      var pageHeight = $(pageEle).height() + top;
      if (scrollTop + docHeight == pageHeight) {
        callback()
      }
      console.log('======================')
      console.log(scrollTop)
      console.log(docHeight)
      console.log(scrollTop + docHeight)
      console.log(pageHeight)
      console.log('======================')
    });
  }
  //返回?后面指定的参数
  static getQueryString(Paras) {
    return this.getUrlParams()[Paras]
  }

  /**
   * 设置标题页
   */
  static setTitle(title) {
    document.title = title ? title : '';
    var mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
      var iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.setAttribute('src', '');
      var iframeCallback = function() {
        setTimeout(function() {
          iframe.removeEventListener('load', iframeCallback);
          document.body.removeChild(iframe);
        }, 0);
      };
      iframe.addEventListener('load', iframeCallback);
      document.body.appendChild(iframe);
    }
  }

  //获取经纬度
  static getLatLong(callback){
      // 检测浏览器是否支持地理定位功能
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
       
      } else {
        alert('浏览器不支持定位功能！');
      }
       
      // 得到坐标信息
      function showPosition(position)
      {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        callback({'long':longitude,'lat':latitude})
      }
       
      // 得到错误信息
      function showError(error)
      {
        switch(error.code) 
        {
        case error.PERMISSION_DENIED:
          alert("用户拒绝对获取地理位置的请求。");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("位置信息是不可用的。");
          break;
        case error.TIMEOUT:
          alert("请求用户地理位置超时。");
          break;
        case error.UNKNOWN_ERROR:
          alert("未知错误。");
          break;
        }
      }
  }

  //获取当前设备ip 开发阶段使用
  // static getIPs(callback) {
  //   var ip_dups = {};
  //   var DevIp = '';

  //   //compatibility for firefox and chrome
  //   var RTCPeerConnection = window.RTCPeerConnection ||
  //     window.mozRTCPeerConnection ||
  //     window.webkitRTCPeerConnection;

  //   //bypass naive webrtc blocking
  //   if (!RTCPeerConnection) {
  //     var iframe = document.createElement('iframe');
  //     //invalidate content script
  //     iframe.sandbox = 'allow-same-origin';
  //     iframe.style.display = 'none';
  //     document.body.appendChild(iframe);
  //     var win = iframe.contentWindow;
  //     window.RTCPeerConnection = win.RTCPeerConnection;
  //     window.mozRTCPeerConnection = win.mozRTCPeerConnection;
  //     window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
  //     RTCPeerConnection = window.RTCPeerConnection ||
  //       window.mozRTCPeerConnection ||
  //       window.webkitRTCPeerConnection;
  //   }

  //   //minimal requirements for data connection
  //   var mediaConstraints = {
  //     optional: [{ RtpDataChannels: true }]
  //   };

  //   //firefox already has a default stun server in about:config
  //   //    media.peerconnection.default_iceservers =
  //   //    [{"url": "stun:stun.services.mozilla.com"}]
  //   var servers = undefined;

  //   //add same stun server for chrome
  //   if (window.webkitRTCPeerConnection)
  //     servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };

  //   //construct a new RTCPeerConnection
  //   var pc = new RTCPeerConnection(servers, mediaConstraints);

  //   //listen for candidate events
  //   pc.onicecandidate = function(ice) {

  //     //skip non-candidate events
  //     if (ice.candidate) {

  //       //match just the IP address
  //       var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
  //       var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];

  //       //remove duplicates
  //       if (ip_dups[ip_addr] === undefined)
  //         callback(ip_addr);
  //       return 5;

  //       ip_dups[ip_addr] = true;
  //     }
  //   };

  //   //create a bogus data channel
  //   pc.createDataChannel("");

  //   //create an offer sdp
  //   pc.createOffer(function(result) {

  //     //trigger the stun server request
  //     pc.setLocalDescription(result, function() {}, function() {});

  //   }, function() {});
  // }
  // // //Test: Print the IP addresses into the console
  // // getIPs(function(ip){console.log(ip);});




}
