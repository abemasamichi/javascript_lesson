//Q1
console.log('Q1')

console.log(numObj(100));

function numObj(num) {
    var neuObj = {
        odd: [],
        even: []
    }
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 1) {
            neuObj.odd.push(i) // oddは奇数
        } else {
            neuObj.even.push(i) // evenは偶数
        }
    }
    return neuObj;
}

// 引数に数字を入れ実行すると、0から引数で渡した数字までの「奇数・偶数で分けた連想配列」を戻り値（return）で返す関数を作った

//Q2
console.log('Q2')

var fruits = ['りんご', 'めろん', 'ぶどう'];
console.log(addFruits(fruits, 'すいか'));

//この場合
// obj1はりんご、めろん、ぶどう
// obj2はすいか を表す
function addFruits(obj1, obj2) {　
    obj1.push(obj2) //Obj1にObj2を追加する
    return obj1
}

// 第1引数に配列、第2引数に文字列を渡すと、 第1引数の配列の最後に第2引数で渡した文字列を追加した配列を戻り値（return）で返す関数を作る

//Q3
console.log('Q3')
console.log(randomNum(10));
// randomNumは引数のことを表す
// 引数に数字を入れると、1からその引数までの乱数を戻り値（return）で返す関数
function randomNum(num) {
    return Math.floor(Math.random() * num + 1)
}

//Q4
console.log('Q4')
console.log(randomRangeNum(3, 10));

function randomRangeNum(num1, num2) {
    // Math.floorは少数点以下を切る役割を果たす。
    // Math.randomは0から1までの乱数を表す。
    var num3 = Math.floor(Math.random() * (num2 - num1 + 1) + num1)
    // Math.floorで→の中の少数点以下を切る(Math.random × (num2(10) - num1(3))+ num1(3))
    // これにより、（）のなかの計算を外のMath.floorによって整数に変換され表示できる。
    return num3
}

//Q5
console.log('Q5')
console.log(stringth('aaaa'));
console.log(stringth('12345'));
console.log(stringth('123456'));

function stringth(str) {
    if (str.length >= 5) {
        return str.substr(0, 4) + "..."
    }
}

//Q6 引数に数字を渡すと、金額表記の文字列に変換して戻り値（return）で返す関数を作る
console.log(getMoneyFormat(1231567))

function getMoneyFormat(num) {
    var str = String(num)
    var newString = '' //1.2.3.4.5.6
    for (var i = str.length - 1, j = 1; i >= 0; i--, j++) { //forで後ろから数字を足している
        if (j % 3 === 0 && j !== str.length) {
            newString = ',' + str[i] + newString
        } else {
            newString = str[i] + newString
        }
    }
    return newString
}

//1 newstring = 6 + " =6
//2 newstring = 5 + 6 = 56
//3           =','+ 4 + 56 = ,456{3回に1回を入れる}
//4           = 3 + ',456' = 3,456
