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
// each(func)
//$.each($("요소 선택"), func)
//배열에 저장된 데이터 만큼 func 반복 실행

const obj = [
    {
        area: '서울',
        name: '디지텍고 학생',
    },
    {
        area: '대전',
        name: '천예지',
    },
    {
        area: '붓싼',
        name: '갈매기',
    },
]

$(obj).each(function (i, data) {
    console.log(i + ': ', data)
})

$.each($('#menu2 li'), function (i, data) {
    console.log(i + ': ', data)
})

// 매개변수가 1개로 this! 키워드 사용
// 인덱스로 접근한 데이터 -> $(this)
//이렇게하면 내용 꺼내 먹어야해서 귀찮스
$.each($('#menu2 li'), function (i) {
    console.log(i + ': ', $(this))
})

//$.map() : 배열에 저장된 데이터 수 만큼 메서드를 반복실행
//필터와 비슷 하지만 기존데이터를 응용한 새로운 데이터를 생성 할때 good
//메서드에서 반환된 데이터를 가지고 새로운 배열을 만들어서 변환

const result = $.map(obj, function (data, idx) {
    if (data.area === '대전') {
        console.log(idx)
        return { ...data, age: 20 }
    }
})

//$.grep() : 배열에 저장된 데이터 수만큼 메서드를 반복 실행.
//인덱스 오름 차순으로 배열의 데이터를 불러옴. 메서드의 반환값이 트루면 데이터를 새배열에 저장해서 새로운 배열을 반환

const result2 = $.grep(obj, function (data, endIdx) {
    if (data.area == '대전') {
        return true
    } else {
        return false
    }
})

// $.inArray()배열안에 데이터가 있는가? 존재한다면 해당 데이터의 인덱스값
// $.isArray() 찾고자하는 데이터가 배열객체면 true
// $.merge() 두 배열을 하나의 객체로 결합

const areas = ['서울', '대전', '부산', '전주']
const countries = ['한국', '일본', '스페인', '프랑스']
const tmpObj = { name: '예지' }

const targetIdx = $.inArray('대전', areas)
console.log($.isArray(areas))
$.merge(areas, countries)

//$("요소").index("찾고자 하는 데이터")
const idxNum = $('li').index($('#target'))
console.log(idxNum)
