const testList = require('./test.js');

// console.log(testList);
const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 4000,
  path: '/websocket'
});

wss.on('connection', function connection(ws) {
  console.log('client connected');

  ws.send('Welcome to the websocket server!');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    startFn();
  });
});


// 模拟服务端主动发送消息给客户端

const startFn = () => {
  let i = 0
  const timeFn = setInterval(() => {

    let obj = testList[i];
    if (!obj) {
      clearInterval(timeFn);
      return
    }
    i++
    wss.clients.forEach(function each(client) {
      console.log('----')
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(obj));
      }
    });
  }, 2000);
}