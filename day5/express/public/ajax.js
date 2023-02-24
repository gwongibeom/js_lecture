// $.ajax({
//  url: 전송할 페이지
// type: 전송 방식 겟 포스트
// data : 전송할 데이터, 객체를 많이사용
// dataType : 서버로부터 받아올 데이터 형식 html xml json text
// })
//done(function(){
// 성공시 실행 코드
// })
// .fail(function(){
//     실패코드
// })
$('button').on('click', function () {
    const email = $('input[name=email]').val()
    const password = $('input[name=password]').val()

    $.ajax({
        url: '/login',
        type: 'POST',
        data: { email: email, password: password },
        dataType: 'JSON',
    })
        .done(function (json) {
            $('.result').text(json.email)
            console.log('🚀 ~ file: ajax.js:27 ~ json.email:', json.email)
        })
        .fail(function () {
            alert('ajax failed....')
        })
})
