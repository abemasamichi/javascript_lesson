var tabMenuItem = $('.tabMenuItem')
var tabItem = $('.tabItem')
var prve = $('.prev')
var next = $('.next')

var currentNum = 0

console.log(tabMenuItem)

tabMenuItem.on('click', function () {
    //console.log($(this).index()) // クリックした位置のタグを取ってくるｗ
    move($(this).index())
})

prve.on('click', function () {
    console.log('前', currentNum)
    // ここで前の値をmove関数に渡してあげる
    move()
})

next.on('click', function () {
    console.log('次', currentNum)
    // ここで次の値をmove関数に渡してあげる
    move()
})

// 引数num番目のクラスにだけonをつける関数
function move(num) {
    currentNum = num

    tabMenuItem.removeClass('on')
    tabMenuItem.eq(num).addClass('on')
    tabItem.removeClass('on')
    tabItem.eq(num).addClass('on')
}
