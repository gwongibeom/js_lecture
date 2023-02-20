document.write('<h2>js를 시작 했어요</h2>')

// 변수 선언
var age1 = 18 //쓰지말자

//es6
const age2 = 18 //정"상수"라 수정 안됨 "마 재할당 하지마라 이거 놔라"
// age2 = 19 error

let age3 = 18 //수정 및 재할당 가능
console.log('🚀 ~ file: app.js:11 ~ age3:', age3)
age3 = 19 // 딱히 뭐 안남 문자열로 바꿔도 에러 안남
console.log('🚀 ~ file: app.js:13 ~ age3:', age3)

//js에서 사용하는 자료형
// 1. 문자열
const name = 'um jun sik'
// 2. 숫자열 ->
let num1 = Number('2.4')
console.log(typeof num1)
let num2 = Number('2.4살')
console.log(num2) //nan
// 3. 논리형
let isLogined = false
console.log('🚀 ~ file: app.js:25 ~ false:', false)
console.log(1 > 0)
//값이 들어 있는 거 왠만하면 true
//값이 없거나 부정적인거 왠만하면 false

// 4. 비어있는 데이터 (null, undefined)
let tmp
console.log('🚀 ~ file: app.js:30 ~ tmp:', tmp)
// undefiend 의도하지 않았는데 값이 비어 있음
let tmp2 = null
console.log('🚀 ~ file: app.js:33 ~ null:', null)
// null 의도적으로 비움
console.log(typeof tmp2) //오브젝트

console.log(1 + '1')
console.log(1 - '1')

let tmp3 = 3
console.log((tmp3 += 1))

console.log(++tmp3)

let array = [1, 2, 3]

// == != === !==
console.log(3 == '3')
console.log(3 === '3')

//논리 %% || !
// && 하나라도 false가 존재하면 false로 반환
// 하나라도 true가 존재하면 true로 반환
// ! 반대값을 반환

test = 1
console.log(test === 1 && true && '야호')
let anything = 'anything'

true || anything // 하나만 true여도 아니까 true 출력
false || anything // anything까지 봐야 true니까 anything 출력
true && anything // 둘다 true인걸 확인해야하니까 anything 출력
false && anything // false만 봐도 ㅈ된걸 아니까 false 출력

//삼항
console.log(test > 2 ? '마즘' : '아님')

//제어문 흐름제어
// 조건문 if
// 선택문 switch
// 반복문 for while do while

if (1 > 2) {
    console.log('whattt')
} else if (2 > 3) {
    console.log('whattt')
} else {
    console.log('wow')
}

//선택문
let flag = 1
switch (flag) {
    case 1:
        console.log('1조건')
        break
    case 2:
        console.log('2조건')
        break
    default:
        console.log('기본')
}

//반복문
while (flag < 5) {
    console.log('Want to go home')
    flag++
}

console.log('----------------------------------------------------')

do {
    console.log(flag)
    flag++
} while (flag < 5)

console.log('----------------------------------------------------')

for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.log('----------------------------------------------------')
//객체
//1. 내장 객체 date String Array Math

//가장 기본 객체 생성
const sample = new Object()

//날짜 객체
const date = new Date('2023,2,1')
// get~~~ 날짜 가져올때
// set~~~ 날짜 설정할때

const lastDay = new Date(2023, 11, 13)
let diff = lastDay.getTime() - date.getTime()

diff = Math.ceil(diff / (1000 * 60 * 60 * 24))
document.write('<h3>연말까지' + diff + '일 남았습니다.</h3>')

//수학객체
//0~10 정수 난수 객체
console.log(Math.floor(Math.random() * 11))

//배열
const arr = new Array()
arr[0] = 1
arr[1] = 2

const arr2 = new Array(1, 2)

const arr3 = [1, 2]

console.log(arr.join(':)'))

arr.reverse()
arr.sort()

let startIdx = 0
let endIdx = 1
console.log(arr.slice(startIdx, endIdx))

arr.concat(arr2)
arr.pop()
arr.push(3)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//2. 브라우저 객체
// window.location.href = 'http://localhost'

//3. 문서 객체 모델 dom html 문서 구조
