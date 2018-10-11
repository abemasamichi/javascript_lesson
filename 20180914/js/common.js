var nums = [] // 予めからの配列を用意してあとから値をいれる
for (var i = 0; i < 50; i++) {
    console.log(i)
    nums.push(i)

}
console.log(nums)



var nums = [] // 予めからの配列を用意してあとから値をいれる
for (var i = 50; i > 0; i--) {
    console.log(i)
    nums.push(i)

}
console.log(nums);


var fruits = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'めろん'];

console.log(fruits[0])
console.log(fruits[1])
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

var fruits2 = {
    red: ['りんご', 'さくらんぼ', 'いちご'],
    orange: ['かき', 'みかん', 'びわ'],
    yellow: ['バナナ', 'パイナップル', 'レモン']
};

console.log(fruits2['red'])
for (fruits in fruits2) {
    console.log(fruits + '(' + fruits2[fruits] + ')')
}

var date = '2013/4/26'
var newdate = date.split('/')
newdate.push('金')
newdate.push('10:30')
console.log(newdate)

var numObj = {
    odd: [],
    even: []
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        numObj.even.push(i) //evenの中に数字を入れる
    } else {
        numObj.odd.push(i)　 //oddの中に数字を入れる
    }
}

console.log(numObj)
