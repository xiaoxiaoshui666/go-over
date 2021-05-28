const fs = require('fs');
// fs.readFile('./为Promise准备的文件/小2.md', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
const p = new Promise(function (resolve, reject) {
    fs.readFile('./为Promise准备的文件/小3.md', (err, data) => {
        // 如果读取文件失败
        if (err) reject(err);
        // 读取文件成功
        // 调resolve函数可以修改promise对象状态为成功，往里面传参可以设置成功的值
        resolve(data);
    })
})
p.then(function (vlaue) {
    console.log(vlaue.toString());
}, function (reason) {
    console.log("reason");
})