//인접관계 선택자
//직접선택자로 요소를 먼저 선택 후 해ㅏㅇ 요소와 가까이 있는 요소를 선택

//부모 (나를 감싸고 있는 요소)
// $('h2').parent().css('border', '1px solid red')

//하위요소 나를 기준으로 선택자 뒤에 띄어쓰기를 통해 구분
// $('.wrap h2').css('color', 'blue')

//자식요소 선택한 요소를 기준으로 지정한 자식 요소만! 바로 아래 직계
// $('#inner-wrap > h2').css('color', 'red')
// $('#inner-wrap ').children('h2').css('color', 'blue')
// $('.wrap ').children().css('border', '1px solid red')

//css 적용방법 두가지
// $('.wrap ').children().css('border', '1px solid red').css("")
// $('.wrap ').children().css({color:"red",border:"1px solid red"})

//형(이전) 동생(이후 선택자)
// $('#target').prev().css('color', 'red')
// $('#target').next().css('color', 'blue')
// $('#target').next().next().css('color', 'purple')
// $('#target + li').css('color', 'red')

// $('#target').prevAll().css('color', 'red')
// $('#target').nextAll().css('color', 'blue')

//전체 형제 요소
// $('#target').siblings().css('color', 'red')

//범위 제한 전체 형(이전) / 동생 다음 요소
// $('#target').prevUntil('.con0').css('color', 'red')
// $('#target').nextUntil('.con4').css('color', 'blue')

// 상위 요소
// $('#target').parents('#inner-wrap').css('border', '1px solid red')

//상위 요소 중 가장 가까운 요소만!
// $('#target').closet('ul').css('border', '1px solid red')
