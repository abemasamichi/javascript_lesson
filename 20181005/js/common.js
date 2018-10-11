// 0~1までのランダムなっ数字
console.log(Math.random());

// 小数点を切る
console.log(Math.floor(3.555));

// 0~9までのランダムな数字（少数あり）
console.log(Math.random() * 10);

// 0~9までのランダムな整数
console.log(Math.floor(Math.random() * 10))

// 配置の値をランダムで出す
var names = ['亀井', '安部', '渡辺', ]
console.log(names[Math.floor(Math.random() * names.length)])

// 繰り上げ
console.log(Math.ceil(3.1))
// 四捨五入
console.log(Math.round(3.1))
console.log(Math.round(3.5))

// 最大・最小　それぞれ取得する
console.log(Math.min(1, 2, 3, 4))
console.log(Math.max(1, 2, 3, 4))

// 最大・最小値を決めたい
var randomNum = Math.floor(Math.random() * 100)
console.log(Math.min(radomNum, 50)) // 最大値を50とする
console.log(Math.max(randomNum, 50))　 // 最小値を50とする
