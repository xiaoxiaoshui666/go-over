//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// get格式请求
app.get('/server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('HELLO AJAX');
});
// POST格式请求
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('HELLO AJAX POST');
});
// JSON格式请求
app.all('/JSON-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name: '小红',
        age: 19
    }
    // 想把这个 data对象 传给 json.html文件中   send()方法里面可以接受字符串不能接受对象
    // 所以这里需要对这个对象进行字符串的转换
    let str = JSON.stringify(data);   // 利用JSON的stringify()方法转换为JSON格式字符串
    response.send(data);
});
// IE缓存
app.get('/ie', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    response.send('HELLO IE and AJAX');
});
// 请求超时
app.get('/delay', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    setTimeout(() => {
        response.send('hi')
    }, 4000)
});
// Jquery
app.all('/jquery-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    const ldh = { love: 'star' }
    //设置响应
    response.send(JSON.stringify(ldh));
});
// Jquery 通用ajax
app.all('/jquery-all-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 自定义设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应
    response.send('hi all jquery ajax');
    // 如果是json类型的
    // const star = { namea: 'ldh', nameb: 'gfc' };
    // response.send(JSON.stringify(star));
    // 请求超时
    // setTimeout(function () {
    //     response.send('已超时');
    // }, 3000)
});
// axios 
app.all('/asiox-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 自定义设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应
    const star = { namea: 'ldh', nameb: 'gfc' };
    response.send(JSON.stringify(star));
});
// fetch方法
app.all('/fetch-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 自定义设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应
    const stars = { namea: 'zxy', nameb: 'lm' };
    response.send(JSON.stringify(stars));
});

//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});