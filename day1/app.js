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
