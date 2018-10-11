function test() {
    console.log('test')
}

test() //実行

function addNum(num, num1) {
    console.log(num + num1)
}

addNum(1, 10) //引数を渡して実行

function forNumber(num) {
    for (var i = 0; i < num; i++) {
        console.log(i)
    }
}

forNumber(10)
forNumber(2)
forNumber(4)

function addNum2(num, num1) {
    return num + num1
}

console.log(addNum2(1, 1000))


function numArray(num) {
    console.log(num)

    var ary = []

    for (var i = 0; i < num; i++) {
        ary[i] = i
    }
    return ary
}

console.log(numArray(20))
console.log(numArray(50))
