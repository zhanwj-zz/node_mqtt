const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 7003

server.listen(port, function () {
    console.log('server started and listening on port ', port)
})

// 配置身份验证
aedes.authenticate = function (client, username, password, callback) {   
    callback(null, (username === 'admin' && password.toString() === '123456'));
}

//客户端建立连接触发的事件
aedes.on('client', function (client) {
    console.log('Client Connected: ' + (client ? client.id : client) + ' to broker', aedes.id);
});

//客户端订阅触发的事件
aedes.on('subscribe', function (packet, client) {
    console.log("subscribe topic:"+packet[0].topic)
    console.log('Subscribe Client:' + (client ? client.id : client));        
});
//客户端断开连接触发的事件
aedes.on('clientDisconnect', function (client) {
    console.log('Disconnected Client: ' + (client ? client.id : client) + 'to broker', aedes.id);
});

