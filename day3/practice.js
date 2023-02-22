//객체 조작
// 1.객체편집 : 생성 복제 삭제 변경 추가

//$("요소선택").html()
// 선택한 요소의 하위 요소를 가져와 문자열로 반환/ 모두제거히고 새값으로 바꿀 때
// $('#sec_1').html('<h1>와 정말 유익해</h1>')
//$("요소선택").text()
// 선택한 요소에 포함되어 있는 전체 텍스트를 가져옴!
// $('#sec_1').text('엄준식')

//$("요소선택").attr("속성명") 선택한 요소의 속성값을 가져옴
// console.log($('img').attr('src'))
//$("요소선택").attr("속성명","새깂") 선택한 요소의 속성값을 가져옴
// const newUm =
//     'https://w.namu.la/s/8689c622e86d89ab671776d51f2840ab6a5bb7b51e4f974046ce383282a3bcac59c240cb22a749a256d043b3f894a78b7a62732a6f5cb9d26160fc966702ab851ed69606cc420fb309bc90bf8853eaf9cac178df193f0ad9f876465032ea64d67507013f49b8720162ad27f678a8b8ee'
// console.log($('img').attr('src', newUm))
//$("요소선택").removeAttr("속성명") 선택한 요소의 속성값 제거

// $('p').addClass('클래스 이름') 지정한 클래스 값 생성
// $('p').removeClass('클래스 이름') 지정한 클래스 값 삭제
// $('p').toggleClass('클래스 이름') 있으면 삭제 없으면 생성
// $('p').hasClass('클래스 이름') 클래스 값이 있으면 true

$('#p1').addClass('salmon')
$('#p1').addClass('skyblue')
$('#p2').removeClass('salmon')
$('#p4').toggleClass('blue')
console.log($('#p5').hasClass('cantsee'))

//val form 요소의 value 속성값 가져올때
//val("새값") : form 요소위 value 값 업데이트

// value 속성의 기본값을 알려주는 props("defaultValue") (html 태그에서 준값)

// 요소의 속성을 조작할 때 사용
// CSS box-model 했던 부분을 떠올려봅시다
// $("요소선택").height() // padding, border를 제외한 높이를 반환
// $("요소선택").height(100) // 높이를 재설정
// $("요소선택").width() // padding, border를 제외한 너비를 반환
// $("요소선택").width(100) // 너비를 재설정

// $("요소선택").innerHeight() // padding을 포함한 높이를 반환
// $("요소선택").innerHeight(100) // 높이 재설정
// $("요소선택").innderWidth() // padding을 포함한 너비를 반환
// $("요소선택").innderWidth(100) // 너비 재설정

// $("요소선택").outerHeight() // padding, border를 포함한 높이를 반환
// $("요소선택").outerHeight(100) // 높이 재설정
// $("요소선택").outerWidth() // padding, border를 포함한 너비를 반환
// $("요소선택").outerWidth(100) // 너비 재설정

//------------------------------------------------
// 절댓값
// $("요소선택").position().left() // 선택한 요소의 위치 값을 반환
// $("요소선택").position().right()
// $("요소선택").position().top()
// $("요소선택").position().bottom()

// offset : 선택한 요소가 문서에서 수직/수평으로 얼마나 떨어져 있는지!
// 상댓값
// $("요소선택").offset().left()
// $("요소선택").offset().right()
// $("요소선택").offset().top()
// $("요소선택").offset().bottom()
//-------------------------------------------------

// $("요소선택").scrollLeft() // 브라우저의 수평 스크롤 이동 높잇값 반환
// $("요소선택").scrollTop() // 브라우저의 수직 스크롤 이동 높잇값 반환

// 2.복제
// 3.삭제
// 4.속성변환
