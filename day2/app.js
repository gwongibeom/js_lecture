// 문자열 String Object : 문자형 데이터를 객체로 취급

//문자열 객체 생성

let str1 = 'Hi!'
str1 = new String('Hello, world! world!')

str1.charAt(1)
console.log('🚀 ~ file: app.js:10 ~ str1.charAt(1):', str1.charAt(1))

//일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
console.log("🚀 ~ file: app.js:13 ~ str1.indexOf('world'):", str1.indexOf('world'))

//일치하는 문자를 찾아 제일 마지막에 일치하는 문자의 인덱스 번호
console.log(
    "🚀 ~ file: app.js:14 ~ str1.lastIndexOf('world'):",
    str1.lastIndexOf('world')
)

//문자열에서 왼쪽으로 일치하는 문자를 찾아 제일 먼저 찾은 문자 반환
console.log(str1.match('world'))

//제일 먼저 원하는 문자를 치완함
console.log(str1.replace('world', 'seoul'))
console.log(str1)

// indexof와 search의 차이점
//indexOf(): 문자열과 일치하는 데이터
//search():문자열,정규표현식,문자패턴과 일치하는 데이터
console.log(str1.search('world'))

//slice()
console.log(str1.slice(7, 20))
//a개의 문자를 자르고 (선택)b번째까지 살린다

//substring() 문자열 a~b까지를 반환 b는 포함 되지 않음
console.log(str1.substring(0, 6))

//split() 구분 문자를 기준으로 문자 데이터를 쪼개서 배열에 저장 후 반환
console.log(str1.split(','))

// toUpperCase,tolowerCase
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

//글자수
console.log(str1.length)

//concat
console.log(str1.concat(' 2023! '))
//trim 문자열의 양쪽 공백을 제거
console.log(str1.trimStart())

//2. 브라우저 객체
// window.location.href = 'http://localhost'
//window 가장 최상위 객체
//document screen location history navigator
// window.open('https://google.com', 'naver', 'width=800, height=800', 'scrollbars=no')

// const test = prompt('test', '기본값')
// console.log('🚀 ~ file: app.js:61 ~ test:', test)

// const test2 = confirm()

// setInterval() 계속해서 일정시간간격으로 함수를 호출
// setTimeout() 단 한번 일정시간이 흐른 후 함수를 호출

//screen 정보
console.log(screen.width)
console.log(screen.height)

console.log(location.href) //접속 url
console.log(location.host) // 호스트,포트번호

//navigather 현재 사용자가 사용하는 브라우저 정보
navigator.onLine
navigator.language
//history 사용자가 방문한 사이트의 기록 이전 방문 , 다음방문
// history.length
// history.back()
// history.forward()

//3. 문서 객체 모델 dom html 문서 구조

// 함수 : js코두의 묶음. 펌션 키워드를 사용하거나 화살표 함수 형태로 사용가능
//데이터를 전달받아 사용 할 수 있으며 실행 결과를 반환할 수도 있다.

function sayHi(name) {
    console.log('Hello ' + name)
}

const sayHi2 = function () {
    console.log('Hello')
}

const sayHi3 = () => {
    console.log('Hello')
}

sayHi('춘식아')
sayHi2()
sayHi3()

//매개변수 : 함수를 실행하기 위해 필요한 값을
//함수 외부에서 내부로 전달하기 위해 사용

//매개변수 - > 함수를 정의 할떄 선언 함수 내부에서 변수처럼 사용
//인수 -> 함수를 호출 할 때 지정, 타입에 제한X

//함수선언
function add(x, y) {
    x = x || 0
    y = y || 0
    return x + y // 자리에 남음 미전달시 undefined
}
let result = add(1, 2)
console.log(result)
//js에서 함수 -> 매개변수의 개수 <-> 인수의 개수 체크 x 2개 받은 3개 받은 알빠노
//인수가 부족 할때 -> 부족한 데이터는 undefined
//인수가 과함 -> 무시하지만 츤츤거리며 argument 객체로 저장 해줌

//화살표 함수 추가
const mulitply = (x, y) => {
    return x * y
}

const func1 = (x) => {
    return x
}
//화살표 함수는 중복돤 먀갸 뵨슈 이름 허용 x

//화살표 함수는 this,arguments,super 사용 불가능
// this 자기자신
//super

//arguments를 사용 할 수 없다? -> 가변 인자 불가능? ->xxx
// rest 파라미터 함수에 전달 된 인수들을 배열로 전달 받는 방법
//rest는 반드시 마지막요소,단한개만 사용 가능
function f2(...params) {
    return params.filter((num) => num >= 5)
}
console.log(f2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))

///es6 도입 스프레드 "..."
//하나로 뭉처져 있는 여러값의 집합을 펼쳐서 개별적인 값의 목록으로 만듬
//순회 할 수 있는 이터러블에서 사용 가능
//스프레드 문법의 결과는 값이 아니다.

// 1. 함수호출 시 인수에서 사용하는 경우
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(Math.max(...numbers))

//2. 배열 내부에서 사용하는 경우
console.log([1, 2].concat([3, 4]))
const result2 = [...[1, 2], ...[3, 4]]
console.log('🚀 ~ file: app.js:156 ~ result2:', result2)

const arr1 = [1, 4]
const arr2 = [2, 3]

arr1.splice(1, 0, ...arr2)
console.log('🚀 ~ file: app.js:162 ~ arr1:', arr1)

//배열의 복사를 위해 slice를 사용 했음
const origin = [10, 20]
const copy = origin.slice()
const trendCopy = [...origin]
//객체 내부에서 사용하는 경우
const obj1 = { x: 1, y: 1 }
const copyObj1 = { ...obj1 }

const mergred = { x: 1, y: 1, ...{ a: 1, b: 2 } }
