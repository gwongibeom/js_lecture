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
