var mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://118.123.14.36:7003',{
        username: "admin",
        password: '123456',
        clientId:"client_01"          //定义客户端的名称
});
/*
QoS，0，1，2
  QoS0，最多一次送达。
  QoS1，至少一次送达。
  QoS2，准确一次送达。
*/
//监听连接
client.on("connect", function() {
  console.log("client01 连接服务器连接成功");  
 /*
  topic：订阅的名称
  ops：{ qos: 1 }
 */
  client.subscribe("client01", { qos: 1 }); //订阅主题为test的消息
});

//监听数据
client.on("message", function(topic, message) {
  console.log("当前topic：", topic);
  console.log("client-1 获取数据成功：", message.toString());
});
