// js输入输出以及换行和字符拼接锻炼
/* var myName = prompt('请输入姓名');
var age = prompt('请输入年龄');
var sex = prompt('请输入性别');
alert('您的姓名是:' + myName + '\n' + '您的年龄是:' + age + '\n' + '您的性别是:' + sex);
 */

/* // js 判断分支语句if else 的练习----判断输入的年份是否是闰年。
/* var year = prompt('请输入年份');
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('今年是闰年')
} else {
    alert('今年是平年');
}
 */

/* js 根据姓名判断是否中奖 */

/* var myName = prompt('请输入姓名');
if (myName === '刘德华') {
    alert('您中了5块钱');
} else {
    alert('您没有中奖');
} */

// 多分支语句if else if  练习
// 判断输入的成绩等级、
/* var age = prompt('请输入成绩');
if (age >= 90) {
    alert('A')
} else if (age >= 80) {
    alert('B');
} else if (age >= 70) {
    alert('C');
} else if (age >= 60) {
    alert('D');
} else {
    alert('E');
}; */



//三元表达式练习  输入数字判断是否大于10，小于10前面补0.
/* var number1 = prompt('请输入一个0-59的数字');
var result = number1 > 10 ? number1 : '0' + number1;
alert(result); */

//switch 分支语句 练习。
/* switch (8) {
    case 1:
        console.log('这是1');
        break;
    case 2:
        console.log('这是2');
        break;
    case 3:
        console.log('这是3');
        break;
    case 4:
        console.log('这是4');
        break;
    default:
        console.log('没有匹配');
        break;
} */



//switch 语句练习，输入水果获取价格。

/* var fruit = prompt('请输入水果');
switch (fruit) {
    case '苹果':
        alert('苹果3.5/斤');
        break;
    case '西瓜':
        alert('西瓜2.5/斤');
        break;
    case '香蕉':
        alert('香蕉5.6/斤');
        break;
    default:
        alert('没有此水果');
        break;
} */

// 分支语句练习 1  输入时间，判断中午还是晚上
/* var time = prompt('请输入时间');
if (time > 18 && time < 24) {
    alert('深夜好！');
} else if (time > 0 && time < 12) {
    alert('早上好！');
} else if (time > 12 && time < 18) {
    alert('下午好！');
} else {
    alert('您输入的时间不正确!');
} */

// 分支语句练习2  比较用户输入的两个值的最大值。
/* var number1 = prompt('请输入第一个数字');
var number2 = prompt('请输入第二个数字');
if (number1 > number2) {
    alert(number1);
} else {
    alert(number2);
} */

//分支语句练习3 输入一个数，判断是奇数还是偶数
/* var number1 = prompt('请输入一个数字');
if (number1 % 2 == 0) {
    alert(number1 + '为偶数')
} else {
    alert(number1 + '为奇数');
} */


//分支语句练习4 根据输入的数字返回星期几

/* var number5 = prompt('请输入数字');
switch (parseInt(number5)) {
    case 1:
        alert('星期一');
        console.log('星期一');
        break;
    case 2:
        alert('星期二');
        break;
    case 3:
        alert('星期三');
        break;
    case 4:
        alert('星期四');
        break;
    case 5:
        alert('星期五');
        break;
    case 6:
        alert('星期六');
        break;
    case 7:
        alert('星期日');
        break;
    default:
        alert('输入的数字过大');
        break;
} */


//分支语句练习5， 判断输入的金额。
/* var myMoney = prompt('请输入班长口袋里的金额');
if (myMoney >= 2000) {
    alert('我请大家吃西餐！');
} else if (myMoney >= 1500) {
    alert('我请大家吃快餐！');
} else if (myMoney >= 1000) {
    alert('我请大家喝饮料！');
} else {
    alert('我请大家吃棒棒糖！');
} */

//分支语句练习6， 判断输入的分数给出等级
/* var result = prompt('请输入成绩');
if (result >= 90) {
    alert('A');
} else if (result >= 80) {
    alert('B');
} else if (result >= 70) {
    alert('C');
} else if (result >= 60) {
    alert('D');
} else {
    alert('E')
} */

// fo 循环联系-- -- -- - 求1 - 100之前所有数的整数和
/* var sum = 0;
for (var i = 1; i <= 100; i++) {
    console.log(sum = sum + i);
}
console.log(sum); */

//求1-100之间所有数的平均值；
/* 
var sum = 0,
    avriage = 0;
for (var i = 1; i <= 100; i++) {
    sum = sum + i;
}
avriage = sum / i;
console.log(avriage); */



// 求1-100之间的所有奇数的和和偶数的和
/* var even = 0,
    odd = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        even = even + i;
    } else {
        odd = odd + i;
    }
}
console.log(even, odd, even + odd); */




// 求1-100之间能被3整除的所有数的和
/* var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        sum = sum + i;
    }
}
console.log(sum); */


// 输入一个班级人数number1，弹出number1 个获取分数的窗口，将获取到的分数存储到score中，并且需要从字符串转为数字。然后计算求和和平均数
/* var sum = 0;
var number1 = prompt('请输入班级人数');
for (var i = 1; i <= number1; i++) {
    var score = prompt('请输入第' + i);

    sum = sum + parseInt(score);
}
alert(sum);
alert(sum / number1); */

/* var num = prompt('请输入需要打印的数字');
var str = '';
for (var i = 1; i <= num; i++) {
    str = str + '★';
}
console.log(str); */


// 打印出rows行，cols列的星星。
/* var rows = prompt('请输入行数');
var cols = prompt('请输入列数');
var str = '';
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
        str = str + '☆';
    }
    str += '\n';
}
console.log(str); */


// 打印倒三角
/* var str = '';
for (var i = 1; i <= 10; i++) {
    for (var j = i; j <= 10; j++) {
        str = str + '☆';
    }
    str += '\n';
}
console.log(str); */

// 打印正三角形
/* var str = '';
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= i; j++) {
        str = str + '☆';
    }
    str += '\n';
}
console.log(str); */


//打印九九乘法表
/* var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str += j + '×' + i + '=' + j * i + '\t';
    }
    str += '\n';
}
console.log(str); */


// do while 练习，打印人的一生
/* var i = 0;
do {
    console.log(i + '岁了');
    i++;
} while (i <= 100); */

//计算1-100之间所有整数的和
/* var i = 0;
var sum = 0;
do {
    sum = sum + i
    i++;
} while (i <= 100);
console.log(sum); */

// 弹出输入框判断爱不爱我。
/* 
do {
    var str = prompt('你爱我吗？');
} while (str !== '我爱你');
alert('我也爱你！'); */
/* 
// continue 是结束当前次的循环，再跳转到i++上循环。
// break是退出整个循环。不再执行循环
// 求出1-100之内的不能被7整除的所有数的和
var sum = 0;
for (i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    }
    sum = sum + i;
}
console.log(sum); */

// for循环的-------------------work

// 1-100之间所有数字的总和和平均值
/* var sum = 0;
var avriage = 0;
for (var i = 0; i <= 100; i++) {
    sum = sum + i;
}
avriage = sum / i;
console.log(sum);
console.log(avriage); */

// 2.求1-100之间所有偶数的和。
/* var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(sum); */

// 3.求100之内所有7的倍数的总和。
/* var sum = 0;
for (i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        sum = sum + i;
    }
}
console.log(sum); */

// 4.用for循环打印出4行5列的★
/* 
    1,4行5列的矩阵。每行5个。内部for循环执行5次
*/
/* var sum = '';
for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 5; j++) {
        sum = sum + '★';
    }
    sum += '\n';
}
console.log(sum); */

// 5.使用for循环打印三角形、
/* var sum = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        sum = sum + '★';
    }
    sum += '\n';
}
console.log(sum); */


// 6.使用for循环打印9*9乘法表。
/* var sum = 0;
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= i; j++) {
        sum += j + '×' + i + '=' + i * j + '\t';
    }
    sum += '\n';
}
console.log(sum); */

// 7.接收用户输入的用户名和密码，然后判断是否为：admin ，123456、如果是提示登录成功。如果不是一直输入。

/* 
for (i = 1; i <= i + 1; i++) {

    var userName = prompt('请输入用户名');
    var pwd = prompt('请输入密码');
    if (userName == 'admin' && pwd == '123456') {
        alert('登录成功！');
        break;
    }

} */



// 8.求1-100的所有数的累加值，但是需要跳过所有个位为3的数，用continue做。
/* var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 10 == 3) {
        continue;
    }
    sum = sum + i;
}
console.log(sum); */


//9.ATM机案例
/*   1.存钱
       2.取钱
       3.显示余额
       4.退出
 */
/* 
var money = 100;
while (true) {
    var num = prompt('请输入您要的操作' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.显示余额' + '\n' + '4.退出' + '\n');
    switch (parseInt(num)) {
        case 1:
            var money1 = prompt('请输入您要存款的金额');
            money = money + parseInt(money1);
            alert('您的余额是' + money + '元')
            break;
        case 2:
            money1 = prompt('请输入您要取钱的金额');
            money = money - money1;
            alert('您的余额为：' + money + '元');
            break;
        case 3:
            alert('您的余额为：' + money + '元');
            break;
        case 4:
            alert('您正在退出！');
            break;
    }
    if (num == 4) {
        break;
    }
} */

// 数组练习，创建一个数组星期一到星期日，然后打印出星期日
/* var Weekdays = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
for (var i = 0; i < Weekdays.length; i++) {
    console.log(Weekdays[i]);
} */

// 数组练习，获取一个数组中的最大值。

/* var arr = [1, 4, 7, 9, 17, 29, 5, 42, 32, 99, 87, 56];
var max = arr[0];
for (var i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max); */

// 数组练习，获取一个数组中的最小值。
/* 
var arr = [99, 4, 7, 9, 17, 29, 5, 42, 32, 87, 56];
var min = arr[0];
for (var i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min); */


//在数组里面存入1-10的值；

/* var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1[i] = i + 1;
}
console.log(arr1); */

//把数组里面大于10的数字选出来放入一个新的数组。

/* var arr = [23, 32, 54, 1, 8, 98, 12, 42, 7, 9, 87, 3];
var arr1 = [];
var j = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        arr1[j] = arr[i];
        j++;
    }
}
console.log(arr1);
console.log(arr.length); */

// 方法二   用新数组arr1的长度.length来判断新数组的下标。.length的长度是自动判断自增。
/* var arr = [23, 32, 54, 1, 8, 98, 12, 42, 7, 9, 87, 3];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        arr1[arr1.length] = arr[i];
    }
}
console.log(arr1); */
/* 
var arr = [23, 0, 54, 1, 8, 98, 0, 42, 7, 9, 0, 3];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr1[arr1.length] = arr[i];
    }
}
console.log(arr1); */


// 把数组的值反过来存成一个新的数组里面。
/* var arr = ['red', 'green', 'blue', 'pink', 'purple'];
var arr1 = [];
for (var i = arr.length - 1; i >= 0; i--) {
    arr1[arr1.length] = arr[i];
}
console.log(arr1); */

//函数的练习  1，计算1-100的累加和

/* function getSum() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
getSum(); */

// 利用函数求任意两个数的和
/* 
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(23, 33)); */

//利用函数求任意两个数之间的所有数的和

/* function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(1, 100)); */

// 求任意两个数的最大值

/* function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(max(59, 23)); */
// 方法二，用三元运算符来简化代码、
/* function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(max(59, 23)); */

// 利用函数求数组中的最大值。
/* 
function getArryMax(arr) {
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var re = getArryMax([23, 0, 54, 1, 8, 98, 109, 42, 7, 9, 0, 3]);
console.log(re);
 */

// 函数练习，一个函数实现任意两个数组的任意运算。

/* var num1 = parseInt(prompt('请输入第一个数'));
var suanfa = prompt('请输入运算符');
var num2 = parseInt(prompt('请输入第二个数'));
var re = 0;

function jia(num1, num2) {
    re = num1 + num2;
}

function jian(num1, num2) {
    re = num1 - num2;
}

function chen(num1, num2) {
    re = num1 * num2;
}

function chu(num1, num2) {
    re = num1 / num2;
}
if (suanfa == '+') {
    console.log(jia(num1, num2));

} else if (suanfa == '-') {
    console.log(jian(num1, num2));

} else if (suanfa == '*') {
    console.log(chen(num1, num2));

} else if (suanfa == '/') {
    console.log(chu(num1, num2));

}
alert(re); */

// 函数练习计算出两个数的最大值。
/* 
var num1 = parseInt(prompt('请输入第一个数'));
var num2 = parseInt(prompt('请输入第二个数'));

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
var re = getMax(num1, num2);
alert(re);
 */

// 函数练习 计算出任意一个数的最大值，弹出运算结果。
/* 
function getMax() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(getMax(1, 2, 3));
console.log(getMax(1, 2, 9, 232, 14, 545));
console.log(getMax(1, 212, 321, 45, 67, 666)); */

// 函数练习 数组反转


/* function getArr(arr) {
    var newArry = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArry[newArry.length] = arr[i];
    }
    return newArry;
}
var arr1 = getArr([23, 54, 1, 8, 98, 109, 42, 7, 9, 3]);
console.log(arr1);
var arr2 = getArr(['red', 'pink', 'wang', 'chang']);
console.log(arr2); */

// 函数练习，判断输入的年份是闰年还是平年

/* function getYear(years) {
    var flag = false;
    if (years % 4 == 0 && years % 100 !== 0 || years % 400 == 0) {
        return true;
    }
    return flag;
}
console.log(getYear(2000));
console.log(getYear(2009));
console.log(getYear(2020)); */

// 对象的练习，创建一个狗对象，用；
/* var obj = {
    uname: '王可可',
    age: 19,
    sex: '男',
    type: '阿拉斯加',
    color: 'red',
    bark: function() {
        console.log('汪汪汪');
    },
    showFile: function() {
        console.log('十面埋伏');
    }
}
console.log(obj.age);
console.log(obj.uname);
console.log(obj.sex);
console.log(obj['type']);
console.log(obj['color']);
obj.bark();
obj.showFile(); */

/* var obj = new Object();
obj.name = '名人';
obj.sex = '男';
obj.age = 18;
obj.skill = function() {
    console.log('隐分身');
}
console.log(obj.name);
console.log(obj['sex']);
console.log(obj.age);
obj.skill(); */


// 利用构造函数创建两个英雄联系
/* 
function Hero(uname, type1, blood1) {
    this.namne = uname;
    this.type = type1;
    this.blood = blood1;
    this.attack = function(gongji) {
        console.log(gongji);
    }
}
var lp = new Hero('廉颇', '力量型', '500血量');
console.log(lp.namne);
console.log(lp.type);
console.log(lp.blood);
lp.attack('近战');

var houyi = new Hero('后裔', '射手型', '100血量');
console.log(houyi.namne);
console.log(houyi.type);
console.log(houyi.blood);
houyi.attack('远程');
console.log(lp);
console.log(houyi); */
/* 
var obj = {
    name: '王二',
    sex: '女',
    age: 19,

}

for (var k in obj) {
    console.log(k);
    console.log(obj[k]);
} */
if (true) let x;
x = 1;