const numElement = document.querySelector('#num')
let num = 3

numElement.innerHTML = num
const timer = setInterval(() => {
    num--
    numElement.innerHTML = num
    console.log(num)
    if (num == 0) {
        clearInterval(timer)
        alert('done.')
    }
}, 1000)
