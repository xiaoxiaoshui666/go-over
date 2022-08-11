```s
1, isNaN()---判断是否为数字型，返回: true 不是数字 或者 false 是数字
2, 字符串.length---检测字符串的长度
3, typeof 变量---判断是哪种数据类型    
3, a instanceof b---a属不属于b ，属于为ture 不属于为false
4, 转换为字符串型---① 数值型.toString()  ②String(数值型)  ③加号拼接字符串 如 数值型 + ''
5, 转换为数字型---①parseInt(字符串)-取整-去单位  ②parseFloat(字符串)-浮点数  ③Number(字符串)
### 6, Math 数学对象
    Math.max(1, 4, 5)---返回一组数的最大值,参数中有一个参数无法被转换成数字，则会返回 NaN
    // Math.max.apply(Math, [1, 53, 2, 44])   可用apply方法传入一个数组
    Math.floor(1.9)---1 向下取整,往最小了取值
    Math.ceil(1.2)---2 向下取整,往最大了取值
    Math.random()---返回随机数，这个数是浮点数在0(包括0)和1(不包括1)之前的数 ,括号不写参数
    Math.pow(2, 10)---返回1024  是2的10次方     // ES6新增2 ** 10 也是2的10次方

### 7, Date 日期对象   是一个构造函数来实例化日期对象
    new Date()---没有参数返回则系统当前时间
    var date = new Date();  实例化对象的，必写！！！
    date.getFullYear()---返回当前日期的年
    date.getMonth()---返回当前日期的月     返回的月份小1  记得要+1
    date.getDate()---返回当前日期的日
    date.getDay()---返回当前日期的周      周一返回的1 周日返回的是0
    date.getHours()---时
    date.getMinutes()---分
    date.getSeconds()---秒
    时间戳，从1970年1月1号到现在过了多少毫秒数---①date.valueOf()
                                           ---②date.getTime()
                                           ---③+new Date()     常用
                                           ---④Date.now()      H5新增

### 8, Array数组对象
    检测是否为数组---①数组 instanceof Array  是数组返回true 不是返回false
                 ---②Array.isArray(参数)   是数组返回true 不是返回false    H5新增
    Array.push(参数)---在数组末尾添加一个或多个数组元素，修改了原数组  并返回新数组的长度
    Array.unshift(参数)---在数组最前面添加一个或多个数组元素，修改了原数组  并返回新数组的长度
    Array.pop()---删除数组最后一个元素括号，无参数，数组长度减1、修改原数组，返回删除的元素的值
    Array.shift()---删除数组第一个元素括号，无参数，数组长度减1、修改原数组，返回删除的元素的值
    Array.reverse()---翻转数组
    Array.sort( function (a, b) {return a - b;}))按照升序的顺序排列---翻转数组
    Array.sort( function (a, b) {return b - a;}))按照降序的顺序排列---翻转数组
    Array.indexOf(参数)---返回数组元素索引号的方法，只返回第一个满足条件的索引号，没找到返回-1
    Array.toString()---将数组转换为字符串
    Array.join(分隔符)---将数组转换为字符串 且字符串之间用分隔符号分隔，注意()里记得加''号
    Array.splice(第几个开始,要删除个数)---数组删除splice()，返回被删除项目的新数组，影响原数组
    Array1.concat(Array2)---拼接数组
    // ES6
    Array.forEach(function(数组当前项的值value, 索引i, 数组对象本身array){})---遍历数组
    Array.filter(function(value, i, array){
        return
    })---创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，
    主要用于筛选数组,  注意返回的是新数组
    Array.some(function(value, i, array){
        return
    })---检测数组中的元素是否满足指定条件.通俗点查找数组中是否有满足条件的元素，返回值是布尔值,如果查找到这个元素,就返回true，如果查找不到就返回false.如果找到第一个满足条件的元素,则终止循环不在继续查找
    Array.map(function(value , i, array){
        return
    })---返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
    Array.includes(参数)---判断参数是否存在数组中，存在返回true，不存在返回fasle 类似indexOf
    Array.reduce(function(),当前元素)---方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值  【可以专门用来做条件统计的，比如年纪大于18岁的有几个，订单金额在一万块钱的有几个】

### 9, 字符串对象
    根据字符串的不变性，字符串的所有的方法都不会修改字符串本身，操作返回的是新的字符串
    String.indexOf(参数,index)---返回字符串索引号，后加数字表示从索引号是index的开始找满足条件的
    String.charAt(index)---根据索引号返回字符
    String.charCodeAt(index)---根据索引号返回字符的ASCII码
    String.[]中括号里面跟索引号---根据索引号返回字符   H5新增
    String.substr('截取的起始位置','截取几个字符')---截取字符串，从几个索引号开始截取几个字符
    String.replace(被替换的字符,替换为的字符)---替换字符， 只替换第一个字符
    String.split('&')---将字符串转换为数组   (以字符串中出现的&为分隔)
    String.trim()---从一个字符串的两端删除空白符 ， 不影响元字符串本身，返回的是一个新的字符串
    String.padStart(num, '') | padEnd()---某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全     'x'.padStart(5, 'ab')--'ababx'
    6.toString().padStart(2, '0')--'06'可用于倒计时，时分秒中的分秒前面补0

### 10, 对象 
    Object.defineProperty(对象名, '属性名', {
        value: '属性值',      (属性有就修改，属性没有就新增)
        writable: false,      (默认为false， 让为true时，不允许修改这个属性名)
        enumerable: false,    (默认的值是 false， 如果值为false则不允许遍历)
        configurable: false,  (默认的值是 false， 如果为false则不允许删除这个属性,不允许在修改第三个参数里面的特性)
    })
    Object.keys(对象名)---返回一个数组， 由对象的属性名组成的数组     键
    Object.values(对象名)---返回一个数组， 由对象的属性值组成的数组   值
    Object.entries(对象名)---返回一个数组，而数组的每个成员也是一个数组，数组包含属性名和属性值  [['ID', 1], ['color', 'red'] ,['szie', 'big']]   可结合 map使用
    Object.assign(新对象名, 旧对象名)---把旧对象拷贝给新对象但是是浅拷贝
    Object.is(a, b)---判断a,b两个值是否完全相等 与===类似但是如NaN返回就true，===返回为false
    Object.assign()---用于对象的合并，如果第一个参数为{}，则可对后面的对象参数进行拷贝
    Object.get()
    Object.create(新创建对象的原型对象名)---方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__  ，返回一个新对象，带着指定的原型对象和属性   可用于实现子继承父的方法
    
### 11, Number数值对象
    Number.EPSILON---最小精度，当浮点数小于这个数时可以忽略取整
    Number.isFinite(num)---检测一个数值是否为有限数
    Number.isNaN(num)---检测一个数值是否为 NaN
    Number.parseInt('num字符串')---字符串转整数  例如Number.parseInt('5211314love')
    Number.parseFloat('num字符串')---字符串转整数  例如Number.parseFloat('3.1415926神奇')
    Number.isInteger(num)---判断一个数是否为整数
    Math.trunc(num)---将数字的小数部分抹掉
    Math.sign(num)---判断一个数到底为正数 负数 还是零    正数返回1 负数返回-1 零返回0
### 12.JSON
    JSON.stringify()---方法用于将 JavaScript 值转换为 JSON 字符串。

reduce




### 
unshift
filter
forEach
shift
splice
indexOf
includes