$('btn2').hide()

$('.btn1').on('click', function () {
    $('.box').slideUp(1000, 'linear', function () {
        $('.btn2').show()
        $('.btn1').hide()
    })
})

$('.btn2').on('click', function () {
    $('.box').fadeIn(1000, 'swing', function () {
        $('.btn1').show()
        $('.btn2').hide()
    })
})

$('.btn3').on('click', function () {
    $('.box').slideToggle(1000, 'swing')
})

$('.btn4').on('click', function () {
    $('.box').fadeTo('fast', 0.3)
})

$('.btn5').on('click', function () {
    $('.box').fadeTo('slow', 1)
})

//////////////////////////////////////////////////////////////

$('.btn6').on('click', function () {
    $('.text1').animate({ 'font-size': 30, 'margin-left': 500 }, 2000, function () {
        alert('모션완료')
    })
})

$('.btn7').on('click', function () {
    $('.text2').animate({ 'margin-left': '+=50' }, 1000, function () {
        alert('모션완료')
    })
})

////////////////////////////////////////////////////////////////
$('.text1').animate({ marginLeft: '100px' }, 1000)
$('.text2').delay(2000).animate({ marginLeft: '100px' }, 1000)

function moveElement() {
    $('.text3').animate({ marginLeft: '+=50' }, 1000)
    $('.text4').animate({ marginLeft: '+=50' }, 1000)
    $('.text4').stop()
    $('.text5').animate({ marginLeft: '+=50' }, 1000)
    $('.text5').stop(true, true)
}

$('.btn8').on('click', moveElement)

$('.text6')
    .animate({ marginLeft: '100px' }, 1000)
    .animate({ marginLeft: '200px' }, 1000)
    .animate({ marginLeft: '300px' }, 1000)

$('.text7')
    .animate({ marginLeft: '100px' }, 1000)
    .animate({ marginLeft: '200px' }, 1000)
    .animate({ marginLeft: '300px' }, 1000)
$('.text7').finish()
