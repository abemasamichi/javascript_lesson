var fruits = ['みかん', 'ぶどう', 'さくらんぼ']

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

var fruits2 = [
['みかん'],
['ぶどう'],
['さくらんぼ'],
]

var fruits2 = [
    ['りんご', 'さくらんぼ', 'いちご'],
    ['かき', 'みかん', 'びわ'],
    ['バナナ', 'パイナップル', 'レモン'],
]

console.log(fruits2)
console.log(fruits2[1])
console.log(fruits2[1][1])

var orange = fruits2[1]
console.log(orange)
console.log(orange[1])

//Object
var fruits3 = {
    red: ['みかん', 'ぶどう', 'さくらんぼ'],
    orange: ['かき', 'みかん', 'びわ'],
    yellow: ['バナナ', 'パイナップル', 'レモン'],
}

var fruits4 = {
    red: 'りんご',
    orange: 'みかん',
    yellow: 'ばなな',
}
console.log(fruits4.red)
console.log(fruits4['red'])

console.log(fruits3.red)

console.log(fruits3.yellow[1])

var color = 'orange'
console.log(fruits3[color])

var fruits = ['みかん', 'ぶどう', 'さくらんぼ']

console.log(fruits.length)
for (var i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

//
var colors = ['赤', '青', '黄色']
console.log(colors)
colors[0] = '茶色'
colors[3] = '紫'
console.log(colors)

//オブジェクトに値を代入する
var colors2 = {}
colors2.red = '赤'
console.log(colors2)

for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i + 'は偶数！')
    }
}

// Q1 %で余りをだして、偶数を判断する
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//Q2 if文を使って＆＆と　ｌｌをうまく使ってみよう
for (var i = 1; i <= 100; i++) {
    if ((i >= 10 && i <= 30) || (i >= 70 && i <= 90)) {
        console.log(i)
    }
}



// Q3
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}



//Q4
for (var i = 1900; i <= 2100; i++) {
    if (i % 4 === 0 && i % 100 !== 0) {
        console.log(i)
    }
}
