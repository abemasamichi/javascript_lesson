var num = 100;
num = 20;
console.log(num);

//constは再代入できない
const num2 = 10;
//num2 = 30;
console.log(num2);

const num3 = Math.floor(Math.random() * 10)
console.log(num3)

// num3の変数が奇数なら、奇数ですと表示する
// 2で割り切れなかったとき
if (num3 % 2 === 1) {
    console.log(num3, '奇数です')
};

if (num3 % 2 !== 0) {
    console.log(num3, '奇数です')
}

if (!(num3 % 2 === 0)) {
    console.log(num3, '奇数です')
}

// num3が奇数の場合は奇数です。
// 偶数の場合は偶数ですと表示

// もしも(偶数だったら){
// console.log('偶数です')
// } それ以外だったら{
// console.log('奇数です')
// }

var result = ''
if (num3 % 2 === 0) {
    console.log(num3, '偶数です')
    result = '偶数です'
} else if (num3 === 0) {
    console.log(num3, '0です')
    result = '0です'
} else {
    comsole.log(num3, '奇数です')
    result = '奇数です'
}
$('.box').html(num3 + 'は' + result)
