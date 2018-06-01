$('.box').parallaxFit({
    start: 0,
    end: 500,
    fromStyle: {
        transform: 'scale(1) rotate(0deg)',
        backgroundColor: 'rgb(255,0,0)',
    },
    toStyle: {
        transform: 'scale(2) rotate(180deg) perspective(500)',
        backgroundColor: 'rgb(0,255,0)',
        left: '200px'
    },

    // モーション2
    motion1Start: 600,
    motion1End: 800,
    motion1ToStyle: {
        top: '200px'
    },
    motion1Easing: 'easeInElastic',

    //　モーション3
    motion2End: 1500,
    motion2ToStyle: {
        width: '300px',
        height: '500px',
    },
    motion2Easing: 'easeInElastic',

})
