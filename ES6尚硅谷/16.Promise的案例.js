const fs = require('fs');
const p = new Promise((resolve, reject) => {
    fs.readFile('./为Promise准备的文件/小1.md', (err, data) => {
        resolve(data)
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./为Promise准备的文件/小2.md', (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./为Promise准备的文件/小3.md', (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then((value) => {
    console.log(value.toString());
})

const pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('成功了1');
        resolve('成功了1')
    }, 2000)
})
pro.then(function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('成功了2');
            resolve('成功了2' + value)
        }, 2000)
    })
}).then(function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('成功了3');
            resolve('成功了3' + value)
        }, 2000)
    })
}).then(function (value) {
    console.log(value);
})
