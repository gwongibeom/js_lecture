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

//3. 문서 객체 모델 dom html 문서 구조
