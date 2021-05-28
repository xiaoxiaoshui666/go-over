const fs = require('fs');
function Xiaoyi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./为Promise准备的文件/小1.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
function Xiaoer() {
    return new Promise((resolve, reject) => {
        fs.readFile('./为Promise准备的文件/小2.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
function Xiaosan() {
    return new Promise((resolve, reject) => {
        fs.readFile('./为Promise准备的文件/小3.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
async function main() {
    const yi = await Xiaoyi();
    const er = await Xiaoer();
    const san = await Xiaosan();
    console.log(yi.toString());
    console.log(er.toString());
    console.log(san.toString());
}
main()
