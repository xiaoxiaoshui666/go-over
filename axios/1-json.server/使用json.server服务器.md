https://github.com/typicode/json-server

1. cnpm i -g json-server

2. 创建一个db.json文件
    {
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
    }

3. 在db.json文件下打开终端运行    不能运行的前面加npx
    json-server --watch db.json

4. 在3000端口号 http://localhost:3000/posts/