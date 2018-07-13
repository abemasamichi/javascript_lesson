var fruits = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'メロン', ]

//　配列の長さを取る
console.log(fruits, fruits.length)

var fruits2 = ['みかん', 'マンゴー'];

//配列を連結する
console.log(fruits.concat(fruits2))

//文字列として繋げる
var date = [2018, 7, 13]
console.log(date, date.join('/'))

//　配列の追加
var fruits3 = ['バナナ']
console.log(fruits3)
fruits3.push('ブドウ') //後ろに追加
console.log(fruits3)
fruits3.unshift('みかん') //前に追加
console.log(fruits3)

//配列の削除
fruits3.shift() //前を削除
console.log(fruits3)
fruits3.pop() //後ろから削除
console.log(fruits3)

//削除と追加(入れ替える)
fruits.splice(2, 4, 'みかん', 'みかん', 'みかん')
console.log(fruits)

// 配列を取り出す
var animal = ['犬', '猫', 'うさぎ', 'ハムスター', 'ぞう']
console.log(animal.slice(1, 3))
console.log(animal.slice(animal.length - 2, animal.length)) //配列の後ろから２つとってくる

// 並べ替え
var num = [3, 1, 2, 5]
console.log(num.sort())

// 配列の逆順
console.log(num.reverse())

var dateString = '2018/7/13'
console.log(dateString.split('/'))
