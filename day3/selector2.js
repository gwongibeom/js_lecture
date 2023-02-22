// 탐색 선택자
// 기본 선택자로 가져온 요소는 배열에 담겨 있다.
// 위치 탐색 선택자는 배열의 인덱스 값을 통해 접근

// first / last 선택자
// $('#menu li:first').css('background-color', 'red')
// $('#menu li:last').css('background-color', 'blue')

//even / odd 선택자
// $('#menu li:even').css('color', 'red') //짝수
// $('#menu li:odd').css('color', 'blue') //홀수

//nth-child(숫자n) : 선택한 요소의 무리 중 지정 된 숫자의 요소 선택
// $('#menu li:nth-child(4n)').css('color', 'red')
// $('#menu li:nth-child(2n+1)').css('color', 'blue')
//nth-last-child: 선택된 요소의 무리 중 지정 된 숫자의 요소중에서도 마지막 위치
// $('#menu li:nth-last-child(2)').css('color', 'blue')

// $('#menu li').eq(2).css('color', 'skyblue')
// $('#menu li').lt(2).css('color', 'salmon')
// $('#menu li').gt(2).css('color', 'violet')

//first-of-type / last-of-type 선택한 요소 중 첫번째 / 마지막 요소만!
// $('#menu li:first-of-type').css('color', 'salmon')
// $('#menu li:last-of-type').css('color', 'blue')

//only-child 부모요소의 단 하나뿐인 자식 요소 일때만
// $('li:only-child').css('border', '1px solid red')

//slice(startIdx, endIdx) 선택한 요소의 구간을 지정 함
// startIdx는 포함 endIdx는 미포함
// $('#menu li ').slice(1, 3).css('border', '1px solid red')

// jquery에서 제공하는 배열 관련 메서드
