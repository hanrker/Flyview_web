
var lockReconnect = false; //避免重复连接
// var ws; //websocket的实例
var tt;

function createWebSocket(url) {
  try {
    var ws = new WebSocket(url); //创建
    init(ws);
  } catch (e) {
    console.log('catch');
    reconnect();
	
  }
}

function init(ws) {
  ws.onclose = function () {
    console.log('onclose');
    reconnect();
  };
  ws.onerror = function () {
    console.log('onerror');
    reconnect();
  };
  ws.onopen = function () {
    console.log('onopen');
    //心跳检测重置
    heartCheck.start();
  };
  ws.onmessage = function (event) {
    //拿到任何消息都说明当前连接是正常的
    console.log("onmessage");
    handleMessageEvent(event);
    heartCheck.start();
  }
}

function reconnect(url) {
  if (lockReconnect) {
    return;
  };
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  tt && clearTimeout(tt);
  tt = setTimeout(function () { //每隔4s连接一次
    createWebSocket();
    lockReconnect = false;
  }, 4000);
}
//心跳检测
var heartCheck = {
  timeout: 60 * 1000,
  timeoutObj: null,
  serverTimeoutObj: null,
  start: function () {
    console.log('close old and start timeout heart check');
    var self = this;
    this.timeoutObj && clearTimeout(this.timeoutObj);
    this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
    this.timeoutObj = setTimeout(function () {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      console.log('heartbeat');
      ws.send("heartbeat|" + id);
      self.serverTimeoutObj = setTimeout(function () {
        console.log('serverTimeoutObj');
        ws.close();
      }, self.timeout);

    }, this.timeout)
  }
}
// createWebSocket();

function handleMessageEvent(event) {
  var data = event.data;
  if (data == 'heartbeat') { //心跳
    console.log('heartbeat receive');
    // 心跳包
    return;
  }
  data = JSON.parse(data);
  switch (data.code) {
    case 11000:
      console.log("connect success ");
      return data.result;
    case 11001:
      var totalClick = data.result.totalClick;
      var sortClick = data.result.sortClick;
      $("#totalClick").text(totalClick);
      $("#currentMonthClick").text(data.result.monthClick);
      for (var i = 0; i < sortClick.length; i++) {
        sortClick[i].name = sortClick[i].itemName;
        sortClick[i].value = sortClick[i].frequency;
        sortClick[i].percent = sortClick[i].value * 100 / totalClick;
      }
      initHotClickChart(sortClick);
      initTrendLineChart(data.result);
      return;
    case 11002:
      initTerminalInfo(data.result);
      return;
    case 11003:
      initLawer(data.result);
      return;
    case 11004:
      initWeather(data.result);
      return;
  }
}
