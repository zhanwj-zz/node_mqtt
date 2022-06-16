var mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://118.123.14.36:7003',{
        username: "admin",
        password: '123456',
        clientId:"client_02"          //定义客户端的名称
});
/*
QoS，0，1，2
  QoS0，最多一次送达。
  QoS1，至少一次送达。
  QoS2，准确一次送达。
*/
//监听连接
client.on("connect", function() {
  console.log("client02 连接服务器连接成功");  
 /*
  topic：订阅的名称
  ops：{ qos: 1 }
 */
  client.subscribe("client02", { qos: 1 }); //订阅主题为test的消息
});

//监听数据
client.on("message", function(topic, message) {
  console.log("当前topic：", topic);
  console.log("client-2 获取数据成功：", message.toString());
  client.publish("client01", "我是 client-2的数据 ", { qos: 1,retain: true});  
});
